// import React, { useEffect } from "react";
// import OrderCard from "./OrderCard";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersOrder } from "../../../state/Order/Action";

// const Orders = () => {
//   const { auth, order } = useSelector((store) => store);
//   // const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsersOrder(jwt));
//   }, [auth.jwt, jwt, dispatch]);
//   return (
//     <div className="flex items-center flex-col pb-5">
//       <h1 className="text-xl font-semibold py-7 text-center">My Orders</h1>
//       <div className="flex flex-wrap gap-5 justify-around">
//           {order.orders.slice().reverse().map((order) => (
//             <OrderCard order={order} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrder } from "../../../state/Order/Action";
import OrderTable from "./OrderTable";

const Orders = () => {
  const { auth, order } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersOrder(jwt));
  }, [auth.jwt, jwt, dispatch]);

  return (
    <div className="h-full flex flex-col p-4">
      <h1 className="text-xl font-semibold py-4 text-center text-white">
        My Orders
      </h1>
      <div className="flex-1 overflow-hidden">
        <OrderTable orders={order.orders} />
      </div>
    </div>
  );
};

export default Orders;



