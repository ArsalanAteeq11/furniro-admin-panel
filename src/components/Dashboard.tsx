import Image from "next/image";
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";

const orders = [
  { id: 1, orderId: "ORD123", orderDate: "jan 12,12:23 pm", customer: "John Doe", total: "$250", payment: "transfer", status: "Shipped" },
  { id: 2, orderId: "ORD124", orderDate: "jan 12,12:23 pm",  customer: "Jane Smith", total: "$450", payment: "Credit card", status: "Pending" },
  { id: 3, orderId: "ORD125", orderDate: "jan 12,12:23 pm", customer: "Samuel Lee", total: "$120", payment: "transfer", status: "Delivered" },
  { id: 4, orderId: "ORD126", orderDate: "jan 12,12:23 pm", customer: "Emily Davis", total: "$30", payment: "transfer", status: "Cancelled" },
];
const Dashboard = () => {
  return (
    <div className=" container w-full mx-auto p-4">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-gray-800 font-semibold">
            Welcome back,<span className="font-bold text-[#f0d786]"> Ibad</span>
          </h1>
          <p className="text-gray-600">Here's your current sales overview</p>
        </div>
        <div className="flex flex-wrap gap-4 ">
          <div className="flex flex-1 justify-center items-center gap-3 p-3 rounded shadow-md shadow-[#f0d786] min-w-[250px]   h-[125px]">
            <Image
              className="object-contain"
              src="https://cdn-icons-png.flaticon.com/512/3126/3126647.png"
              alt="customers"
              width={70}
              height={70}
            ></Image>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-500">Customer</h3>
              <span className="text-4xl font-bold text-[#f0d786]">19</span>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center gap-3 p-3 rounded shadow-md shadow-[#f0d786] min-w-[250px] h-[125px]">
            <Image
              className="object-contain"
              src="/assets/admin-assets/orders-icon.svg"
              alt="orders"
              width={70}
              height={70}
            ></Image>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-500">Orders</h3>
              <span className="text-4xl font-bold text-[#f0d786]">19</span>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center gap-3 p-3 rounded shadow-md shadow-[#f0d786] min-w-[250px] h-[125px]">
            <Image
              className="object-contain"
              src="/assets/admin-assets/product.svg"
              alt="products"
              width={70}
              height={70}
            ></Image>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-500">Products</h3>
              <span className="text-4xl font-bold text-[#f0d786]">19</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 ">Latest Orders</h2>
          <div className="shadow-[0_0_10px_3px_rgba(240,215,134,0.5)] bg-white p-2">

          <Table>
            <TableHeader>
              <TableRow>
                
                <TableHead>#</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.payment}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="mr-2">
                      View
                    </Button>
                    <Button size="sm" className="bg-[#f0d786] hover:bg-[#f0d786]">
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
