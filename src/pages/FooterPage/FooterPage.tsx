import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./FooterPage.css";

export type FooterPageProps = LayoutElementPosition;

export const FooterPage: React.FC<FooterPageProps> = (
  props: FooterPageProps,
) => {
  return (
    <Page
      {...props}
      centerContent={true}
      key="footer-page"
      className="footer-page"
    >
      <p className="footer-page__text">
        Inspired by an amazing magazine about typegraphy{" "}
        <a
          href="http://www.typejournal.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-page__link"
        >
          «Шрифт»
        </a>
      </p>
      <p className="footer-page__text">
        Huge thanks to amazing people behind{" "}
        <a
          href="https://www.latofonts.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-page__link"
        >
          {" "}
          Lato
        </a>{" "}
        and{" "}
        <a
          href="https://www.behance.net/gallery/2075950/Typeface-Adec20-%28free%29"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-page__link"
        >
          Adec
        </a>{" "}
        fonts
      </p>
      <p className="footer-page__text">Zhuravsky Max, 2019</p>
    </Page>
  );
};
