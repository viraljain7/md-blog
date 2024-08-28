import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <nav className=" h-16 bg-background/20 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between">
      <div className="text-lg font-bold md:text-xl ">DevXBlog</div>
      <ul className="hidden md:flex text-xl  w-full justify-end items-center space-x-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="buttons space-x-2 ">
          <Link href={"/login"}>
            <Button variant="outline">Login </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button variant="outline">Sign Up </Button>
          </Link>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <ModeToggle />

        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="size-7 md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
