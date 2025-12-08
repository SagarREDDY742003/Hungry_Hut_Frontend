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

const OrderCard = ({ orders }) => {
  const sortedOrders = orders?.slice().reverse(); // latest first

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
              <TableCell align="center">{order.id}</TableCell>

              {/* Items */}
              <TableCell align="center">
                <div className="flex flex-wrap gap-2 justify-center">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 bg-slate-900 p-2 rounded">
                      <Avatar src={item.food.images[0]} sx={{ width: 40, height: 40 }} />
                      <div>
                        <p className="font-medium text-sm">{item.food.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                        <p className="text-xs text-gray-400">₹{item.totalPrice}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.ingredients.map((ing) => (
                            <Chip key={ing} label={ing} size="small" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TableCell>

              {/* Price */}
              <TableCell align="center" className="font-semibold">
                ₹{order.totalPrice}
              </TableCell>

              {/* Status */}
              <TableCell align="center">
                <Button
                  variant="outlined"
                  disabled
                  sx={{
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

export default OrderCard;


