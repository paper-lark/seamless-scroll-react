import _ from "lodash";
import React, { createRef } from "react";
import { clamp } from "../../utils/Helpers";
import { Page } from "../Page/Page";

export interface LayoutElementPosition {
  ref: React.RefObject<Page>;
  offset: number;
  hardOffset: number;
  delta: number;
}

export interface LayoutProps {
  children: Array<(props: LayoutElementPosition) => React.ReactNode>;
}

export interface LayoutState {
  height: number[];
  delta: number[];
}

export class Layout extends React.Component<LayoutProps, LayoutState> {
  public pageRefs: Array<React.RefObject<Page>> = [];
  public state: LayoutState = {
    height: [],
    delta: [],
  };

  public componentDidMount() {
    document.addEventListener("scroll", this.debouncedHandleScroll);
    document.addEventListener("load", this.updateChildrenHeights);
    window.onresize = this.updateChildrenHeights;
    if (!!(document as any).fonts) {
      (document as any).fonts.onloadingdone = this.updateChildrenHeights;
    }
    this.updateChildrenHeights();
  }

  public componentWillUnmount() {
    document.removeEventListener("scroll", this.debouncedHandleScroll);
    document.removeEventListener("load", this.updateChildrenHeights);
    window.onresize = null;
    if (!!(document as any).fonts) {
      (document as any).fonts.onloadingdone = null;
    }
  }

  public render() {
    const height =
      this.state.height.reduce((prev, current) => prev + current, 0) +
      this.state.delta.reduce((prev, current) => prev + current, 0);
    document.body.style.height = `${height}px`;
    return <div className="layout">{this.getPages()}</div>;
  }

  private handleScroll = () => {
    this.forceUpdate();
  }

  private debouncedHandleScroll = _.debounce(this.handleScroll, 16, {
    trailing: true,
    leading: true,
  });

  private getPages() {
    const { height, delta } = this.state;
    const screenTop = window.pageYOffset;
    const screenHeight = window.innerHeight;
    let globalOffset = 0;

    return this.props.children.map((child, i) => {
      if (!delta.length || !height.length) {
        // set all pages on top on the first render
        const ref = createRef<Page>();
        this.pageRefs.push(ref);
        return child({
          ref,
          hardOffset: 0,
          offset: 0,
          delta: 0,
        });
      }

      // calculate page position
      const calculatedDelta = clamp(screenTop - globalOffset, 0, delta[i]);
      let calculatedOffset = globalOffset + calculatedDelta - screenTop;
      let calculatedHardOffset = 0;
      if (calculatedOffset > screenHeight) {
        calculatedHardOffset = screenHeight + 1;
        calculatedOffset = 0;
      } else if (calculatedOffset < -this.state.height[i]) {
        calculatedHardOffset = -this.state.height[i];
        calculatedOffset = 0;
      }
      globalOffset += height[i] + calculatedDelta;

      return child({
        ref: this.pageRefs[i],
        hardOffset: calculatedHardOffset,
        offset: calculatedOffset,
        delta: calculatedDelta,
      });
    });
  }

  private updateChildrenHeights = () => {
    console.log("Recalculating heights...");

    const height = this.pageRefs.map((ref) =>
      !!ref.current ? ref.current.getHeight() : 0,
    );
    const delta = this.pageRefs.map((ref) =>
      !!ref.current ? ref.current.getDelta() : 0,
    );
    this.setState({
      height,
      delta,
    });
  }
}
