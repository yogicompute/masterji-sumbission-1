"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = useState(6);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval);
          router.push("/otp-form");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [router]);

  useEffect(() => {
    setTimeout(() => {
      router.push("/otp-form");
    }, 6000);
  });

  return (
    <main className="h-svh bg-[#ecb86a] flex flex-col justify-center items-center text-8xl font-semibold">
      <div className="flex">
        <img src="/tea.svg" alt="tea svg" className="w-20 mx-2" />
        Chai peelo guys
      </div>
      <img src="/tea.png" alt="chaiiii" />
      <h1 className="text-xl">Redirecting in {timeRemaining} seconds</h1>
    </main>
  );
}
