import React, { createRef, CSSProperties } from "react";
import "./Page.css";

export interface PageProps {
  children: React.ReactNode;
  hardOffset: number;
  offset: number;
  delta: number;
  style?: CSSProperties;
  className?: string;
  centerContent?: boolean;
}

export class Page extends React.PureComponent<PageProps> {
  public bodyRef = createRef<HTMLDivElement>();
  public innerRef = createRef<HTMLDivElement>();

  public render() {
    const className = [this.props.className || "", "page"].join(" ");
    return (
      <section
        ref={this.bodyRef}
        className={className}
        style={{
          top: this.props.hardOffset,
          transform: `translateY(${this.props.offset}px)`,
          ...this.props.style,
        }}
      >
        <div
          ref={this.innerRef}
          style={{ transform: `translate(${-this.props.delta}px)` }}
          className={
            !!this.props.centerContent ? "page__centered" : "page-inner"
          }
        >
          {this.props.children}
        </div>
      </section>
    );
  }

  public getHeight = (): number => {
    return !!this.bodyRef.current ? this.bodyRef.current.offsetHeight : 0;
  }

  public getDelta = (): number => {
    if (!this.innerRef.current || !this.bodyRef.current) {
      return 0;
    }
    const cs = getComputedStyle(this.bodyRef.current);
    const paddingX =
      parseFloat(cs.paddingLeft || "") + parseFloat(cs.paddingRight || "");
    const borderX =
      parseFloat(cs.borderLeftWidth || "") +
      parseFloat(cs.borderRightWidth || "");
    const bodyWidth = this.bodyRef.current.offsetWidth - paddingX - borderX;

    return Math.max(this.innerRef.current.offsetWidth - bodyWidth, 0);
  }
}
