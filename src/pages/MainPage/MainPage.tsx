import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./MainPage.css";

export type MainPageProps = LayoutElementPosition;

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
  return (
    <Page {...props} key="main-page" className="main-page">
      <h1 className="main-page__header">Seamless scroll</h1>
      <p className="main-page__text">
        This page is a little demonstration of what I called a "seamless
        scroll". The main point of it is that you can scroll the page normally
        without the need to reach for your mouse to scroll long vertical
        elements.
      </p>
      <p className="main-page__text">
        Enough talk, time to see it in action!{" "}
        <span role="img" aria-label="Shooting star">
          💫
        </span>
      </p>
    </Page>
  );
};
