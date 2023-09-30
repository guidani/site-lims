"use client";
import IconClose from "@/components/IconClose";
import IconMenu from "@/components/IconMenu";
import Link from "next/link";
import { useState } from "react";
import style from "./navbar.module.css";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  function toggleMobileMenu() {
    return isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  return (
    <div className="container">
      <div className={style.navbar}>
        {/* <div className="w-28 h-14 bg-[url('/limssmall.png')] bg-center bg-cover  bg-no-repeat"></div> */}
        <img src="limssmall.png" alt="logo lims" width={100} height={64} />

        <ul className={style.navList}>
          <li className="font-bold text-[#003351]">
            <Link href={"#about_us"} className="m-4">
              Sobre Nós
            </Link>
          </li>

          <li className="font-bold text-[#003351]">
            <Link href={"#projetos"}>Projetos</Link>
          </li>
          <li className="font-bold text-[#003351]">
            <Link href={"#eventos"}>Eventos</Link>
          </li>
          <li className="font-bold text-[#003351]">
            <Link href={"#fale_conosco"}>Fale Conosco</Link>
          </li>
        </ul>

        <button
          id="sheetToggleBtn"
          className={style.sheetBtn}
          onClick={toggleMobileMenu}
        >
          <IconMenu />
        </button>

        {/* MOBILE MENU */}
        <div
          className={style.MobileWrapper}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <div className={style.MobileContainer} id="mobilemenu">
            <button
              id="sheetToggleBtn"
              className={style.sheetBtn}
              onClick={toggleMobileMenu}
            >
              <IconClose />
            </button>
            <ul className="p-4">
              <li className="font-bold text-[#003351] p-4">
                <Link href={"#about_us"} className="">
                  Sobre Nós
                </Link>
              </li>
              <li className="font-bold text-[#003351]">
                <Link href={"#projetos"}>Projetos</Link>
              </li>
              <li className="font-bold text-[#003351]">
                <Link href={"#eventos"}>Eventos</Link>
              </li>
              <li className="font-bold text-[#003351]">
                <Link href={"#fale_conosco"}>Fale Conosco</Link>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
