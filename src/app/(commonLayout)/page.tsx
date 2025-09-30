"use client";
import { Button } from "@/components/ui/button";
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
       <Button>Go To Dashboard</Button>
      </div>
    </div>
  );
};

export default HomePage;
