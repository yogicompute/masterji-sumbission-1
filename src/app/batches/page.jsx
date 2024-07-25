"use client";
import Link from "next/link";
import { useState } from "react";

const Batches = () => {
  const BatchData = [
    {
      title: "SQL Basics To Advanced Mastery Course",
      thumbnail: "/batch-1.png",
      startDate: "20 Jul 2024",
      endDate: "28 Jul 2024",
      price: 0,
      validity: 180,
      status: "Published",
    },
    {
      title: "30 Days Of Javascript Challenge",
      thumbnail: "/batch-2.png",
      startDate: "13 Jul 2024",
      endDate: "12 Aug 2024",
      price: 0,
      validity: 33,
      status: "Unpublished",
    },
    {
      title: "Interview Preparation With Javascript 2.0",
      thumbnail: "/batch-3.png",
      startDate: "02 Aug 2024",
      endDate: "15 Sep 2024",
      price: 10000,
      validity: 365,
      status: "Published",
    },
    {
      title: "React Native For Beginners",
      thumbnail: "/batch-1.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 9000,
      validity: 30,
      status: "Published",
    },
    {
      title: "Python For Data Science",
      thumbnail: "/batch-2.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 3000,
      validity: 30,
      status: "Published",
    },
    {
      title: "Node.js For Beginners",
      thumbnail: "/batch-3.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 1000,
      validity: 30,
      status: "Published",
    },
    {
      title: "Angular 12 For Beginners",
      thumbnail: "/batch-1.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 5000,
      validity: 30,
      status: "Published",
    },
    {
      title: "Vue.js For Beginners",
      thumbnail: "/batch-2.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 3000,
      validity: 30,
      status: "Published",
    },
    {
      title: "Svelte.js For Beginners",
      thumbnail: "/batch-3.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 4000,
      validity: 30,
      status: "Published",
    },
    {
      title: "Deno.js For Beginners",
      thumbnail: "/batch-1.png",
      startDate: "01 Aug 2024",
      endDate: "01 Sep 2024",
      price: 2000,
      validity: 30,
      status: "Published",
    },
  ];

  const [ArticlesPerPage, setArticlesPerPage] = useState(5);
  const [filterText, setfilterText] = useState("");
  const [filteredQuery, setfilteredQuery] = useState("");
  const filteredBatches = BatchData.filter((batch) =>
    batch.title.toLowerCase().includes(filteredQuery.toLowerCase())
  );
  const slicedArticles = filteredBatches.slice(0, ArticlesPerPage);

  const handleFilter = (e) => {
    e.preventDefault();
    setfilteredQuery(filterText);
  };
  return (
    <main className=" max-w-svw flex flex-col space-y-8 pb-8 justify-around items-start bg-gradient-to-r from-slate-500 to-slate-800 ">
      <h1 className="text-center my-10 sm:my-0 text-3xl sm:text-7xl font-semibold w-full">
        Chai aur Code
      </h1>
      <div className="bg-slate-200 sm:w-10/12 h-full sm:mx-10 mx-auto p-5 sm:p-10 rounded-xl space-y-3">
        <h2 className="text-[#313131] text-5xl font-semibold">Batches</h2>
        <p className="text-[#4B4747]">
          Create learner's batch and share information at same time.
        </p>
        <form className="flex gap-3" onSubmit={handleFilter}>
          <input
            type="text"
            placeholder="Search by Title (alk+k or cmd+k)"
            className="border border-gray-400 p-1 text-sm sm:p-2 rounded-md w-48 sm:w-72 text-gray-500"
            onChange={(e) => {
              setfilterText(e.target.value);
              // setfilteredQuery(e.target.value);
            }}
          />
          <button className="bg-[#6C6BAF] px-6 rounded-md">Search</button>
        </form>
        <table className="w-full rounded-lg text-[#4B4747] overflow-hidden">
          <thead className="bg-gray-300 border border-black">
            <tr>
              <th className="text-start p-4">Title</th>
              <th className="text-start border-x border-black p-4 hidden md:table-cell">
                Start Date
              </th>
              <th className="text-start border-x border-black p-4 hidden md:table-cell">End Date</th>
              <th className="text-start border-x border-black p-4 hidden md:table-cell">Price</th>
              <th className="text-start border-x border-black p-4 hidden md:table-cell">
                Validity/Expiry
              </th>
              <th className="text-start border-x border-black p-4 hidden md:table-cell">Status</th>
            </tr>
          </thead>
          <tbody className="border border-black">
            {slicedArticles.map((batch) => (
              <tr className=" text-center text-[#4B4747]" key={batch.title}>
                <td className=" flex justify-start items-center p-6 gap-4 ">
                  <img
                    src={batch.thumbnail}
                    alt={`${batch.title} thumbnail`}
                    className="w-24 rounded-md"
                  />
                  {batch.title}
                </td>
                <td className="p-6 border-x border-black hidden md:table-cell">{batch.startDate}</td>
                <td className="p-6 border-x border-black hidden md:table-cell">{batch.endDate}</td>
                <td className="p-6 border-x border-black hidden md:table-cell">₹{batch.price}</td>
                <td className="p-6 border-x border-black hidden md:table-cell">
                  {batch.validity} days
                </td>
                <td className="p-6 border-x border-black hidden md:table-cell">
                  <p
                    className={
                      batch.status === "Published"
                        ? "bg-green-200 border-2 border-green-400 rounded-md  hidden md:block"
                        : "bg-gray-300 border-2 border-gray-500 rounded-md px-1 hidden md:block"
                    }
                  >
                    {batch.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-[#4B4747] flex gap-4 justify-end items-center">
          <p>Rows per page</p>
          <select
            onChange={(e) => setArticlesPerPage(e.target.value)}
            className="p-2 outline-none border-gray-300 border-2 rounded-md"
          >
            <option value={5}>{5}</option>
            <option value={10}>{10}</option>
            <option value={15}>{15}</option>
          </select>
          <button>
            <LeftArrow />
          </button>
          <button>
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end items-center p-6">
        <Link href="https://chaicode.com">
          <img
            src="/chai-icon.png"
            alt="chai-icon"
            className=" w-20 h-20 sm:w-24 sm:h-24 sm:fixed rounded-xl right-10 bottom-14"
          />
        </Link>
      </div>
    </main>
  );
};

export default Batches;
const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
