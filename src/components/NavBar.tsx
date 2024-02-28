import { useState } from "react";
import logo from "../assets/logo.svg";
import MenuIcon from "./MenuIcon";
import XIcon from "./XIcon";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex w-full min-w-[375px] items-center justify-between">
      
      <img
        src={logo}
        alt="logo"
        className="ml-[16px] h-[28px] w-[45px] md:ml-0 md:h-[40px] md:w-[64px]"
      />
      <ul className="hidden gap-[40px] text-body text-gun-metal md:flex">
        <li className="hover:text-light-vermillion">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">News</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Popular</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Tendencias</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Categorias</a>
        </li>
      </ul>
      <div className="mr-[16px] md:hidden">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <div className="absolute left-0 top-0 size-full bg-dark-space-blue/50">
              <div className="fixed right-0 top-0 h-full w-[256px] bg-almost-white shadow-lg">
                <div className="absolute right-[35px] top-[27px]">
                  <XIcon></XIcon>
                </div>

                <div className="relative top-[116.7px]">
                  <ul className="ml-[24px] flex flex-col items-start gap-[24px] text-xs text-dark-space-blue">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">New</a>
                    </li>
                    <li>
                      <a href="/">Popular</a>
                    </li>
                    <li>
                      <a href="/">Tendencias</a>
                    </li>
                    <li>
                      <a href="/">Categorias</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <MenuIcon></MenuIcon>
          )}
        </button>
      </div>
    </nav>
  );
}
