import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BreadScrumbs from "../components/BreadScrumb/BreadScrumbs";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <BreadScrumbs /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
