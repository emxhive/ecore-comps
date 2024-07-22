import React, { useEffect, useRef, useState } from "react";
import {
  MdAttachFile,
  MdFormatBold,
  MdFormatUnderlined,
  MdImage,
} from "react-icons/md";
import "./css/texteditor.css";
import { createRoot } from "react-dom/client";
import { Image } from "primereact/image";
import { Badge, Paper } from "@mui/material";

let already = false;
function TextEditor({ draftRef, zNMsg, setShowEditor }) {
  //REF
  const urList: React.MutableRefObject<any> = useRef([]);
  const fileInputRef: React.MutableRefObject<any> = useRef();
  const dceRef: React.MutableRefObject<any> = useRef();
  const utrack: React.MutableRefObject<UtrackType> = useRef({
    zimg: 0,
    ztxtStyl: false,
    zB: -1,
    killStyle: false,
    newbie: [],
    lastRange: undefined,
    zCtrl: false,
    killUpload: false,
  });

  //

  //USESTATE
  const [txtCl, setTxtCl] = useState(["", ""]);
  const [files, setFiles]: [
    File[] | any,
    React.Dispatch<React.SetStateAction<File[] | any>>
  ] = useState([]);
  const [showfiles, zShowfiles] = useState(false);
  //

  //FXNS
  const updateTxt = (n: number) => {
    utrack.current.ztxtStyl = true;
    utrack.current.zB = n;

    if (txtCl[n]) {
      utrack.current.killStyle = true;
      let _txtCl = { ...txtCl };
      _txtCl[n] = "";
      setTxtCl(_txtCl);
    } else {
      utrack.current.killStyle = false;
      let _txtCl = { ...txtCl };
      _txtCl[n] = "mx-svg-active";
      setTxtCl(_txtCl);
    }
  };

  const ceFocus = (node?: Node, pos?: 0 | 1) => {
    const ws = window.getSelection();

    if (node) {
      ws?.setPosition(node, pos);
    } else {
      if (utrack.current.lastRange) {
        ws?.removeAllRanges();
        ws?.addRange(utrack.current.lastRange);
      }
    }
  };

  const handleUpload = (e) => {
    if (utrack.current.zimg) {
      const rt = nwrt();
      const rxtRoot = createRoot(rt);
      const url = URL.createObjectURL(e.target.files.item(0));
      urList.current.push(url);

      rxtRoot.render(<Image src={url} width="100" preview />);
      ceFocus();
      if (utrack.current.lastRange) {
        window.getSelection()?.getRangeAt(0).insertNode(rt);
      } else {
        (dceRef.current as HTMLElement)?.appendChild(rt);
      }
    } else {
      const narr: any[] = [];
      for (const file of e.target.files) {
        narr.push(file);
        if (narr.length > 9) {
          window.alert("10 files max per upload");
          break;
        }
      }
      setFiles([...files, ...narr]);
    }
  };
  //

  //MINI COMPONENTS
  const attachmnt = (arr: File[]) => {
    return arr.map((f, i) => (
      <div key={f.name} className="atmt">
        <span>
          {f.name.length > 29
            ? f.name.slice(0, 10) + "..." + f.name.slice(f.name.length - 19)
            : f.name}
        </span>
        <i
          className="pi pi-times"
          onClick={(e) => {
            let _files = [...files];
            _files.splice(files.indexOf(f), 1);
            setFiles(_files);
          }}
        ></i>
      </div>
    ));
  };
  //

  //EFFECTS
  useEffect(() => {
    (dceRef.current as HTMLElement).append(...draftRef.current);
  }, []);
  //

  //RETURN STH
  return (
    <div className="mx-txtedit-parent">
      {showfiles ? (
        <Paper className="mx-attch-view">
          {" "}
          <div className="mx-header">
            {"Attachments"}
            <i
              onClick={() => {
                zShowfiles(false);
              }}
              className="pi pi-chevron-down"
            ></i>
          </div>
          <div className="mx-at-vw-body">{attachmnt(files)}</div>
        </Paper>
      ) : undefined}
      <div
        autoFocus
        ref={dceRef}
        className="mx-tce"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          draftRef.current = e.target.childNodes;
        }}
        onKeyUp={() => {
          const ws = window.getSelection();
          utrack.current.lastRange = ws?.getRangeAt(0).cloneRange();
        }}
        onPaste={(e) => {
          e.preventDefault();
          window
            .getSelection()
            ?.getRangeAt(0)
            .insertNode(
              document.createTextNode(e.clipboardData.getData("text/plain"))
            );
        }}
        onKeyDown={(e) => {
          utrack.current.zCtrl = e.ctrlKey;
          const ws = window.getSelection();
          if (utrack.current.ztxtStyl && e.key.length == 1 && !e.ctrlKey) {
            e.preventDefault();
            utrack.current.ztxtStyl = false;

            let newbie: any;
            const r = ws?.getRangeAt(0);

            if (!utrack.current.killStyle) {
              switch (utrack.current.zB) {
                case 0:
                  newbie = document.createElement("b");
                  utrack.current.newbie[0] = newbie;
                  break;
                case 1:
                  newbie = document.createElement("u");
                  utrack.current.newbie[1] = newbie;
                  break;
              }
              (newbie as HTMLElement).append(e.key);
              r?.insertNode(newbie);
              ws?.setPosition(newbie.firstChild, 1);
            } else {
              newbie = utrack.current.newbie[utrack.current.zB];
              (newbie as HTMLElement)?.insertAdjacentText("afterend", e.key);
              const txt = ws?.focusNode?.parentElement?.nextSibling;
              if (txt) {
                ws?.setPosition(txt, 1);
              }
            }
          } else {
            if (e.ctrlKey) {
              switch (e.key) {
                case "b":
                  document.getElementById(ids[0])?.click();
                  break;
                case "u":
                  document.getElementById(ids[1])?.click();
                  break;
                case "i":
                  document.getElementById(ids[3])?.click();
                  break;
                case "Enter":
                  document.getElementById("mx-txtedit-sendbtn")?.click();
                  break;
              }
            }
          }
        }}
      />
      <div className="mx-tce-btm-toolbar">
        <div className="mx-toolgrp">
          <input
            ref={fileInputRef}
            onChange={handleUpload}
            type="file"
            name="file-upload"
            id=""
            accept="image/*, .pdf"
            style={{ display: "none" }}
          />

          <div
            id={ids[0]}
            className={txtCl[0]}
            onClick={(e) => {
              if (!utrack.current?.zCtrl) {
                ceFocus();
              }

              updateTxt(0);
            }}
          >
            <MdFormatBold />
          </div>

          <div
            id={ids[1]}
            className={txtCl[1]}
            onClick={(e) => {
              if (!utrack.current?.zCtrl) {
                ceFocus();
              }
              updateTxt(1);
            }}
          >
            <MdFormatUnderlined />
          </div>

          <div
            id={ids[2]}
            onClick={() => {
              fileInputRef.current.multiple = true;
              utrack.current.zimg = 0;
              fileInputRef.current?.click();
            }}
          >
            <MdAttachFile />
          </div>

          <div
            id={ids[3]}
            onClick={() => {
              fileInputRef.current.multiple = false;
              utrack.current.zimg = 1;
              fileInputRef.current?.click();
            }}
          >
            <MdImage />
          </div>
        </div>

        {files.length > 0 ? (
          <div
            onClick={() => {
              zShowfiles(!showfiles);
            }}
            className="mx-file-count"
          >
            <Badge badgeContent={files.length} color="primary">
              <i className="pi pi-file" style={{ fontSize: "1.2em" }}></i>
            </Badge>
          </div>
        ) : undefined}

        <div
          onClick={() => {
            zNMsg({ html: dceRef.current.innerHTML, atmt: files });
            setShowEditor(false);
          }}
          id="mx-txtedit-sendbtn"
          className="mx-send-btn"
        >
          Send
        </div>
      </div>
    </div>
  );
}

export default TextEditor;

const ids = [
  "mx-ce-bld-ico",
  "mx-ce-und-ico",
  "mx-ce-fle-ico",
  "mx-ce-img-ico",
];

const nwrt = () => {
  const id = Date.now();
  const root = document.createElement("div");
  root.contentEditable = "false";
  root.className = "mx-img-box";

  const del = document.createElement("i");
  del.className = "pi pi-trash";
  del.onclick = (e) => {
    (e.target as HTMLElement)?.parentElement?.remove();
    console.log();
  };

  const mutObserver = new MutationObserver(() => {
    const br = document.createElement("br");
    root.appendChild(del);
    root.insertAdjacentText("beforebegin", "");
    root.insertAdjacentElement("afterend", br);
    br.insertAdjacentText("afterend", " ");
    window.getSelection()?.setPosition(br.nextSibling);
    mutObserver.disconnect();
  });
  mutObserver.observe(root, { childList: true });

  return root;
};
