
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = null; 

  useEffect(() => {
    if (!user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div>
      <h2 className="font-bold text-2xl">Hello,Welcome to HIRIX</h2>
    </div>
  );
}
