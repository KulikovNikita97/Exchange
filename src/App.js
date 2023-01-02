import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import store from "./Redux/ReduxStore";
import { Provider } from "react-redux";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import ChartsContainer from "./Charts/ChartsContainer";
import Home from "./Home/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Box
        className="app-wrapper"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <Header />
        <Profile />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/charts" element={<ChartsContainer />} />
          </Routes>
        </div>
      </Box>
    </Provider>
  );
};

export default App;
