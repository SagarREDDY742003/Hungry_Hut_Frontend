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


import { Avatar, Button, Chip } from "@mui/material";

const statusColors = {
  PENDING: "#F59E0B", // amber
  OUT_FOR_DELIVERY: "#0284C7", // blue
  DELIVERED: "#10B981", // green
  COMPLETED: "#6B21A8", // purple
};


const OrderTable = ({ order }) => {
  const statusColor = statusColors[order.orderStatus] || "#6B7280"; // gray fallback

  return (
    <div className="bg-[#1e1e1e] rounded-xl mb-5 p-4 shadow-lg border border-[#262626]">
      {/* Header: order id, total & status */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm text-gray-400">Order ID</p>
          <p className="text-lg font-semibold">#{order.id}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-400">Total Price</p>
          <p className="text-lg font-semibold">₹{order.totalPrice}</p>
        </div>

        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: statusColor,
            color: "#fff",
            textTransform: "none",
            borderRadius: "999px",
            px: 2,
            fontSize: "0.8rem",
            pointerEvents: "none", // looks disabled but keeps color
          }}
        >
          {order.orderStatus}
        </Button>
      </div>

      {/* Items */}
      <div className="space-y-3 mt-3 grid-flow-row gap-3">
        {order.items.map((item, idx) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-[#252525] rounded-lg p-3 w-fit"
          >
            <Avatar
              src={item.food.images[0]}
              alt={item.food.name}
              sx={{ width: 56, height: 56 }}
            />
            <div className="flex-1">
              <p className="font-medium text-sm">{item.food.name}</p>
              <p className="text-xs text-gray-300">
                Qty: {item.quantity} | ₹{item.totalPrice}
              </p>

              {item.ingredients?.length > 0 && (
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
                        height: "22px",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTable;





