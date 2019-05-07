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
      <div className="description-page__text-container">
        <p className="description-page__text">
          As you might have noticed, the beautiful panorama above was scrolling
          horizonally as you scrolled the page despite that the scroll direction
          was different. Moreover, if you notice the scrollbar on the right
          shows the position you are at correctly and can even be used to
          navigate around the page. So do all other scroll controls work. Pure
          magic!{" "}
          <span role="img" aria-label="Stars">
            ✨
          </span>
        </p>

        <p className="description-page__text">
          Well, there is not that much magic involved. So, what is actually
          happening here is that we have blocks, called "pages", which hold all
          the contents of the page. All these so-called pages have fixed width
          and absolute positioning. That's what helps us achieve desired page
          behavior. In case page children fit onto the page without overflowing
          it horizonally, the layout works the same way document flow with
          statically positioned elements does.
        </p>

        <p className="description-page__text">
          The difference comes when page children start to overflow the page. In
          this case, once we start scrolling that page, we need to slightly slow
          down all the following pages, not allowing them to replace the
          current. This way we have some scroll height to dedicate to scrolling
          page children vertically while the page itself is on the top of the
          screen.
        </p>

        <p className="description-page__text">
          Of course, in reality everything gets a bit more complicated. One of
          the caveats is that once we start using fonts that are downloaded from
          the web and images we need to re-calculate all page heights once the
          assests are loaded.
        </p>

        <p className="description-page__text">
          There is one important thing to know in case you want to implement
          seamless scroll yourself. That is, make sure to use CSS{" "}
          <code>transform</code> property instead of <code>top</code> as this
          makes a huge visual difference. If you are interested about the why's,
          there is a{" "}
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
