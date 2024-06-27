import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <header className="">
      <div>
        <h1>
          Organize seu espaço e ofereça mais praticidade para os seus clientes
        </h1>
        <Link href="">FALE CONOSCO</Link>
      </div>
      <div>
        <img src="/assets/logotipo.png" alt="Imagem do logotipo" />
        <nav>
          <ul>
            <li>
              <Link href="">SISTEMAS</Link>
            </li>
            <li>
              <Link href="">VALORES</Link>
            </li>
            <li>
              <Link href="">SOBRE NÓS</Link>
            </li>
            <li>
              <Link href="">CONTATO</Link>
            </li>
          </ul>
        </nav>
        <Link href="">saiba mais</Link>
      </div>
    </header>
  );
};

export default Menu;
