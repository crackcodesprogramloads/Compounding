import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Results from "./components/results";

export default function Home() {
  const [initialBalance, setInitialBalance] = useState("0");
  const [interestRate, setInterestRate] = useState("0");
  const [interestFrequency, setInterestFrequency] = useState("");
  //InterestFrequency
  //Duration years and months
  //Compounding Interval
  const [contributions, setContributions] = useState(0);
  const [investValue, setInvestValue] = useState("");
  const [compoundingInterval, setCompoundingInterval] = useState("");

  function handleInitialBalance(e) {
    setInitialBalance(e.target.value);
  }

  function handleInterestRate(e) {
    setInterestRate(e.target.value);
    console.log(interestRate);
  }

  //handleInterestFrequency

  // function handleDurationYears(e) {
  //   setDurationYears(e.target.value);
  //   console.log(DurationYears);
  // }

  // function handleDurationMonths(e) {
  //   setDurationMonths(e.target.value);
  //   console.log(DurationMonths);
  // }

  //Compounding interval

  function handleContributions(e) {
    setContributions(e.target.value);
    console.log(contributions);
  }

  //handleContributionFrequency

  function handleSubmit(e) {
    e.preventDefault();

    //Return Future investment value
    //Total interest earned
    //Initial balance
    //Additional deposits
  }
  //Write a function that can handle multiple useState functions and event objects
  // the function will execute the useState function that is passed when executed

  function handleSelect(e, callback) {
    callback(e.target.value);
  }

  console.log(interestFrequency, compoundingInterval);
  return (
    <div className="bg-black flex flex-col justify-center items-center w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center rounded-3xl bg-lime-200 shadow-2xl shadow-purple-400 w-2/3 h-2/3 mt-8 p-6"
      >
        <p className="text-purple-500 text-5xl font-medium mb-6">
          Compounding Calculator
        </p>
        <div className="flex flex-row justify-center items-center m-3">
          <p className="mr-2 text-3xl">Initial balance:</p>
          <input
            onChange={handleInitialBalance}
            value={initialBalance}
            className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-40 text-black"
          />
        </div>
        <div className="flex flex-row justify-center items-center m-3">
          <p className="mr-2 text-3xl">Interest rate:</p>
          <input
            onChange={handleInterestRate}
            value={interestRate}
            className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-24 mr-2 text-black"
          />
          <select
            onChange={handleSelect}
            className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-26 bg-white text-black"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="flex flex-row justify-center items-center m-3">
          <p className="mr-2 text-3xl">Years:</p>
          <input className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-24 mr-2 text-black" />
          <p className="mr-2 text-3xl">Months:</p>
          <input className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-24 mr-2 text-black" />
        </div>
        <div className="flex flex-row justify-center items-center m-3">
          <p className="mr-2 text-3xl">Compounding Interval:</p>
          <select
            onChange={(e) => handleSelect(e, setCompoundingInterval)}
            className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-26 bg-white text-black"
          >
            <option value="daily" defaultValue="">
              Daily
            </option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="flex flex-row justify-center items-center m-3">
          <p className="mr-2 text-3xl">Contributions:</p>
          <input
            onChange={handleContributions}
            value={contributions}
            className="text-center text-xl rounded-xl border-2 border-blue-400 h-10 w-24 mr-2 text-black"
          />
          <select className="text-center text-xl rounded-xl border-2  border-blue-400 h-10 w-26 bg-white text-black">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="flex flex-row justify-center items-center m-3">
          <button
            type="submit"
            className="bg-white border-2 border-purple-400 hover:border-4 active:text-2xl text-purple-400 text-center text-xl font-bold rounded-xl h-12 w-32"
          >
            Calculator
          </button>
        </div>
      </form>

      <Results initialBalance={initialBalance} />
    </div>
  );
}
