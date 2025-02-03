"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">

    <div className="shadow-xl w-[500px] p-6 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black
">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
        <h1 className="text-2xl font-bold">Login</h1>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email || ""}
            onChange={loginHandler}
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password || ""}
            onChange={loginHandler}
          />
        </div>
        
        <Button type="submit" className="w-full mt-2 bg-gradient-to-br from-[#f0d786] to-[#ffe8a3] font-semibold text-gray-800 hover:bg-[#f0d786]">Login</Button>
      </form>
    </div>
  </div>
  );
};

export default Login;
