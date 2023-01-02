import { Button } from "@mui/material";
import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <header className={s.header}>
        <h1>broker's profile</h1>
      </header>
      <div className={s.userName}>Ars Nova</div>
      <div>
        <Button variant="text" className={s.buttons}>
          Profile managment
        </Button>
      </div>
      <div>
        <Button variant="text" className={s.buttons}>
          Reports
        </Button>
      </div>
      <div>
        <Button variant="text" className={s.buttons}>
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default Profile;
