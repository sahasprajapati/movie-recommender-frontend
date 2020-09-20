import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../Layout/Layout";

import CustomThemeProvider from "../../CustomThemeProvider";

export default function App() {
  return (
    <CustomThemeProvider>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Layout />
    </CustomThemeProvider>
  );
}
