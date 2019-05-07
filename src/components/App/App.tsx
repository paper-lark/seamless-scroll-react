import React from "react";
import { DescriptionPage } from "../../pages/DescriptionPage/DescriptionPage";
import { FooterPage } from "../../pages/FooterPage/FooterPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { PanoramaPage } from "../../pages/PanoramaPage/PanoramaPage";
import { Layout } from "../Layout/Layout";

const App: React.FC = () => {
  const pages = [MainPage, PanoramaPage, DescriptionPage, FooterPage];
  return <Layout>{pages}</Layout>;
};

export default App;
