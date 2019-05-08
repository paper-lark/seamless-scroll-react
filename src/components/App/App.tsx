import React from "react";
import { DescriptionPage } from "../../pages/DescriptionPage/DescriptionPage";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";
import { FooterPage } from "../../pages/FooterPage/FooterPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { PanoramaPage } from "../../pages/PanoramaPage/PanoramaPage";
import { TitlePage } from "../../pages/TitlePage/TitlePage";
import { Layout } from "../Layout/Layout";

const App: React.FC = () => {
  const pages = [
    TitlePage,
    MainPage,
    PanoramaPage,
    DescriptionPage,
    DetailsPage,
    FooterPage,
  ];
  return <Layout>{pages}</Layout>;
};

export default App;
