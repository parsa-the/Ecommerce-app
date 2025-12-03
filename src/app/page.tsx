"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const host = window.location.hostname;
    const allowedHosts = ["localhost"];

    if (allowedHosts.includes(host)) {
      router.push("/products");
    }
  }, [router]);
  return <></>;
}
