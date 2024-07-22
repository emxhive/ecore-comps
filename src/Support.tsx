import "./css/support.css";

import React from "react";

import "primeicons/primeicons.css";

import { Outlet } from "react-router-dom";

export default function Support() {
  return (
    <div className="spt-parent card">
      <Outlet />
    </div>
  );
}
