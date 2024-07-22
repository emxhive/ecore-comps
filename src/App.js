import { Button } from "primereact/button";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { useRef, useState } from "react";
import Settings from "./Settings.tsx";
import Support from "./Support.tsx";
import Security from "./Security.tsx";

import "./css/app.css";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "primereact/utils";
import TicketView from "./TicketView.tsx";
import SupportTable from "./SupportTable.tsx";
import { upc0 } from "./MxFxns.tsx";
import { xTw } from "./xTw.js";
import { getTicketCountToday, initTickets } from "./MxDFxns.tsx";

/**
 * @type {import("primereact/api").PrimeReactPTOptions}
 */

function App() {
  if (!getTicketCountToday()) {
    console.log("1 ed");
    initTickets();
  }
  const tktRef = useRef();

  const compList = ["settings", "security", "support"];
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: xTw }}>
      <div className="parent">
        <div className="btn-box">
          {compList.map((nom, i) => (
            <Link key={nom} to={"/" + nom}>
              <Button key={nom} className="hm-btns" label={upc0(nom)} text />
            </Link>
          ))}
        </div>

        <Routes>
          <Route path="settings" element={<Settings />} />
          <Route path="security" element={<Security />} />
          <Route path="support" element={<Support />}>
            <Route index element={<SupportTable />} />
            <Route path=":id" element={<TicketView />} />
          </Route>
        </Routes>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
