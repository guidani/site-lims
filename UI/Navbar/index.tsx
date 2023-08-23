import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between w-full mt-4" style={{alignItems: 'center'}}>
        <div className="w-28 h-14 bg-[url('/limssmall.png')] bg-center bg-cover  bg-no-repeat"></div>
        
          <ul className="flex h-full gap-10 ">
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
  );
}
