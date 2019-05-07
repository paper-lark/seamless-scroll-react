import _ from "lodash";
import React, { createRef } from "react";
import { clamp } from "../../utils/Helpers";
import { Page } from "../Page/Page";

export interface LayoutElementPosition {
  ref: React.RefObject<Page>;
  offset: number;
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
    console.log("Layout mounted");

    document.addEventListener("scroll", this.handleScroll, {
      passive: false,
    });
    this.updateChildrenHeights();
  }

  public componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  public render() {
    const height =
      this.state.height.reduce((prev, current) => prev + current, 0) +
      this.state.delta.reduce((prev, current) => prev + current, 0);
    return (
      <div className="layout" style={{ height }}>
        {this.getPages()}
      </div>
    );
  }

  private handleScroll = (event: Event) => {
    // TODO: implement own
    event.stopPropagation();
    event.preventDefault();
    this.forceUpdate();
  }

  private debouncedHandleScroll = _.debounce(this.handleScroll, 5, {
    trailing: true,
    leading: true,
  });

  private getPages() {
    const screenTop = window.pageYOffset;
    let offset = 0;
    let tempOffset = 0;
    return this.props.children.map((child, i) => {
      const ref = createRef<Page>();
      const currentDelta = clamp(screenTop - offset, 0, this.state.delta[i]);
      const currentOffset = offset;
      offset += this.state.height[i];
      tempOffset += currentDelta;
      this.pageRefs.push(ref);
      return child({
        ref,
        offset: currentOffset + tempOffset,
        delta: currentDelta,
      });
    });
  }

  private updateChildrenHeights() {
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
