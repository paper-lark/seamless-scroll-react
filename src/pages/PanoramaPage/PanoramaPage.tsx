import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./PanoramaPage.css";

export type PanoramaPageProps = LayoutElementPosition;

export const PanoramaPage: React.FC<PanoramaPageProps> = (
  props: PanoramaPageProps,
) => {
  return (
    <Page {...props} key="panorama-page" className="panorama-page">
      <img
        className="panorama-page__image"
        src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=v2osk-303977-unsplash.jpg"
        alt="Panorama"
      />
      <a
        className="panorama-page__credits"
        href="https://unsplash.com/@v2osk?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from v2osk"
      >
        <span className="panorama-page__credits-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "12px",
              width: "auto",
              position: "relative",
              verticalAlign: "middle",
              top: "-2px",
              fill: "white",
            }}
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg>
        </span>
        <span className="panorama-page__credits-text">v2osk</span>
      </a>
    </Page>
  );
};
