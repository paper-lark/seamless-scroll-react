import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./TitlePage.css";

export type TitlePageProps = LayoutElementPosition;

export const TitlePage: React.FC<TitlePageProps> = (props: TitlePageProps) => {
  return (
    <Page {...props} key="title-page" className="title-page">
      <h1 className="title-page__header">Seamless scroll</h1>
    </Page>
  );
};
