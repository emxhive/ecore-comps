import { Button } from "primereact/button";
import React, { useState } from "react";
import "./sass/notify.scss";

type NoticeBoxParams = {
  title: string;
  info: string;
  date: Date;
};
function Notify() {
  //USESTATE

  const [selected, setSelected] = useState("Wallet");

  // THIS IS THE MAIN COMPONENT -- THE ACTUAL CARD NOTIFICATION SOMETHING
  const noticebox = ({ title, info, date }) => {
    return (
      <div className="mx-notice-box">
        <div className="title-box">
          <span className="title">{title}</span>
          <span className="date">
            <i>
              {new Date(date).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })}
            </i>
            <i>at</i>
            <i>{new Date(date).toLocaleTimeString()}</i>
          </span>
        </div>
        <div className="info-box">
          <span className="info">{info}</span>
          <i className="pi pi-angle-right"></i>
        </div>
      </div>
    );
  };

  /////////RETURN THINGY
  return (
    <div className="mx-notify-parent">
      <div className="catg-box">
        {categories.map((key) => (
          <div
            onClick={() => {
              setSelected(key);
            }}
            className={`catgry ${key == selected ? "mx-selected" : ""}`}
          >
            {key}
          </div>
        ))}
      </div>
      <div className="ntfy-view">{data.map((obj) => noticebox(obj))}</div>
    </div>
  );
}

export default Notify;

const categories: string[] = ["System", "Wallet", "Trade", "News"];

const icons = [];

const data = [
  {
    date: new Date(),
    title: "Withdrawal In progress",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati ea, ad unde sequi",
  },
  {
    date: new Date(),
    title: "Random Action Completed",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati ea, ad unde sequi",
  },
  {
    date: new Date(),
    title: "Deposit Confirmed",
    info: "You've received a payment of 333 USDT, kindly contact CS. iF this isn't your doing. We can claim the money on your behalf  ha haha ah aha h ah aah ah ha ha ah ah ah ha ha ha ha ha ha ha h ah ah ah ah ah ah ",
  },
];
