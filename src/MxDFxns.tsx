import { tickets } from "./data";

/**LOCAL GLOBAL LOCAL STORAGE STH */
let gls: any = "";
const TKST = "tickets";
export const ls = window.localStorage;
export function getTicketList() {
  let local = ls.getItem(TKST);
  if (local) {
    local = JSON.parse(local);
    gls = local;
    return Object.values(local ? local : "");
  }
  return [];
}

export function getTicket(no: string) {
  let local = ls.getItem(TKST) as string;
  if (local) {
    local = JSON.parse(local);
    return local[no];
  }
}

export function initTickets() {
  ls.setItem(TKST, JSON.stringify(tickets));
  ls.setItem("daytktcount", "3");
}

export function newTicket(tktdata) {
  let tktList = getTicketList();
  ls.setItem(generateTktNO(), JSON.stringify(tktdata));
  ls.setItem("daytktcount", (getTicketCountToday() + 1).toString());
}

export function updateTicket(tktinfo) {
  let l = ls.getItem(TKST);
  if (l) {
    l = JSON.parse(l);
    if (l) {
      l[`${tktinfo.id}`] = tktinfo;
      ls.setItem(TKST, JSON.stringify(l));
    }
  }
}



function generateTktNO() {
  const dt = new Date();
  let tktno = "";
  tktno += 11 + (dt.getFullYear() - 2024);
  tktno += dt.getMonth();
  tktno += Math.floor(dt.getDate() / 7);
  tktno += dt.getDay();
  return tktno + getTicketCountToday();
}

export function getTicketCountToday() {
  let l = ls.getItem("daytktcount");
  return l ? Number(l) : 0;
}
