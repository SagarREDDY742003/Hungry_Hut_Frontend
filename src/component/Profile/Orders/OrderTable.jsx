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
  const sortedOrders = orders?.slice().reverse();

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "100%", bgcolor: "#1f1f1f" }}>
      <Table
        sx={{
          minWidth: 650,
          color: "#fff",
        }}
        stickyHeader
        aria-label="my orders table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ color: "#bbb" }}>Order ID</TableCell>
            <TableCell align="center" sx={{ color: "#bbb" }}>Items</TableCell>
            <TableCell align="center" sx={{ color: "#bbb" }}>Total Price</TableCell>
            <TableCell align="center" sx={{ color: "#bbb" }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedOrders?.map((order) => (
            <TableRow key={order.id} hover sx={{ '&:last-child td': { border: 0 } }}>
              {/* Order ID */}
              <TableCell align="center" sx={{ color: "#fff" }}>{order.id}</TableCell>

              {/* Items list */}
              <TableCell align="center" sx={{ padding: "0.5rem" }}>
                <div className="flex flex-col gap-2">
                  {order.items.map((item, idx) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                      style={{
                        paddingBottom: idx < order.items.length - 1 ? "0.5rem" : 0,
                        borderBottom:
                          idx < order.items.length - 1
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "none",
                      }}
                    >
                      <Avatar
                        src={item.food.images[0]}
                        alt={item.food.name}
                        sx={{ width: 40, height: 40 }}
                      />
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="font-medium text-sm" style={{ color: "#fff" }}>
                          {item.food.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          Qty: {item.quantity}
                        </span>
                        <span className="text-xs text-gray-400">
                          ₹{item.totalPrice}
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.ingredients.map((ing) => (
                            <Chip
                              key={ing}
                              label={ing}
                              size="small"
                              sx={{
                                backgroundColor: "#333",
                                color: "#eee",
                                fontSize: "0.7rem",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TableCell>

              {/* Total price */}
              <TableCell align="center" sx={{ color: "#fff", fontWeight: 500 }}>
                ₹{order.totalPrice}
              </TableCell>

              {/* Status */}
              <TableCell align="center">
                <Button
                  variant="contained"
                  disabled
                  sx={{
                    textTransform: "none",
                    px: 2,
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    backgroundColor:
                      order.orderStatus === "DELIVERED"
                        ? "green"
                        : order.orderStatus === "PENDING"
                        ? "orange"
                        : order.orderStatus === "OUT_FOR_DELIVERY"
                        ? "#0099ff"
                        : "#777",
                    color: "#fff",
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




