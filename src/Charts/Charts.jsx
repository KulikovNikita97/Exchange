import React from "react";
import Button from "@mui/material/Button";
import s from "./Charts.module.css";
import Preloader from "../Preloader/Preloader";

const Charts = (props) => {
  return (
    <div className="App">
      <header>
        <h1>currency charts</h1>
      </header>
      <div className={s.field}>
        <Button variant="contained" onClick={() => props.bitcoinCourse()}>
          get bitcoin course
        </Button>
        <div>{props.fromState.isLoading ? <Preloader /> : null}</div>
        <div>{props.fromState.setInStateBitcoinCourse.categories}</div>
      </div>
    </div>
  );
};

export default Charts;
