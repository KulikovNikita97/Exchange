import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./Home.module.css";

const Home = () => {
  const [giveArea, setGiveArea] = useState(false);

  return (
    <div>
      <header>
        <h1>currency converter</h1>
      </header>
      <div className={s.currencies}>
        {giveArea ? (
          <>
            <TextField
              id="outlined-basic"
              label="Second currency"
              variant="outlined"
              type="number"
            />

            <div className={s.buttonSwap}>
              <Button
                onClick={() => {
                  setGiveArea(false);
                }}
                variant="contained"
              >
                Swap
              </Button>
            </div>

            <TextField
              id="outlined-basic"
              label="First currency"
              variant="outlined"
              type="number"
            />
          </>
        ) : (
          <>
            <TextField
              id="outlined-basic"
              label="First currency"
              variant="outlined"
              type="number"
            />

            <div className={s.buttonSwap}>
              <Button
                onClick={() => {
                  setGiveArea(true);
                }}
                variant="contained"
              >
                Swap
              </Button>
            </div>

            <TextField
              id="outlined-basic"
              label="Second currency"
              variant="outlined"
              type="number"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
