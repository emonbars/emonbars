/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, NotFound } from "./screens";

const RootNavigator = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RootNavigator;
