import { WorkText } from "./Text";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(false);
  


  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest("img")) {
        setActive(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setActive]);

  return (
    <nav className="xl:px-20 px-8 py-3 grid grid-cols-3 items-center border-b-[2px] bg-white max-w-[2200px]">
      <Link href={`/`}>
        <img className={`w-10`} src="/assets/Logoblack.png" alt="logo" />
      </Link>

      <div className="flex justify-center">
        <div className="flex">
          <Link href={`/Sweatshirts`}>
            <NavLinks
              label={"Sweatshirts"}
              
            />
          </Link>

          <Link href={`/Collections`}>
            <NavLinks
              label={"Collections"}

              
            />
          </Link>
          <Link href={``}>
            <NavLinks
              label={"Acessories"}
              
            />
          </Link>
        </div>
      </div>

      <div
        className={`text-black mx-5 px-3 py-2 w-fit justify-self-end ${
          active ? "border-2 transition-all ease-linear" : ""
        } rounded-[8px] flex bg-search-grey`}
      >
        {active && (
          <input
            type="text"
            className="bg-[transparent] w-[300px] px-3  outline-none rounded-lg text-lg"
            placeholder="Search"
          />
        )}
        <img
          onClick={() => {
            setActive(!active);
          }}
          src="assets/search_icon.svg"
          alt=""
          className="w-[15px]"
        />
      </div>
    </nav>
  );
}

function NavLinks(props) {
  const {label, cls, activePage, onClick} = props
  return (
    <div
    onClick={onClick}
      className={`${
        activePage ? "theme-gradient-2 border-b-[2px] theme-gradient-border" : ""
      } ${cls} p-5 text-[12px] flex items-center`}
    >
      <WorkText block className={activePage ? `theme-gradient-text` : ""}>
        {label}
      </WorkText>
    </div>
  );
}
