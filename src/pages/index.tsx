/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Outlet } from "react-router-dom";
import { MyMenu } from "../components";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <MyMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: '100%',
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
