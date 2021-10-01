import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { productData } from "./data";
import { makeStyles } from '@mui/styles';


import { LastNameRenderer } from "./renderer";

const useStyles = makeStyles(
  (theme) => {
    return {
      root: {
        height: 520,
        width: "100%",
        "& .low-priced": {
          backgroundColor: "#74B862"
        },
        "& .mid-priced": {
          backgroundColor: "#CAD06F"
        },
        "& .high-priced": {
          backgroundColor: "#F42612"
        },
        "& .big-size": {
          backgroundColor: "#8369D5"
        },
        "& .small-size": {
          backgroundColor: "#D1B3CE"
        }             
      },
    }
  }
)

export default function MuiTable() {
  const classes = useStyles();
  const data = productData;

  return (
    <div>
      <div className={classes.root}>
        <DataGridPro
          {...data}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableSelectionOnClick
          getRowClassName={(params) => {
            let price = params.getValue(params.id, 'unitsPerCase');
            price = parseFloat(price);
            let appendClass
            if (price < 20) appendClass = "low-priced";
            else if (price >= 20 && price <= 80) appendClass = "mid-priced";
            else appendClass = "high-priced";
            return appendClass;
          }}
        />
      </div>
    </div>
  );
}
