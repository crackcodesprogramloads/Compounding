import React from "react";
import Home from "..";

const Results = ({ initialBalance }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-3xl bg-lime-200 shadow-2xl shadow-purple-400 w-2/3 h-2/3 mt-8 mb-10">
      <p className="mr-2 text-3xl">Future investment value: $0.00</p>
      <p className="mr-2 text-3xl">Total interest earned: $0.00</p>
      <p className="mr-2 text-3xl">Initial balance: ${initialBalance}</p>
      <p className="mr-2 text-3xl">Additional deposits: $0.00</p>
    </div>
  );
};

export default Results;
