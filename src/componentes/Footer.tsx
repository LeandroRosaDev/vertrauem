import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div className="bg-[#27AE60] py-14">
          <div className="container mx-auto flex justify-evenly gap-8 text-white">
            <div>
              <ul className="font-light">
                <li>
                  <Link href="">SOBRE</Link>
                </li>
                <li>
                  <Link href="">VALORES</Link>
                </li>
                <li>
                  <Link href="">CONTATO</Link>
                </li>
                <li>
                  <Link href="">FALE CONOSCO</Link>
                </li>
              </ul>

              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3732837763105!2d-43.31173092390603!3d-22.788628233660347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%292%20-%20Centro%2C%20Duque%20de%20Caxias%2C%20RJ%2C%25070-330!5e!3m2!1spt-BR!2sbr!4v1719441922450!5m2!1spt-BR!2sbr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-40 xl:h-20 mt-8 rounded-lg"
                ></iframe>
                <h1 className="font-bold text-lg mt-4">MAPA</h1>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-4">SISTEMAS</h1>
              <ul className="font-light">
                <li>
                  <Link href="">SISTEMA DE MANUTENÇÃO PLANEJADA</Link>
                </li>
                <li>
                  <Link href="">SISTEMA DE ADVOCACIA</Link>
                </li>
                <li>
                  <Link href="">SISTEMA DE GESTÃO FINANCEIRA</Link>
                </li>
                <li>
                  <Link href="">SISTEMA DE ACADEMIAS</Link>
                </li>
                <li>
                  <Link href="">SISTEMA DE ESCOLAS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-4">LINKS</h1>
              <ul className="font-light">
                <li>
                  <Link href="">SUPORTE TÉCNICO</Link>
                </li>
                <li>
                  <Link href="">POLÍTICA DE USO</Link>
                </li>
                <li>
                  <Link href="">RECLAME AQUI</Link>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <Link href="">
                  <img
                    src="/assets/icones/11.svg"
                    alt="Icone do Facebook"
                    className="w-6 h-6"
                  />
                </Link>
                <Link href="">
                  <img
                    src="/assets/icones/12.svg"
                    alt="Icone do Instagram"
                    className="w-6 h-6"
                  />
                </Link>
                <Link href="">
                  <img
                    src="/assets/icones/13.svg"
                    alt="Icone do Linkedin"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2F5233] py-4 text-white text-center">
          <p>Todos os direitos reservados. | © 2024 VERTRAUEM</p>
          <p>
            Esta é uma empresa do{' '}
            <a href="" className="underline">
              grupo altuori
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
