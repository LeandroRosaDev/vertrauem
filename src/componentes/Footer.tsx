import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div className="bg-[#27AE60]">
          <div>
            <h1>MAPA DO SITE</h1>
            <Link href="">SOBRE</Link>
            <Link href="">VALORES</Link>
            <Link href="">CONTATO</Link>
            <Link href="">FALE CONOSCO</Link>
          </div>
          <div>
            <h1>SISTEMAS</h1>
            <Link href="">SISTEMA DE MANUTENÇÃO PLANEJADA</Link>
            <Link href="">SISTEMA DE ADVOCACIA</Link>
            <Link href="">SISTEMA DE MANUTENÇÃO PLANEJADA</Link>
            <Link href="">SISTEMA DE GESTÃO FINANCEIRA</Link>
            <Link href="">SISTEMA DE ACADEMIAS</Link>
            <Link href="">SISTEMA DE ESCOLAS</Link>
          </div>
          <div>
            <h1>LINKS</h1>
            <Link href="">SUPORTE TÉCNICO</Link>
            <Link href="">POLITICA DE USO</Link>
            <Link href="">RECLAME AQUI</Link>
            <div>
              <Link href="">
                <img src="/assets/icones/11.svg" alt="Icone do Facebook" />
              </Link>

              <Link href="">
                <img src="/assets/icones/12.svg" alt="Icone do Instagram" />
              </Link>
              <Link href="">
                <img src="/assets/icones/13.svg" alt="Icone do Linkedin" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#2F5233]">
          <p>Todos os direitos reservados. | © 2024 vertrauem</p>
          <p>
            Esta é uma empresa do <a href="">grupo altuori</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
