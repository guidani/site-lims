import EnvelopeIcon from "@/components/Icons/EnvelopeIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import YouTubeIcon from "@/components/Icons/YouTubeIcon";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer} id="fale_conosco">
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.left}>
            <span>Redes Sociais</span>
            <ul>
              <li>
                <InstagramIcon />
                <a href="https://www.instagram.com/ifpi.lims/" target="_blank">
                  <span>@ifpi.lims</span>
                </a>
              </li>
              <li>
                <YouTubeIcon />
                <a href="https://www.youtube.com/@ifpi-lims" target="_blank">
                  <span>@ifpi-lims</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.right}>
            <span>Contato</span>
            <ul>
              <li>
                <EnvelopeIcon />
                <a href="mailto:lims@ifpi.edu.br">
                  <span>lims@ifpi.edu.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
