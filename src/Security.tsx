import { Avatar } from "primereact/avatar";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import React from "react";
import "./css/pages.css";
import { currencies, lang, themz, timezn, userdata } from "./data.js";
import { currentTZone, hideText, mxbox } from "./MxFxns.tsx";
import { useMediaQuery } from "@mui/material";

export default function Security() {
  const isPhone = useMediaQuery("(max-width: 500px)");

  const mainView = (
    <div className="pg-parent">
      {/* <Dialog></Dialog> */}
      {mxbox({
        header: "Two Factor Authentication (2FA)",
        body: [...data.twofa],
        isPhone: isPhone,
      })}
      {mxbox({
        header: "Advanced",
        body: [...data.advanced],
        isPhone,
      })}
      {mxbox({
        header: "Account Management",
        body: [...data.manage],
        isPhone,
      })}
    </div>
  );
  return mainView;
}

const data = {
  twofa: [
    [
      {
        title: "Email Address ",
        info: "",
      },

      {
        isText: false,
        data: hideText(userdata.email, 0),
      },

      { text: "Edit", action: null },
    ],
    [
      {
        title: "Login Password",
        info: "",
      },

      {
        isText: false,
        data: "****",
      },

      { text: "Edit", action: null },
    ],

    [
      {
        title: "Phone Number",
        info: "",
      },

      {
        isText: false,
        data: hideText(userdata.phone),
      },

      { text: "Edit", action: null },
    ],
    [
      {
        title: "Authenticator App",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      { text: "Manage", action: null, disabled: true },
    ],
    [
      {
        title: "PassKeys",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      { text: "Manage", action: null, disabled: true },
    ],
  ],

  advanced: [
    [
      {
        title: "Anti-Phising Code ",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: "Edit",
        action: null,
      },
    ],

    //3RD PARTY
    [
      {
        title: "Third Party Accounts",
        info: "Enable sign-in with Google, Apple, Microsoft, etc. ",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: "Manage",
        action: null,
      },
    ],
    [
      {
        title: "Manage Devices",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: "Manage",
        action: null,
      },
    ],
    [
      {
        title: "Account Activity ",
        info: "Review account activity for suspicious activity.. ",
      },

      {
        isText: false,
        data: "",
      },

      {
        text: "Manage",
        action: null,
      },
    ],
  ],

  manage: [
    [
      {
        title: "Disable Account",
        info: "",
      },

      {
        isText: false,
        data: "",
      },

      { text: "Disable", action: null },
    ],
    [
      {
        title: "Close Account ",
        info: (
          <b>
            Beware!! This will permanently erase your account and all related
            information from the platform..
          </b>
        ),
      },

      {
        isText: false,
        data: "",
      },
      { text: "Close", action: null },
    ],
  ],
};
