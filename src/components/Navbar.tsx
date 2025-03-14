import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-4">
      <div className="flex items-center justify-center h-full gap-2 mx-auto sm:justify-between max-w-7xl">
        <Link href="/gallery" className="items-center hidden gap-2 sm:flex">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-6 py-2 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            AutoLearn
          </p>
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/gallery" className="mr-3">
            Courses
          </Link>
          {session?.user && (
            <>
              <Link href="/create" className="mr-3 ">
                Create a course
              </Link>
            </>
          )}
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
