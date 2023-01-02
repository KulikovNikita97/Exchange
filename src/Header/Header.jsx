import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logo from "./../exchange.png";
import { Button, Paper, InputBase, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";

const Header = () => {
  return (
    <div className={s.header}>
      <Button variant="text">
        <Link className={s.link} to="/charts">
          <AppsIcon fontSize="large" />
        </Link>
      </Button>

      <Button variant="text">
        <Link className={s.link} to="/home">
          <img src={logo} alt="home" />
        </Link>
      </Button>

      <Paper
        className={s.InputBase}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider sx={{ height: 25, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Header;
