import React from "react";
import "./css/pages.css";
import "primeicons/primeicons.css";
import { Avatar } from "primereact/avatar";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import { currencies, lang, themz, timezn } from "./data.js";
import { currentTZone, mxbox } from "./MxFxns.tsx";
import { useMediaQuery } from "@mui/material";

export default function Settings() {
  const isPhone = useMediaQuery("(max-width: 500px)");

  const mainView = (
    <div className="pg-parent">
      {/* <Dialog></Dialog> */}
      {mxbox({
        header: "Profile",
        body: [...data.profile],
        isPhone,
      })}
      {mxbox({
        header: "General",
        body: [...data.general],
        isPhone: false,
      })}
      {mxbox({
        header: "Notification",
        body: [...data.notify],
        isPhone,
      })}
    </div>
  );
  return mainView;
}

const data = {
  profile: [
    [
      {
        title: "Username ",
        info: "Set up your username or preferred nickname. It is advisable to avoid using your real name ",
      },

      {
        isText: false,
        data: "",
      },

      { text: "Edit", action: null },
    ],
    [
      {
        title: "Avatar",
        info: "Set up a preferred Avatar for your account",
      },

      {
        isText: false,
        data: (
          <Avatar
            icon="pi pi-user"
            size="large"
            shape="circle"
            className="avatar"
          />
        ),
      },

      { text: "Edit", action: null, disabled: true },
    ],
  ],

  general: [
    [
      {
        title: "Language ",
        info: "",
      },

      {
        isText: false,
        data: "",
      },
      {
        text: (
          <Dropdown
            className="dropdwn h-10 "
            value="EN"
            options={lang}
            disabled
          />
        ),
        action: null,
      },
    ],

    //TIMEZONE
    [
      {
        title: "UTC Time Zone",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: (
          <Dropdown
            className="dropdwn h-10 "
            value={currentTZone()}
            options={timezn}
            disabled
          />
        ),
        action: null,
      },
    ],
    [
      {
        title: "Currency",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: (
          <Dropdown
            className="dropdwn h-10 "
            value="USD"
            options={currencies}
            disabled
          />
        ),
        action: null,
      },
    ],
    [
      {
        title: "Theme ",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: (
          <SelectButton
            disabled
            className="slct-btn"
            value={themz[0].icon}
            options={themz}
            optionLabel="icon"
          />
        ),
        action: null,
      },
    ],
  ],

  notify: [
    [
      {
        title: "Email",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      { text: "Edit", action: null },
    ],
    [
      {
        title: "Telegram ",
        info: "",
      },

      {
        isText: false,
        data: "",
      },
      { text: "Edit", action: null },
    ],

    [
      {
        title: "SMS ",
        info: <i>... charges may apply</i>,
      },

      {
        isText: false,
        data: "",
      },

      { text: "Edit", action: null },
    ],
  ],
};
