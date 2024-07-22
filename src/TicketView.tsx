import React, { useEffect, useRef, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { ticketHistory, tkvd } from "./data";
import {
  chatBox,
  qvTkSelect,
  stdInit,
  ticketStatusSummary,
  timeAgo,
  tktstatusColor,
  tvdInit,
} from "./MxFxns.tsx";

import { Modal, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { BsReplyAll } from "react-icons/bs";
import { getTicket } from "./MxDFxns.tsx";
import TextEditor from "./TextEditor.tsx";

let first = true;
export default function TicketView() {
  /** --TICKET ID -> USE TO FETCH TICKET HISTORY & MESSAGES*/
  const id = useParams().id as string;
  const navigate = useNavigate();

  //USESTATES
  const [tkd, settkd] = useState(getTicket(id as string));

  /**local ticket details */
  let ltkd = tvdInit(tkd);
  let tkl = stdInit();

  const [nwMsg, setNMsg] = useState();
  const [showEditor, setShowEditor] = useState(false);
  const [mobVTktD, setmobVTktD] = useState(false);
  const phoneSCreen = useMediaQuery("(max-width:799.99999px)");

  //USE REF
  const draftRef = useRef("");

  //ARRAY THINGS
  const tktInfoArr: any[] = [];
  if (!tktInfoArr.length) {
    tkvd.forEach((key) => {
      if (key !== "cs") {
        tktInfoArr.push(
          <div key={key + "title"} className="title">
            {key}
          </div>
        );
        tktInfoArr.push(
          <div key={key + "info"} className="info">
            {key.includes("xid") ? (
              <span
                onClick={(e) => {
                  navigator.clipboard.writeText(
                    (e.target as Element).parentElement?.innerText as string
                    ///TODO ---Add Toast -->> TextCopied
                  );
                }}
                className="pi pi-clone"
              ></span>
            ) : (
              ""
            )}
            {ltkd[key] ? ltkd[key] : "•"}
          </div>
        );
      }
    });
  }

  //OTHER VIEWS
  //--EDIT
  const editorView = showEditor ? (
    <Paper elevation={5} className="mx-spt-editor-mdl">
      <div className="mx-header">
        {"#" + id + ">>New Response"}
        <i
          onClick={() => {
            setShowEditor(false);
          }}
          className="pi pi-times"
        ></i>
      </div>
      <TextEditor
        setShowEditor={setShowEditor}
        draftRef={draftRef}
        zNMsg={setNMsg}
      />
    </Paper>
  ) : undefined;

  //--TKT DETAILS
  const tktDetails = (
    <Card
      className="tkt-details"
      header={
        phoneSCreen ? (
          <div className="mx-header">
            <i
              onClick={() => {
                setmobVTktD(false);
              }}
              className="pi pi-times"
            ></i>
          </div>
        ) : undefined
      }
    >
      <div className="agent-info">
        <Avatar icon="pi pi-wallet" size="xlarge" shape="circle" />

        <b>
          {ltkd.cs.name ? ltkd.cs.name : "•"} <br />
          {ltkd.cs.role ? ltkd.cs.role : "Ecore Agent"}
        </b>
      </div>
      <hr />
      <div className="top">{tktInfoArr}</div>
      <hr />

      <div className="tkt-xns">
        <span className={`tag ${tktstatusColor(ltkd.status)}`}>
          {ltkd.status}
        </span>
        {ticketStatusSummary(ltkd.status, id as string)}

        {ltkd.status !== "Resolved" ? (
          <div className="btn-grp">
            <div className="btn-txt">
              <Button
                className="btn"
                size="large"
                icon="pi pi-bell"
                rounded
                text
                raised
                severity="warning"
                aria-label="expedite"
              />
              <p>Expedite</p>
            </div>
            <div className="btn-txt">
              <Button
                className="btn"
                size="large"
                icon="pi pi-check"
                rounded
                text
                raised
                severity="success"
                aria-label="resolved"
              />
              <p>Resolved</p>
            </div>
          </div>
        ) : // REVIEW BUTTONS
        undefined}
      </div>
    </Card>
  );

  //MAIN VIEW
  const ticketView = (
    <div className="spt-tkt-parent">
      {
        /* ------------------------------------------------------------------>>>EDITOR VIEW */
        editorView
      }

      {
        /* ---------------------------------------------------------------->>>MOBILE TKT DETAILS VIEW */
        <Modal
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="mx-mob-tkt-details"
          open={mobVTktD && phoneSCreen}
          onClose={() => {
            setmobVTktD(false);
          }}
        >
          {tktDetails}
        </Modal>
      }
      <Card // ------------------------------------------------------------------>>>PARENT ---TICKET LIST
        className="tkt-list"
      >
        <DataView
          value={qvTkSelect(tkl, id)}
          listTemplate={(tkts) =>
            tkts.map((tkt: TkVData, i) => {
              return (
                <div
                  onClick={(e) => {
                    navigate(`../${e.currentTarget?.id}`);
                  }}
                  className={`tkt ${
                    tkt.id == id ? "mx-tktlist-selected-ticket" : ""
                  }`}
                  key={tkt.id}
                  id={tkt.id}
                >
                  <div className="r1 row">
                    <p className="id">{"#" + tkt.id}</p>
                    <p className="last-activity">
                      {/* The idea here is to get the time of the last activity on
                      each ticket, not the time it was created */}
                      {timeAgo(new Date(tkt.date))}
                    </p>
                  </div>
                  <div className="r2 row">
                    <p className="subj">{tkt.subject}</p>
                  </div>
                  <div className="r3 row">
                    <p className="catgry">{tkt.category}</p>
                    <p className={"catgry " + tktstatusColor(tkt.status)}>
                      {tkt.status}
                    </p>
                  </div>
                </div>
              );
            })
          }
          paginator
          paginatorTemplate={{
            layout: "PrevPageLink CurrentPageReport NextPageLink",
          }}
          alwaysShowPaginator={false}
          rows={5}
        />
      </Card>

      <div // --------------------------------------------------------------->>>PARENT ---HISTORY BOX PARENT
        className="chat-history-box"
      >
        <div className="tkt-hb-header">
          <span className="tkt-subject">{">#" + id + "_" + tkd.subject}</span>
          <span
            className="mx-tkt-hd-info"
            onClick={() => {
              setmobVTktD(!mobVTktD);
            }}
          >
            <BsInfoCircle />
          </span>
        </div>
        <div className="chat-history">
          {tkd.history.map((obj) => {
            const dateStr = new Date(obj.date).toLocaleTimeString(undefined, {
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            });
            return chatBox({
              isAgent: obj.isAgent,
              message: obj.message,
              time: dateStr,
            });
          })}

          <br />
          <br />
        </div>
        <div
          className="reply-btn"
          onClick={() => {
            setShowEditor(!showEditor);
          }}
        >
          <BsReplyAll size={"1.3em"} />
          <span>Reply</span>
        </div>
      </div>

      {tktDetails}
    </div>
  );

  //USEFFECT
  useEffect(() => {
    settkd(getTicket(id as string));
  }, [id]);

  useEffect(() => {
    if (nwMsg) {
      console.log(nwMsg);
    }
  }, [nwMsg]);

  useEffect(() => {
    if (!first) {
      console.log(nwMsg);
    }

    first = false;
  }, [tkd]);
  //

  return ticketView;
}
