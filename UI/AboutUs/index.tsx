import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="about_us">
      <div className="container">
        <h2 className={style.title_h2}>Sobre nós</h2>
        <div className={style.content}>
          <div className={style.left}>
            <p>
              Laboratorio de Inovações em Sistemas Multimidias ou LIMS, é um
              laboratório de ideias inovadoras para o mundo, que utiliza uma
              grande variedade de recursos e tecnologias. A sua missão é criar
              um mundo mais confortável através do conhecimento tecnológico e
              computacional, atendendo a diversas propostas.
            </p>
            <p>
              O LIMS é um grupo de pesquisa que atua desde 2006 no Instituto
              Federal do Piauí (IFPI), no Campus Teresina Central. Reunindo
              pesquisadores, professores, alunos e técnicos de diferentes
              instituições de ensino e níveis de formação, que desenvolvem
              projetos nas áreas de comunicação, tecnologia e educação.
            </p>
          </div>
          <div className={style.right}>
            <figure>
              <img
                src="lims-encerramento-the-info.webp"
                alt="Encerramento Teresinha Info 2019"
                width={400}
                height={400}
              />
              <figcaption>Equipe Teresina Info - 2019</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
