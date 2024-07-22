import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useContext, useEffect, useState } from "react";
import { BsGear } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import MxDropCheck from "./MxDropCheck.tsx";
import { stdInit, upc0 } from "./MxFxns.tsx";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { getTicketList } from "./MxDFxns.tsx";
import { tickets, tkll, tkvd } from "./data.js";

export default function () {
  //VARS
  const defaultOpts = ["id", "date", "subject", "category", "status"];
  const navigate = useNavigate();

  //

  //USESTATES
  const [tkt, settkt] = useState(getTicketList());
  const ticketUpdate = useState(0);
  const [sOptions, setSoptions]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState([...defaultOpts]);
  const [searchV, setSearchV] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  //

  //OTHER VARS
  /**Local TIckets */
  const ltkt: STData[] = stdInit(tkt);
  //

  //FXNS
  const setFilter = (value) => {
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
  };

  const onSChange = (e) => {
    setSearchV(e.target.value);
    setFilter(e.target.value);
  };
  //

  //RETURN SOMBORY
  return (
    <div className="mx-spt-data-tbl">
      <DataTable
        filters={filters}
        globalFilterFields={sOptions}
        selectionMode={"single"}
        dataKey="id"
        onSelectionChange={(e) => navigate(e.value.id)}
        paginator
        rows={9}
        alwaysShowPaginator={false}
        value={ltkt}
        header={
          <div className="spt-head">
            <Button label="Create New Ticket" outlined />

            <div className="sb-box">
              <input
                value={searchV}
                onChange={onSChange}
                placeholder="Search All Columns"
              />
              {searchV ? (
                <i
                  onClick={(e) => {
                    setSearchV("");
                    setFilter("");
                  }}
                  className="pi pi-times"
                ></i>
              ) : undefined}
              <MxDropCheck
                defaultList={defaultOpts}
                optionState={[sOptions, setSoptions]}
                icon={<BsGear className="gear-icon" />}
              />
            </div>
          </div>
        }
      >
        {Object.keys(ltkt[0])?.map((ky) => {
          if (ky == "date") {
            return (
              <Column
                field={ky}
                header={upc0(ky)}
                body={(obj) =>
                  new Date(obj.date).toLocaleDateString(undefined, {
                    dateStyle: "medium",
                  })
                }
                bodyStyle={{ ...colstyle.gen, ...colstyle[ky] }}
                key={ky}
              />
            );
          }
          return (
            <Column
              field={ky}
              header={upc0(ky)}
              bodyStyle={{ ...colstyle.gen, ...colstyle[ky] }}
              key={ky}
            />
          );
        })}
        <Column body={<i className="pi pi-angle-right"></i>}></Column>
      </DataTable>
    </div>
  );
}

const colstyle = {
  gen: {
    maxWidth: "8rem",
  },
  id: {},
  date: {},
  subject: {
    maxWidth: "30rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  category: {},
  status: {},
};
