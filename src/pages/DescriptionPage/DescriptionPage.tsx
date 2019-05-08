import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./DescriptionPage.css";

export type DescriptionPageProps = LayoutElementPosition;

export const DescriptionPage: React.FC<DescriptionPageProps> = (
  props: DescriptionPageProps,
) => {
  return (
    <Page {...props} key="description-page" className="description-page">
      <p className="description-page__text">
        As you might have noticed, the beautiful panorama above was scrolling
        horizonally as you scrolled the page despite that the scroll direction
        was different. Moreover, if you notice the scrollbar on the right shows
        the position you are at correctly and can even be used to navigate
        around the page. So do all other scroll controls work.
      </p>
      <p className="description-page__text">Pure magic!</p>
    </Page>
  );
};
