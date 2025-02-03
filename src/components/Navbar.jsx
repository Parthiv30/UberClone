import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AlignJustify, Earth } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNavbarMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-black w-screen h-16 justify-center items-center ">
      <div className="flex flex-row justify-center items-center mx-0 md:mx-28 w-screen">
        <div className="flex items-center space-x-2 lg:space-x-4 flex-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            className="w-[55px] h-[19px] filter invert brightness-0"
          />
          <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
            Ride
          </p>
          <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
            Drive
          </p>
          <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
            Business
          </p>
          <div>
            <div className="relative inline-block text-left">
              <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold cursor-pointer shadow-xs hover:bg-[#282828]">
                About
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-center space-x-2 lg:space-x-4 hidden items-center">
          <div className="flex px-2 py-2 rounded-md hover:bg-[#282828]">
            <Earth color="#ffffff" strokeWidth={1.25} />
            <p className="text-white font-semibold">En</p>
          </div>
          <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
            Help
          </p>
          <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
            Login
          </p>
          <div className="bg-white px-2 py-1 font-semibold rounded-full text-[14px]">
            Sign up
          </div>
        </div>

        
        <div className="flex sm:hidden relative">
          <AlignJustify
            onClick={handleToggleNavbarMenu}
            className={`text-white mx-1  cursor-pointer`}
          />
            <div className={`absolute ${isOpen?'absolute':'hidden'} -left-36 top-12 `}>
              <div className="flex flex-col w-40 justify-center p-3 rounded-3xl space-x-2 bg-[#333] lg:space-x-4  items-center">
                <div className="flex  px-2 py-2 rounded-md hover:bg-[#282828]">
                  <Earth color="#ffffff" strokeWidth={1.25} />
                  <p className="text-white font-semibold">En</p>
                </div>
                <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
                  Help
                </p>
                <p className="text-white font-semibold px-2 py-2 rounded-md hover:bg-[#282828]">
                  Login
                </p>
                <div className="bg-white px-2 py-1 font-semibold rounded-full text-[14px]">
                  Sign up
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
