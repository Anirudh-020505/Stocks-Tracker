"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// use next/navigation not next/router use router is coming from next/navigation
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Ghost, LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
  const router = useRouter();

  //.psuh will redicret it to sign-in
  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = { name: "jhon", email: "johndoe@gmail.com" };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-centergap-3 text-white hover:bg-yellow-500"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex justify-center items-center  ">
            <span className="text-base font-extrabold text-gray-400 ">
              {" "}
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-grey-400">


        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-gray-400 ">
                {" "}
                {user.name}
              </span>
              <span className="text-sm text-green-500 "> {user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator  className="bg-gray-600"/>
        <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"> 
            <LogOut className="hidden h-4 w-4 mr-2 sm:block bg-gray-600"/>
            Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator  className="hidden sm:block bg-gray-600"/>
        <nav className="sm:hidden flex  flex-col ">
            <NavItems/>
        </nav>

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
