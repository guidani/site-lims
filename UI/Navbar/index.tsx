import IconMenu from "@/components/IconMenu";
import Link from "next/link";
import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        {/* <div className="w-28 h-14 bg-[url('/limssmall.png')] bg-center bg-cover  bg-no-repeat"></div> */}
        <img src="limssmall.png" alt="logo lims" width={100} height={64} />

        <ul className={style.navList}>
          <li className="font-bold text-[#003351]">
            <Link href={"#"} className="m-4">
              Sobre Nós
            </Link>
          </li>
          <li className="font-bold text-[#003351]">
            <Link href={"#"}>Equipe</Link>
          </li>
          <li className="font-bold text-[#003351]">
            <Link href={"#"}>Projetos</Link>
          </li>
          <li className="font-bold text-[#003351]">
            <Link href={"#"}>Fale Conosco</Link>
          </li>
        </ul>

        <button id="sheetToggleBtn" className={style.sheetBtn}>
          <IconMenu />
        </button>
      </div>
    </div>
  );
}
