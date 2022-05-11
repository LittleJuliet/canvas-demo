/* eslint-disable react/jsx-pascal-case */
import { useEffect } from "react";
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
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
