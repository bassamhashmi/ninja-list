import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutPropsType } from "../types";

export default function Layout({ children }: LayoutPropsType) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
