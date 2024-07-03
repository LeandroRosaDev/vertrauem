// @ts-nocheck
"use client";
import Form from "@/componentes/Form";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  function handleAccordionClick(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const targetId = button.getAttribute("data-accordion-target");
    const targetElement = document.querySelector(targetId);

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    if (isExpanded) {
      targetElement?.classList.add("hidden");
    } else {
      targetElement?.classList.remove("hidden");
    }
  }

  useEffect(() => {
    const accordionButtons = document.querySelectorAll<HTMLButtonElement>(
      "[data-accordion-target]"
    );

    accordionButtons.forEach((button) => {
      button.addEventListener("click", handleAccordionClick);
    });

    return () => {
      accordionButtons.forEach((button) => {
        button.removeEventListener("click", handleAccordionClick);
      });
    };
  }, []);
  return (
    <main>
      <section id="introducao" className="relative">
        <div className="bg-[#27AE60] py-4 px-10 flex items-center md:flex-row md:text-left">
          <div className="md:w-1/2 px-8">
            <h1 className="text-white text-5xl font-extralight my-8 leading-tight ml-40">
              ESTEJA
              <br /> PREPARADO
              <br /> PARA O<br /> FUTURO.
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center absolute right-0 bottom-7">
            <img
              src="/assets/img/1.png"
              alt="Imagem de um computador"
              className="w-[550px] h-[550px]"
            />
          </div>
        </div>
        <div className="h-72 bg-[url('/assets/bg/2.png')] bg-cover"> </div>
      </section>

      <section id="vantagens" className="bg-[#F0F4C3] py-14">
        <div className="container mx-auto text-center">
          <h1 className="text-[#545454] text-3xl md:text-5xl font-extralight mb-14">
            DESCUBRA O PODER DOS NOSSOS SISTEMAS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <img
                src="/assets/icones/1.svg"
                className="w-24 mb-4"
                alt="Icone"
              />
              <h1 className="text-[#27AE60] text-xl font-semibold mb-2">
                CONTROLE FINANCEIRO
              </h1>
              <p className="text-[#545454]">
                Gerencie suas finanças com facilidade. Automatize processos,
                acompanhe receitas e despesas, e obtenha relatórios detalhados.
                Simplifique sua contabilidade e foque no crescimento do seu
                negócio.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/icones/2.svg"
                className="w-24 mb-4"
                alt="Icone"
              />
              <h1 className="text-[#27AE60] text-xl font-semibold mb-2">
                GESTÃO DE ATENDIMENTO
              </h1>
              <p className="text-[#545454]">
                Melhore o atendimento ao cliente. Organize e acompanhe
                interações em um só lugar, respondendo rapidamente e aumentando
                a satisfação do cliente com um serviço ágil e personalizado.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/icones/3.svg"
                className="w-24 mb-4"
                alt="Icone"
              />
              <h1 className="text-[#27AE60] text-xl font-semibold mb-2">
                GESTÃO DE TAREFAS
              </h1>
              <p className="text-[#545454]">
                Mantenha sua equipe produtiva. Crie, atribua e acompanhe tarefas
                de forma eficiente. Priorize atividades e colabore em tempo real
                para garantir o cumprimento dos prazos.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/icones/4.svg"
                className="w-24 mb-4"
                alt="Icone"
              />
              <h1 className="text-[#27AE60] text-xl font-semibold mb-2">
                CONTROLE DE ESTOQUE
              </h1>
              <p className="text-[#545454]">
                Monitore seu estoque em tempo real. Receba alertas de reposição
                e evite rupturas. Garanta uma gestão precisa e reduza custos
                operacionais com nosso sistema.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/icones/5.svg"
                className="w-24 mb-4"
                alt="Icone"
              />
              <h1 className="text-[#27AE60] text-xl font-semibold mb-2">
                MANUTENÇÃO PROGRAMADA
              </h1>
              <p className="text-[#545454]">
                Planeje e acompanhe manutenções preventivas. Prolongue a vida
                útil dos seus equipamentos e reduza custos de reparo, garantindo
                a continuidade das operações.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/icones/6.svg"
                className="w-24 mb-4"
                alt="Icone"
              />
              <h1 className="text-[#27AE60] text-xl font-semibold mb-2">
                EMISSÃO DE RELATÓRIOS
              </h1>
              <p className="text-[#545454]">
                Gere relatórios detalhados e personalizados. Acesse dados
                precisos para tomar decisões informadas e planejar estratégias
                eficazes. Transforme dados em insights valiosos com facilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Inteligencia Artificial" className="bg-[#27AE60] ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/img/6.png"
              alt="imagem de uma rede neural"
              className="w-[500px] "
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:text-left mt-8 md:mt-0 px-8">
            <h1 className="text-white text-center text-3xl md:text-5xl font-extralight mb-6">
              O PODER DAS INTELIGÊNCIAS ARTIFICIAIS ALIADAS COM TECNOLOGIA DE
              PONTA
            </h1>
            <Link
              href=""
              className="bg-[#F0F4C3] text-[#545454] py-3 px-10 font-semibold rounded-3xl"
            >
              saiba mais
            </Link>
          </div>
        </div>
      </section>

      <section
        id="sistemas-overview"
        className="h-full bg-[url('/assets/bg/2.png')] bg-cover pb-14"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex justify-center relative md:items-start">
            <div className="mt-20 mr-10">
              <ul className="list-none space-y-4 flex flex-col gap-5 h-[350px]">
                <li className="flex items-center text-[#27AE60] text-2xl font-semibold">
                  DESIGN ARROJADO E MODERNO
                  <span className="w-6 h-6 bg-[#27AE60] rounded-full inline-block ml-2"></span>
                </li>

                <li className="flex items-center  text-[#27AE60] text-2xl font-semibold">
                  RESPONSIVIDADE EM MÚLTIPLOS DISPOSITIVOS
                  <span className="w-6 h-6 bg-[#27AE60] rounded-full inline-block ml-2"></span>
                </li>

                <li className="flex items-center text-[#27AE60] text-2xl font-semibold">
                  CONTROLE SEU NEGÓCIO DE QUALQUER LUGAR
                  <span className="w-6 h-6 bg-[#27AE60] rounded-full inline-block ml-2"></span>
                </li>
              </ul>
            </div>

            <img
              src="/assets/img/2.png"
              alt="Imagem de um celular"
              className="absolute -top-36 right-10 w-[600px]"
            />
          </div>

          <div className="w-full md:w-1/2 flex  justify-end  gap-20 md:items-start mt-8 md:mt-0">
            <img
              src="/assets/img/3.png"
              alt="Imagem de um monitor"
              className="mb-4 w-[600px]"
            />
            <div className="mt-16">
              <ul className="list-none space-y-4 mt-10 flex flex-col gap-5 text-left w-[400px]">
                <li className="flex items-center text-[#27AE60] text-2xl font-semibold">
                  <span className="w-6 h-6 bg-[#27AE60] rounded-full inline-block mr-2"></span>
                  SIMPLES E INTUITIVO
                </li>
                <li className="flex items-center text-[#27AE60] text-2xl font-semibold">
                  <span className="w-6 h-6 bg-[#27AE60] rounded-full inline-block mr-2"></span>
                  AGILIDADE E PERFORMANCE
                </li>
                <li className="flex items-center text-[#27AE60] text-2xl font-semibold">
                  <span className="w-6 h-6 bg-[#27AE60] rounded-full inline-block mr-2"></span>
                  GERENCIAMENTO COMPLETO
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="comentarios" className="bg-[#F0F4C3] py-6">
        <div className="container mx-auto text-center">
          <div className="bg-[#27AE60] w-[330px] h-40 flex items-center justify-center rounded-xl ml-20">
            <h1 className=" text-white text-2xl text-left">
              Faça como os
              <br /> chespiritos e tenha
              <br /> acesso ao melhor
              <br /> sistema do mercado!
            </h1>
          </div>
          <div className="flex justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3 flex flex-col items-end">
              <div className="relative mb-4">
                <img
                  src="/assets/img/9.png"
                  alt="Imagem de um comentario de um cliente"
                  className="object-cover mt-4 w-[350px]"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative -mt-20">
                <img
                  src="/assets/img/8.png"
                  alt="Imagem de um comentario de um cliente"
                  className="object-cover mt-4 w-[350px]"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="relative mb-4">
                <img
                  src="/assets/img/7.png"
                  alt="Imagem de um comentario de um cliente"
                  className="object-cover mt-4 w-[350px]"
                />
              </div>
            </div>
          </div>
          <Link
            href=""
            className="bg-[#27AE60] text-white font-semibold py-2 px-14 rounded-2xl mb-10 inline-block"
          >
            SAIBA MAIS
          </Link>
        </div>
      </section>

      <section
        id="numeros"
        className="bg-[url('/assets/bg/1.png')] py-14 text-center"
      >
        <div className="container mx-auto my-20">
          <h1 className="text-white text-3xl md:text-5xl font-extralight mb-20">
            O FUTURO CHEGOU PARA FICAR.
          </h1>
          <div className="flex justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/4">
              <h1 className="text-white text-4xl font-bold">+11K</h1>
              <p className="text-white text-lg">USUÁRIOS CONECTADOS</p>
            </div>

            <div className="w-full md:w-1/4">
              <h1 className="text-white text-4xl font-bold">+130K</h1>
              <p className="text-white text-lg">NOTAS EMITIDAS</p>
            </div>

            <div className="w-full md:w-1/4">
              <h1 className="text-white text-4xl font-bold">+110</h1>
              <p className="text-white text-lg">CIDADES PRESENTES</p>
            </div>

            <div className="w-full md:w-1/4">
              <h1 className="text-white text-4xl font-bold">+13M</h1>
              <p className="text-white text-lg">DOCUMENTOS GERENCIADOS</p>
            </div>
          </div>
        </div>
      </section>

      <section id="perguntas-frequentes" className="py-14">
        <div className="container mx-auto text-center">
          <h1 className="text-[#27AE60] text-3xl md:text-5xl font-bold mb-10">
            PERGUNTAS FREQUENTES
          </h1>
          <div
            id="accordion-color"
            data-accordion="collapse"
            data-active-classes="bg-[#F0F4C3] text-[#27AE60]"
          >
            <h2 id="accordion-color-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-[#F0F4C3] hover:bg-[#F0F4C3] gap-3"
                data-accordion-target="#accordion-color-body-1"
                aria-expanded="true"
                aria-controls="accordion-color-body-1"
              >
                <span>QUAIS OS BENEFÍCIOS DOS SISTEMAS VERTRAUEM</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-1"
              className="hidden"
              aria-labelledby="accordion-color-heading-1"
            >
              <div className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-gray-500">
                  Os sistemas Vertrauem são soluções web que oferecem uma série
                  de benefícios para empresas de todos os tamanhos. Aqui estão
                  alguns dos principais: Acesso Remoto: Com os sistemas
                  Vertrauem, você pode acessar informações e gerenciar suas
                  operações de qualquer lugar, a qualquer hora, utilizando
                  apenas um dispositivo com internet. Segurança Avançada: As
                  plataformas Vertrauem são equipadas com robustas medidas de
                  segurança, protegendo dados sensíveis contra ameaças
                  cibernéticas e acessos não autorizados. Eficiência
                  Operacional: Automação de processos e centralização de dados
                  permitem uma gestão mais ágil e eficiente, reduzindo erros e
                  economizando tempo. Escalabilidade: Os sistemas Vertrauem são
                  flexíveis e podem crescer junto com sua empresa, adaptando-se
                  às necessidades em constante evolução do seu negócio.
                  Integração Simplificada: Nossas soluções se integram
                  facilmente com outras ferramentas e sistemas já utilizados
                  pela sua empresa, garantindo um fluxo de trabalho contínuo e
                  eficiente
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-[#F0F4C3] hover:bg-[#F0F4C3] gap-3"
                data-accordion-target="#accordion-color-body-2"
                aria-expanded="false"
                aria-controls="accordion-color-body-2"
              >
                <span>COMO EMITIR UMA NOTA FISCAL?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-2"
              className="hidden"
              aria-labelledby="accordion-color-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-gray-500">
                  Texto alternativo apenas para ilustrar
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-[#F0F4C3] hover:bg-[#F0F4C3] gap-3"
                data-accordion-target="#accordion-color-body-3"
                aria-expanded="false"
                aria-controls="accordion-color-body-3"
              >
                <span>COMO REALIZAR UMA VERIFICAÇÃO DE ESTOQUE?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-3"
              className="hidden"
              aria-labelledby="accordion-color-heading-3"
            >
              <div className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-gray-500">
                  Texto alternativo apenas para ilustrar
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-[#F0F4C3] hover:bg-[#F0F4C3] gap-3"
                data-accordion-target="#accordion-color-body-4"
                aria-expanded="false"
                aria-controls="accordion-color-body-4"
              >
                <span>COMO REGISTRAR UMA NOVA TAREFA?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-4"
              className="hidden"
              aria-labelledby="accordion-color-heading-4"
            >
              <div className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-gray-500">
                  Texto alternativo apenas para ilustrar
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-5">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-[#F0F4C3] hover:bg-[#F0F4C3] gap-3"
                data-accordion-target="#accordion-color-body-5"
                aria-expanded="false"
                aria-controls="accordion-color-body-5"
              >
                <span>COMO CADASTRAR UM NOVO USUÁRIO?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-5"
              className="hidden"
              aria-labelledby="accordion-color-heading-5"
            >
              <div className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-gray-500">
                  Texto alternativo apenas para ilustrar
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-6">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-[#F0F4C3] hover:bg-[#F0F4C3] gap-3"
                data-accordion-target="#accordion-color-body-6"
                aria-expanded="false"
                aria-controls="accordion-color-body-6"
              >
                <span>COMO EMITIR UM NOVO RELATÓRIO?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-6"
              className="hidden"
              aria-labelledby="accordion-color-heading-6"
            >
              <div className="p-5 border border-t-0 border-gray-200">
                <p className="mb-2 text-gray-500">
                  Texto alternativo apenas para ilustrar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato">
        <div>
          <div className="bg-[url('/assets/bg/3.png')] bg-center h-[450px] text-center text-white flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-10">
              ENTRE EM CONTATO AGORA
            </h1>
            <div className="flex justify-center items-center mt-10 space-x-8">
              <Link href="/">
                <img
                  src="/assets/icones/7.svg"
                  alt="icone de um telefone"
                  className="w-12 h-12 md:w-20 md:h-20 hover:scale-125 duration-500"
                />
              </Link>
              <Link href="/">
                <img
                  src="/assets/icones/8.svg"
                  alt="icone de um mensagem do tipo email"
                  className="w-12 h-12 mx-16 md:w-20 md:h-20 hover:scale-125 duration-500"
                />
              </Link>
              <Link href="/">
                <img
                  src="/assets/icones/9.svg"
                  alt="icone de um bate papo"
                  className="w-12 h-12 md:w-20 md:h-20 hover:scale-125 duration-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Form />

      <section id="sistemas" className="py-14">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[#333333] text-3xl md:text-5xl font-extralight mb-10">
            OU VEJA OS NOSSOS SISTEMAS PRONTOS
          </h1>
          <div className="mb-8 mx-[15%] flex flex-col justify-center items-center ">
            <div className="flex items-center gap-10">
              <img
                src="/assets/img/3.png"
                alt="Imagem de um computador"
                className="w-full md:w-1/2 "
              />
              <img
                src="/assets/img/13.png"
                alt="Vantagens do uso do sistema"
                className="w-full md:w-1/2"
              />
            </div>

            <div className="flex items-center gap-10">
              <img
                src="/assets/img/13.png"
                alt="Vantagens do uso do sistema"
                className="w-full md:w-1/2"
              />
              <img
                src="/assets/img/4.png"
                alt="Imagem de um computador"
                className="w-full md:w-1/2"
              />
            </div>

            <div className="flex items-center gap-10">
              <img
                src="/assets/img/5.png"
                alt="Imagem de um computador"
                className="w-full md:w-1/2"
              />
              <img
                src="/assets/img/13.png"
                alt="Vantagens do uso do sistema"
                className="w-full md:w-1/2"
              />
            </div>
          </div>

          <Link
            href=""
            className="bg-[#27AE60] text-white py-2 px-12 rounded-2xl inline-block"
          >
            VER TODOS
          </Link>
        </div>
      </section>
    </main>
  );
}
