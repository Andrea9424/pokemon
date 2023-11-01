import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/Header";

const privateRoter = () => {
  const { name } = useSelector((store) => store.trainer);
  if (name) {
    return (
      <Header>
        <Outlet />
      </Header>
    );
  }
  return <Navigate to="/" />;
};

export default privateRoter;
