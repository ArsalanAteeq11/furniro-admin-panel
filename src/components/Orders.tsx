import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

const orders = [
  {
    id: 1,
    orderId: "ORD123",
    orderDate: "Jan 12, 12:23 PM",
    customer: "John Doe",
    total: "$250",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: 2,
    orderId: "ORD124",
    orderDate: "Jan 12, 12:23 PM",
    customer: "Jane Smith",
    total: "$450",
    payment: "Credit Card",
    status: "Pending",
  },
  {
    id: 3,
    orderId: "ORD125",
    orderDate: "Jan 12, 12:23 PM",
    customer: "Samuel Lee",
    total: "$120",
    payment: "Transfer",
    status: "Delivered",
  },
  {
    id: 4,
    orderId: "ORD126",
    orderDate: "Jan 12, 12:23 PM",
    customer: "Emily Davis",
    total: "$30",
    payment: "Transfer",
    status: "Cancelled",
  },
  {
    id: 5,
    orderId: "ORD127",
    orderDate: "Jan 13, 09:45 AM",
    customer: "Michael Brown",
    total: "$620",
    payment: "PayPal",
    status: "Processing",
  },
  {
    id: 6,
    orderId: "ORD128",
    orderDate: "Jan 13, 10:15 AM",
    customer: "Sophia Wilson",
    total: "$85",
    payment: "Debit Card",
    status: "Delivered",
  },
  {
    id: 7,
    orderId: "ORD129",
    orderDate: "Jan 13, 02:30 PM",
    customer: "David Clark",
    total: "$300",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: 8,
    orderId: "ORD130",
    orderDate: "Jan 14, 11:05 AM",
    customer: "Olivia Martinez",
    total: "$175",
    payment: "Credit Card",
    status: "Pending",
  },
  {
    id: 9,
    orderId: "ORD131",
    orderDate: "Jan 14, 03:20 PM",
    customer: "James Anderson",
    total: "$490",
    payment: "Transfer",
    status: "Delivered",
  },
  {
    id: 10,
    orderId: "ORD132",
    orderDate: "Jan 15, 01:10 PM",
    customer: "Emma Thomas",
    total: "$95",
    payment: "Debit Card",
    status: "Processing",
  },
  {
    id: 11,
    orderId: "ORD133",
    orderDate: "Jan 15, 04:50 PM",
    customer: "Liam Garcia",
    total: "$600",
    payment: "PayPal",
    status: "Cancelled",
  },
  {
    id: 12,
    orderId: "ORD134",
    orderDate: "Jan 16, 08:20 AM",
    customer: "Charlotte Rodriguez",
    total: "$220",
    payment: "Credit Card",
    status: "Pending",
  },
  {
    id: 13,
    orderId: "ORD135",
    orderDate: "Jan 16, 02:10 PM",
    customer: "Benjamin Hall",
    total: "$330",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: 14,
    orderId: "ORD136",
    orderDate: "Jan 17, 12:00 PM",
    customer: "Amelia Young",
    total: "$140",
    payment: "Debit Card",
    status: "Processing",
  },
  {
    id: 15,
    orderId: "ORD137",
    orderDate: "Jan 17, 03:30 PM",
    customer: "Elijah King",
    total: "$275",
    payment: "PayPal",
    status: "Delivered",
  },
];

const Orders = () => {
  return (
    <div className="p-10 w-full  ">
      <h1 className="text-2xl text-gray-400">All Orders</h1>
      <div className="shadow-[0_0_10px_3px_rgba(240,215,134,0.5)] min-h-[500px] h-full rounded-md p-2  mt-2 ">
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
  );
};

export default Orders;
