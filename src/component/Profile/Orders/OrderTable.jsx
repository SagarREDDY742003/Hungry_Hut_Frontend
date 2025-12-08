// import { Button, Card } from "@mui/material";


// const OrderCard = ({ order }) => {
//   return (
//     <div className="mx-2 p-4 flex bg-slate-800 flex-col gap-2 items-center w-[20rem]">
//       {order.items.map((item) => (
//         <Card className="flex justify-between items-center p-4 sm:mx-4 w-full">
//           <div className="flex items-center space-x-5">
//             <img className="w-16 h-16" src={item.food.images[0]} alt="food" />
//             <div>
//               <p>{item.food.name}</p>
//               <p>
//                 <span className="text-gray-400">{"quantity: "}</span>
//                 {item.quantity}
//               </p>
//               <p>
//                 <span className="text-gray-400">{"price: ₹"}</span>
//                 {item.totalPrice}
//               </p>
//               <div className="w-full flex flex-wrap gap-2">
//                 {item.ingredients?.map((ingredient) => (
//                   <p className="text-xs p-1 bg-slate-800 rounded">{ingredient}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </Card>
//       ))}
//       <div className="flex w-full items-baseline justify-evenly">
//         <p>
//           <span className="text-gray-400">{"Total price: ₹"}</span>
//           {order.totalPrice}
//         </p>
//         <Button className="cursor-not-allowed">{order.orderStatus}</Button>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;

import {
  Avatar,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const OrderTable = ({ orders }) => {
  // latest first
  const sortedOrders = orders?.slice().reverse();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="my orders table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Order ID</TableCell>
            <TableCell align="center">Items</TableCell>
            <TableCell align="center">Total Price</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedOrders?.map((order) => (
            <TableRow key={order.id}>
              {/* Order ID */}
              <TableCell align="center">{order.id}</TableCell>

              {/* Items: nested table */}
              <TableCell align="center">
                <Table size="small" aria-label="items table">
                  <TableBody>
                    {order.items.map((item) => (
                      <TableRow key={item.id}>
                        {/* Image */}
                        <TableCell align="center">
                          <Avatar
                            src={item.food.images[0]}
                            alt={item.food.name}
                            sx={{ width: 40, height: 40, mx: "auto" }}
                          />
                        </TableCell>

                        {/* Name + qty + price */}
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">
                              {item.food.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              Qty: {item.quantity}
                            </span>
                            <span className="text-xs text-gray-400">
                              ₹{item.totalPrice}
                            </span>
                          </div>
                        </TableCell>

                        {/* Ingredients */}
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {item.ingredients?.map((ing) => (
                              <Chip
                                key={ing}
                                label={ing}
                                size="small"
                                sx={{ fontSize: "0.65rem" }}
                              />
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>

              {/* Total price */}
              <TableCell align="center" className="font-semibold">
                ₹{order.totalPrice}
              </TableCell>

              {/* Status */}
              <TableCell align="center">
                <Button
                  variant="outlined"
                  disabled
                  sx={{
                    px: 2,
                    borderRadius: 999,
                    fontSize: "0.75rem",
                    color:
                      order.orderStatus === "DELIVERED"
                        ? "lightgreen"
                        : order.orderStatus === "PENDING"
                        ? "gold"
                        : order.orderStatus === "OUT_FOR_DELIVERY"
                        ? "#40c4ff"
                        : "#ff4d4d",
                  }}
                >
                  {order.orderStatus}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;



