"use client";
import { useEffect } from "react";
import Link from "next/link";
import { createSwapy } from "swapy";

const DnD = () => {
  useEffect(() => {
    const container = document.querySelector(".container");

    const swapy = createSwapy(container, {
      animation: "dynamic",
    });

    swapy.enable(true);
  }, []);

  return (
    <main className="bg-[#D2E3C8] min-h-svh max-w-svw p-2 sm:p-10 ">
      <h1 className="text-[#4F6F52] text-center text-7xl font-semibold ">
        Chai aur Code
      </h1>
      <div className="bg-white rounded-xl w-full p-6 my-8">
        <h2 className="text-[#313131] text-3xl font-bold">Manage Bundle</h2>
        <p className="text-[#4B4747]">
          Change orders of the products based on priority
        </p>
        <div class="container">
          <div class="section-1" data-swapy-slot="foo">
            <div class="content-a" data-swapy-item="a">
              <Tile
                title="Interview preparation with JavaScript 2.0"
                amount="Rs. 9000/-"
                type="Course"
                imgUrl="batch-1.png"
              />
            </div>
          </div>

          <div class="section-2" data-swapy-slot="bar">
            <div class="content-b" data-swapy-item="b">
              <div class="handle" data-swapy-handle>
                <Tile
                  title="Aptitude - Averages, Mixtures & Allegation"
                  amount="Free"
                  type="Mock Test"
                  imgUrl="batch-4.png"
                />
              </div>
            </div>
          </div>

          <div class="section-3" data-swapy-slot="baz">
            <div class="content-c" data-swapy-item="c">
              <Tile
                title="Aptitude - Simple & Compound Interest"
                amount="Free"
                type="Mock Test"
                imgUrl="batch-5.png"
              />
            </div>
          </div>

          <div class="section-2" data-swapy-slot="baq">
            <div class="content-b" data-swapy-item="bd">
              <div class="handle" data-swapy-handle>
                <Tile
                  title="Aptitude - Partnership"
                  amount="Free"
                  type="Mock Test"
                  imgUrl="batch-5.png"
                />
              </div>
            </div>
          </div>
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

export default DnD;

const Tile = ({ title, amount, type, imgUrl }) => {
  return (
    <div className=" cursor-move select-none w-full min-h-24 grid grid-cols-2 gap-4 py-3 sm:grid-cols-7 text-black rounded-lg my-4 px-4 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="col-span-1 flex justify-start items-center">
        <img src="/sixDots.png" alt="sixDots" />
        <img
          src={`/${imgUrl}`}
          alt={`${imgUrl} image`}
          className="w-32 rounded-lg mx-1 mr-6 col-span-2"
        />
      </div>
      <h3 className="col-span-4 text-xl font-medium">{title}</h3>
      <div className="flex justify-end items-start col-span-2 space-x-8">
        <div className="text-start w-[105px]">
          <p className="text-xl">{amount}</p>
        </div>
        <p className="bg-green-200 px-2 border-2 border-green-400 rounded-md w-[100px] text-center">
          {type}
        </p>
        <img src="/threeDots.png" alt="sixDots" />
      </div>
    </div>
  );
};
