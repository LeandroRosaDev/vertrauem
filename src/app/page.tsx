import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section id="introducao">
        <div>
          <div className="bg-[#27AE60]">
            <h1>ESTEJA PREPARADO PARA O FUTURO</h1>
            <img src="/assets/img/1.png" alt="Imagem de um computador" />
          </div>
          <div className="h-72 bg-[url('/assets/bg/2.png')]"></div>
        </div>
      </section>
      <section id="vantagens" className="bg-[#F0F4C3]">
        <div>
          <h1 className="text-[#545454] text-5xl font-extralight mt-14">
            DESCUBRA O PODER DOS NOSSOS SISTEMAS
          </h1>
          <div>
            <div>
              <img src="/assets/icones/1.svg" className="w-24" alt="Icone" />
              <h1>CONTROLE FINANCEIRO</h1>
              <p>
                Gerencie suas finanças com facilidade. Automatize processos,
                acompanhe receitas e despesas, e obtenha relatórios detalhados.
                Simplifique sua contabilidade e foque no crescimento do seu
                negócio.
              </p>
            </div>
            <div>
              <img src="/assets/icones/2.svg" className="w-24" alt="Icone" />
              <h1>GESTÃO DE ATENDIMENTO</h1>
              <p>
                Melhore o atendimento ao cliente. Organize e acompanhe
                interações em um só lugar, respondendo rapidamente e aumentando
                a satisfação do cliente com um serviço ágil e personalizado.
              </p>
            </div>
            <div>
              <img src="/assets/icones/3.svg" className="w-24" alt="Icone" />
              <h1>GESTÃO DE TAREFAS</h1>
              <p>
                Mantenha sua equipe produtiva. Crie, atribua e acompanhe tarefas
                de forma eficiente. Priorize atividades e colabore em tempo real
                para garantir o cumprimento dos prazos.
              </p>
            </div>
            <div>
              <img src="/assets/icones/4.svg" className="w-24" alt="Icone" />
              <h1>CONTROLE DE ESTOQUE</h1>
              <p>
                Monitore seu estoque em tempo real. Receba alertas de reposição
                e evite rupturas. Garanta uma gestão precisa e reduza custos
                operacionais com nosso sistema.
              </p>
            </div>
            <div>
              <img src="/assets/icones/5.svg" className="w-24" alt="Icone" />
              <h1>MANUTENÇÃO PROGRAMADA</h1>
              <p>
                Planeje e acompanhe manutenções preventivas. Prolongue a vida
                útil dos seus equipamentos e reduza custos de reparo, garantindo
                a continuidade das operações.
              </p>
            </div>
            <div>
              <img src="/assets/icones/6.svg" className="w-24" alt="Icone" />
              <h1>EMISSÃO DE RELATÓRIOS</h1>
              <p>
                Gere relatórios detalhados e personalizados. Acesse dados
                precisos para tomar decisões informadas e planejar estratégias
                eficazes. Transforme dados em insights valiosos com facilidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Inteligencia Artificial" className="bg-[#27AE60]">
        <div>
          <img src="/assets/img/6.png" alt="imagem de uma rede neural" />
          <div>
            <h1>
              O PODER DAS INTELIGÊNCIAS ARTIFICIAIS ALIADAS COM TECNOLOGIA DE
              PONTA
            </h1>
            <Link href="">saiba mais</Link>
          </div>
        </div>
      </section>
      <section
        id="sistemas overview"
        className="h-full bg-[url('/assets/bg/2.png')]"
      >
        <div>
          <div>
            <img src="/assets/img/2.png" alt="Imagem de um celular" />
            <img src="/assets/img/10.png" alt="Vantagens" />
          </div>
          <div>
            <img src="/assets/img/3.png" alt="Imagem de um celular" />
            <img src="/assets/img/11.png" alt="Vantagens" />
          </div>
        </div>
      </section>
      <section id="comentarios" className="bg-[#F0F4C3]">
        <div>
          <h1>
            Faça como os chespiritos e tenha acesso ao melhor sistema do
            mercado!
          </h1>
          <div>
            <img
              src="/assets/img/9.png"
              alt="Imagem de um comentario de um cliente"
            />
            <img
              src="/assets/img/8.png"
              alt="Imagem de um comentario de um cliente"
            />
            <img
              src="/assets/img/7.png"
              alt="Imagem de um comentario de um cliente"
            />
          </div>
          <Link href="">SAIBA MAIS</Link>
        </div>
      </section>
      <section id="numeros">
        <div>
          <h1>O FUTURO CHEGOU PARA FICAR.</h1>
          <div>
            <div>
              <h1>+11k</h1>
              <p>USUÁRIOS CONECTADOS</p>
            </div>
            <div>
              <h1>+130k</h1>
              <p>NOTAS EMITIDAS</p>
            </div>
            <div>
              <h1>+110</h1>
              <p>CIDADES PRESENTES</p>
            </div>
            <div>
              <h1>+13M</h1>
              <p>DOCUMENTOS GERENCIADOS</p>
            </div>
          </div>
        </div>
      </section>
      <section id="perguntas frequentes">
        <h1>PERGUNTAS FREQUENTES</h1>
        <div>
          <div>
            <h1>QUAIS OS BENEFÍCIOS DOS SISTEMAS ALTUORI</h1>
            <p>Texto alternativo apenas para ilustrar</p>
          </div>
          <div>
            <h1>QUAIS OS BENEFÍCIOS DOS SISTEMAS ALTUORI</h1>
            <p>Texto alternativo apenas para ilustrar</p>
          </div>
          <div>
            <h1>QUAIS OS BENEFÍCIOS DOS SISTEMAS ALTUORI</h1>
            <p>Texto alternativo apenas para ilustrar</p>
          </div>
          <div>
            <h1>QUAIS OS BENEFÍCIOS DOS SISTEMAS ALTUORI</h1>
            <p>Texto alternativo apenas para ilustrar</p>
          </div>
          <div>
            <h1>QUAIS OS BENEFÍCIOS DOS SISTEMAS ALTUORI</h1>
            <p>Texto alternativo apenas para ilustrar</p>
          </div>
          <div>
            <h1>QUAIS OS BENEFÍCIOS DOS SISTEMAS ALTUORI</h1>
            <p>Texto alternativo apenas para ilustrar</p>
          </div>
        </div>
      </section>
      <section id="contato">
        <div>
          <div className="bg-[url('/assets/bg/3.png')]">
            <h1>ENTRE EM CONTATO AGORA</h1>
            <div>
              <img src="/assets/icones/7.svg" alt="icone de um telefone" />
              <img
                src="/assets/icones/8.svg"
                alt="icone de um mensagem do tipo email"
              />
              <img src="/assets/icones/9.svg" alt="icone de um bate papo" />
            </div>
          </div>
          <div>
            <h1>PRECISA DE UM SISTEMA SOB MEDIDA</h1>
            <form action="">
              <div>
                <div>
                  <label htmlFor="">Nome</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Telefone</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Segmento</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Empresa</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Conte-nos a sua necessidade</label>
                  <textarea />
                </div>
              </div>
              <button type="submit">ENVIAR</button>
            </form>
          </div>
        </div>
      </section>
      <section id="sistemas">
        <div>
          <h1>OU VEJA OS NOSSOS SISTEMAS PRONTOS</h1>
          <div>
            <div>
              <img src="/assets/img/3.png" alt="Imagem de um computador" />
              <img src="/assets/img/13.png" alt="Vantagens do uso do sistema" />
            </div>
            <div>
              <img src="/assets/img/4.png" alt="Imagem de um computador" />
              <img src="/assets/img/13.png" alt="Vantagens do uso do sistema" />
            </div>
            <div>
              <img src="/assets/img/5.png" alt="Imagem de um computador" />
              <img src="/assets/img/13.png" alt="Vantagens do uso do sistema" />
            </div>
          </div>
          <Link href="">VER TODOS</Link>
        </div>
      </section>
    </main>
  );
}
