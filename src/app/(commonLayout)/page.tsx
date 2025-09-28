"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard");
  };
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Hellow next js</h1>
        <button onClick={handleNavigate} className="border-[2px] px-4 py-1 border-b-blue-800 rounded-[5px] mt-5">Dashboard</button>
      </div>
    </div>
  );
};

export default HomePage;
