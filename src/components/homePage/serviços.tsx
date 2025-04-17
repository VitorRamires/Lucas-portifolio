import serviceImg from "@/assets/images/serviços-bg.png";

export function Services() {
  return (
    <>
      <section className="services">
        <div className="service-wrapper">
          <img src={serviceImg} alt="" />
          <div className="services-box">
            <div className="title-services">
              <h2>Serviços Prestados</h2>
            </div>
            <div className="services-listed">
              <div className="service">
                <p>
                  Gerenciamento de Projetos e Delivery (SCRUM, Waterfall, Lean &
                  Smart)
                </p>
              </div>
              <div className="service">
                <p>Inserção de Metas e Indicadores (OKR & KPI)</p>
              </div>
              <div className="service">
                <p>
                  Mentorias e Treinamentos para Comunicação, Negociação e
                  Liderança
                </p>
              </div>
              <div className="service">
                <p>Mapeamento e Melhoria de Processos</p>
              </div>
              <div className="service">
                <p>Precificação e Elaboração Produtos</p>
              </div>
              <div className="service">
                <p>Inserção de Metas e Indicadores (OKR & KPI)</p>
              </div>
              <div className="service">
                <p>Transformação Digital</p>
              </div>
              <div className="service">
                <p>Automação de Fluxos de Trabalho (RPA)</p>
              </div>
              <div className="service">
                <p>Trabalho voluntario de recolocação de mercado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-decoration"></div>
      </section>
    </>
  );
}
