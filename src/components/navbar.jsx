import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useScrollBlock } from "../utilities/scroll";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
      setIsModalOpen(!isModalOpen);
        setIsOpen(!isOpen);
    };
        const navItems = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Notes",
            path: "/notes",
        },
        {
            id: 3,
            name: "Syllabus",
            path: "/syllabus",
        },
        {
            id: 4,
            name: "Books",
            path: "/books",
        },
        {
            id: 5,
            name: "Questions",
            path: "/questions",
        },
        {
            id: 6,
            name: "Contact",
            path: "/contact",
        },

    ];
const [isModalOpen, setIsModalOpen] = useState(false);
	const [blockScroll, allowScroll] = useScrollBlock();

	useEffect(() => {
		if (isModalOpen) {
			blockScroll();
		} else {
			allowScroll();
		}
	}, [isModalOpen, blockScroll, allowScroll]);
  return (
    <header className="bg-none z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between font-menu text-3xl">
          <div className="flex-1 md :flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to={"#"}>
              <span className="sr-only">Pusoe Notes</span>
              <h1 className=" text-menucolor">Pusoe Notes</h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-4">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-menu">
                {navItems.map((item) => (
                                            <li key={item.id}>
                                                <Link to={item.path} className=" text-menucolor transition hover:text-gray-500/75">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                <li>
                </li>
              </ul>
            </nav>

             <div className="md:hidden">
                            <button
                                onClick={toggleNavbar}
                                className="text-neutral-600 focus:outline-none"
                            >
                                <FaBars size={24} />
                            </button>
                        </div>
                         {/* Navbar items and buttons */}
            <div
                className={`fixed md:static md:hidden top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-black/85 border-l md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none transition-transform duration-300 ease-in-out transform flex-1 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0 z-50`}
            >

              
                              {/* Logo and close icon Inside Toggle Menu */}
                              <div className="relative z-50 w-full md:hidden flex items-center justify-between px-4">
                                  {/* Logo */}
                                 <Link className="block text-teal-600" to={"#"}>
              <span className="sr-only">Pusoe Notes</span>
              <h1 className=" text-menucolor">Pusoe Notes</h1>
            </Link>
                                  {/* Close Icon */}
                                  <div className="md:hidden flex justify-end py-4">
                                      <button
                                          onClick={toggleNavbar}
                                          className="text-kprimary focus:outline-none"
                                      >
                                          <IoMdClose size={30} />
                                      </button>
                                  </div>
                              </div>
                              
                {/* Divider */}
                <div className="border-b border-neutral-500 md:hidden"></div>
                <div className="relative z-50 flex-1 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
                                    {/* Navbar items */}
                                    <ul className="flex flex-col md:flex-row items-center gap-6 text-white font-normal">
                                        {navItems.map((item) => (
                                            <li key={item.id}>
                                                <Link to={item.path} className=" hover:text-menucolor ease-in-out duration-300"  onClick={toggleNavbar}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                    {isModalOpen && <RemoveScrollBar />}
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
