// app/page.tsx
"use client";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to the protected page if signed in
      router.push("/protected");
    }
  }, [isSignedIn, router]);
  return (
    <>
    <div className="w-full p-4">
      <header className="flex justify-between items-center mb-20 bg-gray-100 w-full px-8 py-4">
        <h1 className="text-base">
          Next.js App Router + Clerk Authentication
        </h1>
        <nav>
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-xs  rounded-md bg-black hover:bg-black/80 text-white/80 hover:text-white duration-150 transition"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-xs  rounded-md bg-black  hover:bg-black/80 text-white/80 hover:text-white duration-150 transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      </div>

    <div className="container mx-auto p-4 pt-6 h-full">

      <main className="flex flex-col items-center h-full justify-center">
        <section className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold">Welcome to our App!</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
          <br />
          <h1>
            <b>Notice:</b> Please sign in to access the our website
          </h1>
        </section>
        <section className="flex flex-wrap justify-center mb-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h3 className="text-xl font-bold">Feature 2</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h3 className="text-xl font-bold">Feature 3</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </main>
    </div>
    </>
  );
}
