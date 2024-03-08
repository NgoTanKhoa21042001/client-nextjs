"use client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const isAuth = true;

export default function Home() {
  if (!isAuth) {
    redirect("/login");
  }
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <main>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
      <button onClick={handleLogin}>Chuyển sang trang Login</button>
    </main>
  );
}
