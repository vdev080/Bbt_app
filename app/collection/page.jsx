import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/Collection/PageHeader/PageHeader";
import CollectionListTop from "../Components/Collection/CollectionListTop/CollectionListTop";
import CollectionListBottom from "../Components/Collection/CollectionListBottom/CollectionListBottom";
import FormSection from "../Components/Collection/FormSection/FormSection";

const Collection = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      <CollectionListTop />
      <FormSection />
      <CollectionListBottom />
      <Footer />
    </main>
  );
};

export default Collection;
