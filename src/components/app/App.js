import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import "./style.css";
import FeatureList from "../../mocks/FeatureList";

export default function App() {
  return <PageWrapper features={FeatureList} />;
}
