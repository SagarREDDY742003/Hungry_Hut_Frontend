import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderTable from "./OrderTable";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
  { label: "All", value: "ALL" },
];
const Orders = () => {
  const [filterValue, setFilterValue] = useState("ALL");

  const handleFilter = (e, value) => {
    setFilterValue(value);
  };
  return (

    <div className="px-2 h-screen flex flex-col overflow-hidden">
      <Card className="p-5 shrink-0">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name="category"
            value={filterValue || "all"}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <div className="flex-1 overflow-hidden mt-2">
            <OrderTable filter={filterValue} />
      </div>
      
    </div>
  );
};

export default Orders;
