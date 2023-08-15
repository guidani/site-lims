import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full mt-4">
        <div>
          <Image
            alt="lims logo"
            src={"/LIMS01small.png"}
            width={100}
            height={50}
          />
        </div>
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
      </div>
    </div>
  );
}
