import { useState } from "react";

export function Sobre() {
  const [aboutOption, setAboutOption] = useState("resumo");

  function handleAboutChanger(event: React.MouseEvent) {
    const targetOption = event.currentTarget.getAttribute("data-option") || "";
    setAboutOption(targetOption.toLowerCase());
  }

  return (
    <>
      <div className="about">
        <h2>Sobre mim</h2>
        <div className="about-decoration"></div>

        <div className="about-panel">
          <div
            className={`resume ${aboutOption === "resumo" ? "optionOn" : ""} `}
            data-option="resumo"
          >
            <p>
              Atuando como gestor de projetos e operações, adquiri experiência
              nacional e internacional com clientes da LATAM e dos EUA. Liderei
              projetos em diversas tecnologias, incluindo SAP, ServiceNow, RPA,
              OutSystems, Salesforce e modernização de aplicações, sempre com
              foco em eficiência e inovação. Minha atuação gerou economias da
              ordem de R$ 6 bilhões para clientes, além da gestão de contratos
              que ultrapassam R$ 100 milhões.
            </p>
            <p>
              Com mais de 8 anos de experiência em liderança, já tive a
              oportunidade de gerenciar equipes que somam mais de 300
              profissionais em projetos de diversos segmentos. Minha vivência
              como desenvolvedor e tech lead por quatro anos fortalece meu
              perfil técnico, proporcionando uma visão aprofundada dos desafios
              operacionais dos projetos.
            </p>
            <p>
              Ao longo da minha trajetória, desenvolvi sólida expertise em
              liderança de operações, gestão de equipes e projetos, além de
              relacionamento com clientes. Atuei diretamente em iniciativas
              variadas, desde e-commerces até automação de processos e soluções
              SaaS. Especialista em automação de processos, também possuo
              experiência em Pré-Sales, contribuindo para o fechamento de
              contratos de médio e grande porte. Minha tomada de decisão é
              orientada por dados e estatísticas, garantindo alinhamento
              estratégico e otimização de resultados.
            </p>
            <p>
              Além disso, atuo na formação de novos gestores e líderes,
              ministrando treinamentos para capacitação e desenvolvimento no
              mercado de trabalho.
            </p>
          </div>
          <div
            className={`results  ${
              aboutOption === "resultados" ? "optionOn" : ""
            } `}
            data-option="resultados"
          >
            <p>
              Implementação de E-Commerce em empresas, rentabilizando mais de R$
              2,4 milhões anuais.
            </p>
            <p>
              Gestão do contrato pioneiro da TCS com a Petrobras, em
              HiperAutomação.
            </p>
            <p>
              Gestor de case global de projeto onde economizou-se mais de R$
              5.78 bilhões de reais em cliente de óleo e gás, além de economizar
              mais de R$ 120 milhões de reais em apenas 3 semanas.
            </p>
            <p>Melhoria de margens financeiras na ordem de +400%.</p>
            <p>
              Redução de +2M de horas de trabalho com automações de processos,
              em clientes.
            </p>
          </div>
          <div
            className={`skills  ${aboutOption === "skills" ? "optionOn" : ""} `}
            data-option="skills"
          >
            <div className="skill">COE, ITIL & BPM</div>
            <div className="skill">Comunicação e Oratória</div>
            <div className="skill">Contratos</div>
            <div className="skill">Controle Financeiro</div>
            <div className="skill">Definição e Melhoria de Processos</div>
            <div className="skill">Estimativas, Metas e KPIs</div>
            <div className="skill">Estratégia Financeira</div>
            <div className="skill">Feedback 1-1</div>
            <div className="skill">Fluxo de Entrega</div>
            <div className="skill">Gestão de Conflitos</div>
            <div className="skill">Gestão e Liderança de Equipes</div>
            <div className="skill">Inteligência Emocional</div>
            <div className="skill">Melhoria Contínua</div>
            <div className="skill">MySQL, Python, Javascript & PHP</div>
            <div className="skill">Negociação com Clientes</div>
            <div className="skill">PMO, PDCA & SDLC</div>
            <div className="skill">Precificação e Orçamento</div>
            <div className="skill">Pré-VendasReports Financeiros</div>
            <div className="skill">SCRUM, KANBAN, LEAN, WATERFALL</div>
            <div className="skill">Transformação Digital</div>
            <div className="skill">Treinamentos e Mentorias</div>
            <div className="skill">Visão Tática de Relacionamento</div>
            <div className="skill">Produtividade</div>
          </div>
        </div>

        <div className="extra-details">
          <p>
            Tempo de mercado: <span>3 anos</span>
          </p>
          <p>
            Línguas: <span>Português e Inglês</span>
          </p>
          <p>
            Alcance: <span>Internacional</span>
          </p>
          <p>
            Idade: <span>32 anos</span>
          </p>
        </div>

        <div className="change-buttons">
          <div
            onClick={handleAboutChanger}
            className={`resume-btn change-btn ${
              aboutOption === "resumo" ? "activated" : ""
            }`}
            data-option="resumo"
          >
            <p>Resumo</p>
          </div>
          <div
            onClick={handleAboutChanger}
            className={`results-btn change-btn ${
              aboutOption === "resultados" ? "activated" : ""
            }`}
            data-option="resultados"
          >
            <p>Resultados</p>
          </div>
          <div
            onClick={handleAboutChanger}
            className={`skills-btn change-btn ${
              aboutOption === "skills" ? "activated" : ""
            }`}
            data-option="skills"
          >
            <p>Skills</p>
          </div>
        </div>
      </div>
    </>
  );
}
