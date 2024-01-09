import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "../HeaderLayout";
import FooterLayout from "../FooterLayout";

function MainLayout() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default MainLayout;
