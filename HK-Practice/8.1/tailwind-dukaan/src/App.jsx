import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
      <div className="grid grid-cols-3 ">
        <RevenueCard tittle={"Amount Pending"} orderCount={"13"} amount={"92,22222"}></RevenueCard>
      </div>
  );
}

export default App;
