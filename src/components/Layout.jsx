import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar/SideBar";

export const Layout = () => {
  return (
    <Fragment>
      <SideBar />
      <Outlet />
    </Fragment>
  );
};
