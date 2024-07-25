"use client";
import Link from "next/link";
import { useRef, useState } from "react";
// bg-[#23CF9B] bg-[#112D4E] bg-[#EB2D5B]

const OTP = () => {
  const otp = "1234";
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [finalState, setfinalState] = useState({
    isVerified: false,
    bg: "#112D4E",
    text: "Verify Account",
  });

  const handleChange = (event, index) => {
    const value = event.target.value;

    if (!/^\d*$/.test(value)) {
      event.target.value = "";
      return;
    }

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      if (event.target.value === "") {
        if (index > 0) {
          inputRefs[index - 1].current.focus();
        }
      } else {
        event.target.value = "";
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputOtp = inputRefs.map((ref) => ref.current.value).join("");
    if (inputOtp === otp) {
      setfinalState({
        isVerified: true,
        bg: "#23CF9B",
        text: "Verified",
      });
    } else if (inputOtp !== otp) {
      setfinalState({
        isVerified: false,
        bg: "#EB2D5B",
        text: "Verification failed",
      });
    }
  };

  return (
    <main className="bg-[#3F72AF] h-svh w-svw">
      <h1 className="text-white text-center p-6 sm:p-20 text-7xl font-semibold">
        Chai aur Code
      </h1>
      <div className="bg-white max-w-xl text-[#BFBFBF] mx-auto px-8 sm:px-20 py-8 text-center space-y-3 rounded-2xl">
        <h2 className="text-black text-2xl font-semibold">
          Mobile Phone Verification
        </h2>
        <p>
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="flex space-x-6  justify-center items-center my-5 ">
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className={` ${
                  finalState.bg === "#EB2D5B" && "outline-[#EB2D5B]"
                } bg-[#DBE2EF] rounded-xl text-black text-5xl sm:text-6xl text-center outline-none w-14 h-18 sm:h-24 sm:w-20`}
                ref={inputRefs[index]}
                onChange={(event) => handleChange(event, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <button
            className={`bg-[${finalState.bg}]   text-lg p-4 w-full rounded-lg text-white outline-none`}
          >
            {finalState.text}
          </button>
        </form>
        <p>
          Didn’t receive code?{" "}
          <Link href="#" className="text-black font-medium">
            Resend
          </Link>{" "}
        </p>
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

export default OTP;
