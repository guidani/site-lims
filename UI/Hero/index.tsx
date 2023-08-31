import AreaButton from "@/components/AreaButton";
import style from "./hero.module.css";

export default function Hero() {
  return (
    <div className="container">
      <div className={style.hero}>
        <div className={style.leftContent}>
          <h2 className="text-4xl font-bold text-cyan-950">
            Projetos, Pesquisas, Artigos
          </h2>
          <ul className="flex flex-col">
            <li>
              <span className="text-cyan-950 font-bold text-2xl">
                Patrocínio:
              </span>
              <p className="text-2xl font-semibold">
                Torne-se o estímulo para a inovação tecnológica.
              </p>
            </li>
            <li>
              <span className="text-cyan-950 font-bold  text-2xl">
                Parceria:
              </span>
              <p className="text-2xl  font-semibold">
                Seja co-criador da nova geração de soluções tecnológicas.
              </p>
            </li>
            <li>
              <span className="text-cyan-950 font-bold  text-2xl">
                Propostas:
              </span>
              <p className="text-2xl  font-semibold">
                Dê início à revolução com suas contribuições e ideias.
              </p>
            </li>
          </ul>
          {/* <CtaButton /> */}
        </div>
        <div className={style.rightContent}>
          <h2 className={style.rightContentTitle}>Tecnologias</h2>
          <ul className={style.rightContentItems}>
            <li>
              <AreaButton text="Meio Ambiente" />
            </li>
            <li>
              <AreaButton text="Robotica" />
            </li>
            <li>
              <AreaButton text="Software" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
