import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./MainPage.css";

export type MainPageProps = LayoutElementPosition;

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
  return (
    <Page {...props} key="main-page" className="main-page">
      <p className="main-page__text">
        This page is a little demonstration of what I called a "seamless scroll"
        layout. The main goal of such layout is to release the user from
        necessity of scrolling the page horizontally while allowing some of the
        page elements to overflow page width.
      </p>
      <p className="main-page__text">
        Enough talk, time to see it in action!{" "}
        <span role="img" aria-label="Fire">
          🔥
        </span>
      </p>
    </Page>
  );
};
