import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

import { Dropdown } from "primereact/dropdown";

import React from "react";
import { BiSupport } from "react-icons/bi";
import { getTicketList } from "./MxDFxns.tsx";
import { tkll, tkvd } from "./data";

/**FIRST CHARACTER TO UPPER CASE */
export function upc0(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function title({ title, info }) {
  return (
    <div className="n-d-box">
      <div className="name">{title}</div>
      <div className="info">{info}</div>
    </div>
  );
}
function status({ isText, data }) {
  return <div className="info stats">{data}</div>;
}
function control({ text, dialog, disabled }, isPhone) {
  if (isPhone) {
    return <i className="pi pi-chevron-right"></i>;
  }
  if (typeof text == "string") {
    return (
      <Button
        disabled={disabled}
        className="w-full h-10"
        label={text}
        outlined
      />
    );
  }
  return text;
}

function contentRow(arr: any[], isPhone) {
  return arr.map((item, i) => {
    let data = <></>;
    switch (i) {
      case 0:
        data = title(item);

        break;
      case 1:
        data = status(item);

        break;
      case 2:
        data = control(item, isPhone);
        break;
    }
    return (
      <div key={"sec-" + i} className={"mxbox-sec " + "mxbox-sec-" + i}>
        {data}
      </div>
    );
  });
}

/**Bounded Boxes in Settings & Security Views */
export function mxbox({ header, body, isPhone }: MBxParams) {
  return (
    <div className="mxbxz">
      <div className="header">{header}</div>
      <div className="body">{body.map((row) => contentRow(row, isPhone))}</div>
    </div>
  );
}

export function currentTZone() {
  const x = new Date().getTimezoneOffset() / 60;

  switch (x / Math.abs(x)) {
    case -1:
      return "+" + Math.abs(x);
    case 0:
      return "0";
    case 1:
      return "-" + Math.abs(x);
    default:
      console.error("THIS WASN'T SUPPOSED TO HAPPEN ");
  }
}

export function hideText(text: string, level?: any) {
  function collect(t: string) {
    return !level
      ? t[0] + t[1] + "***" + t[t.length - 2] + t[t.length - 1]
      : t[0] + "***" + t[t.length - 1];
  }

  if (text.includes("@")) {
    const rez = text.split("@");
    return collect(rez[0]) + "@" + rez[1];
  } else {
    return collect(text);
  }
}

export function chatBox({ message, time, isAgent }: ChatBoxParams) {
  const icon = (
    <Avatar className="icon ex" shape="circle" children={<BiSupport />} />
  );
  return (
    <div
      key={Date.now() + "chat" + time}
      className={`spt-chatbox ${isAgent ? "agt-cb" : "user-cb"}`}
    >
      {isAgent ? icon : ""}
      {!isAgent ? <div className="time ex">{time}</div> : ""}
      <div className="chat-body">{message}</div>
      {isAgent ? <div className="time ex">{time}</div> : ""}
    </div>
  );
}

export function timeAgo(date: Date) {
  const ms = date.getTime();
  const cms = new Date().getTime();
  let x = Math.floor((cms - ms) / (1000 * 60 * 60 * 24));
  if (x > 1) {
    return x + " days ago";
  } else {
    x = Math.floor((cms - ms) / (1000 * 3600));
    switch (x) {
      case 0:
        return "few mins ago";
      case 1:
        return "1 hour ago";
      default:
        return x + " hours ago";
    }
  }

  return "";
}

export function ticketStatusSummary(status: string, id: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return (
        <p className="small-talk">
          Ticket {"#" + id} has been recorded <br /> An agent will be with you
          shortly{" "}
        </p>
      );
    case "processing":
      return (
        <p className="small-talk">
          Ticket {"#" + id} is under review <br /> Please look out for updates
          in the chat
        </p>
      );
    case "resolved":
      return (
        <p className="small-talk">
          Ticket {"#" + id} has been resolved <br /> Thanks for your patience 🤗
        </p>
      );
  }
}

export function tktstatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-blue-400 text-white";

    case "processing":
      return "bg-red-500 text-white";

    case "resolved":
      return "bg-green-500 text-white";
  }
}

/**return zero is number is less than zero.. */
export function z(no) {
  if (no < 0) {
    return 0;
  } else {
    return no;
  }
}

/**Initialize Local Ticket Data for Ticket View Comp */
export function tvdInit(tkd) {
  let ltkd = {} as TkVData;
  tkvd.forEach((key) => {
    ltkd = {
      ...ltkd,
      [key]: tkd[key],
    };
  });
  return ltkd;
}

/**Initialize Local Ticket Data for SupportTable */
export function stdInit(tkt?: any[]) {
  if (tkt) {
    return tkt?.map((obj) => {
      let robj = {} as STData;
      tkll.forEach((k) => {
        robj = {
          ...robj,
          [k]: obj[k],
        };
      });
      return robj;
    });
  }
  return getTicketList()?.map((obj) => {
    let robj = {} as STData;
    tkll.forEach((k) => {
      robj = {
        ...robj,
        [k]: obj[k],
      };
    });
    return robj;
  });
}

/**Quick View Ticket Select -- selects closest 5*/
export function qvTkSelect(tkt: STData[], id: string) {
  const keyz = Object.keys(tkt);
  const i = keyz.indexOf(id);
  if (tkt?.length < 6) {
    return tkt;
  } else if (i + 2 < keyz.length && 2 - i > -1) {
    return tkt.slice(2 - i, i + 3);
  } else {
  }
}

/**returns zero If number is less than 0 otherwise returns said number  */
function t0(no) {
  if (no < 0) {
    return 0;
  }
  return no;
}
