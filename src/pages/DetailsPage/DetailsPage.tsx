import React from "react";
import { LayoutElementPosition } from "../../components/Layout/Layout";
import { Page } from "../../components/Page/Page";
import "./DetailsPage.css";

export type DetailsPageProps = LayoutElementPosition;

export const DetailsPage: React.FC<DetailsPageProps> = (
  props: DetailsPageProps,
) => {
  return (
    <Page {...props} key="details-page" className="details-page">
      <div className="details-page__text-container">
        <p className="details-page__text">
          Well, actually there is no magic involved (obviously). So, what is
          actually happening here is that we have sections, called "pages", that
          hold all the contents of the page. All of these so-called pages have
          fixed width and are positioned absolutely. That allows to control page
          positioning and achieve the desired behavior.
        </p>

        <p className="details-page__text">
          In case page children fit onto the page without overflowing it
          horizonally, the layout works pretty much the same way document flow
          with statically positioned elements does. The difference comes when
          page children start to overflow the page. In this case, once we start
          scrolling that page, we need to slightly "slow down" all the following
          pages. This way we have some scroll height to dedicate to scrolling
          children of the current page vertically while the page itself remains
          on top of the screen.
        </p>

        <p className="details-page__text">
          Of course, in reality everything gets a bit more complicated (as per
          usual). One of such caveats is that once we start using assets, such
          as fonts and images, we need to calculate heights of pages once again
          as soon as the assests are loaded.
        </p>

        <p className="details-page__text">
          One thing I have found out while implementing this page is that it is
          important to use CSS transformations instead of absolute positioning.
          I found this to have a huge performance and visual impact. If you are
          interested about the why's, there is a{" "}
          <a
            href="https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/"
            target="_blank"
            rel="noopener noreferrer"
          >
            good article by Paul Irish
          </a>{" "}
          on that topic.
        </p>
      </div>
    </Page>
  );
};
