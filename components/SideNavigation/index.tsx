import Link from "next/link";

export default function SideNavigation() {
  return (
    <div>
      <ul className="flex gap-10">
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
    </div>
  );
}
