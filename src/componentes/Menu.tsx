import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="bg-[#F0F4C3] flex justify-center gap-10 h-16">
        <h2 className="my-auto font-semibold">
          Organize seu espaço e ofereça mais praticidade para os seus clientes
        </h2>
        <div className="my-auto">
          <Link
            href="#contato"
            className="bg-[#27AE60] rounded-2xl text-white py-2 px-4"
          >
            FALE CONOSCO
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/assets/logotipo.png"
            alt="Imagem do logotipo"
            width={150}
            height={50}
          />
        </div>

        <nav>
          <ul className="flex justify-between space-x-8 gap-20  text-[#545454]">
            <li>
              <Link href="#sistemas">SISTEMAS</Link>
            </li>
            <li>
              <Link href="#contato">VALORES</Link>
            </li>
            <li>
              <Link href="#introducao">SOBRE NÓS</Link>
            </li>
            <li>
              <Link href="#contato">CONTATO</Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <Link
            href="#perguntas-frequentes"
            className="bg-[#F0F4C3] py-3 px-10 rounded-2xl font-semibold"
          >
            saiba mais
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
