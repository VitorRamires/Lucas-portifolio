import { Card } from "./card";

export function BannerCards() {
  const cardsData = [
    {
      title: `Crescimento`,
      description: `O crescimento do time em um projeto é fundamental para garantir a evolução 
      contínua da equipe e a entrega de melhores resultados. Investir no desenvolvimento dos 
      profissionais aumenta a produtividade, melhora a qualidade das entregas e fortalece o 
      engajamento, reduzindo a rotatividade. Além disso, um time em constante aprendizado se 
      adapta melhor a desafios, impulsiona a inovação e contribui diretamente para o sucesso e 
      a sustentabilidade do projeto.`,
    },
    {
      title: `Qualidade`,
      description: `A qualidade de entrega em um projeto é essencial para garantir 
      a satisfação do cliente, a confiabilidade do produto e a sustentabilidade do negócio. 
      Entregas com alto padrão reduzem retrabalho, minimizam custos com correções e fortalecem 
      a reputação da equipe. Além disso, um compromisso com a qualidade aumenta a eficiência 
      operacional, melhora a usabilidade e assegura a aderência aos requisitos, contribuindo 
      diretamente para o sucesso do projeto.`,
    },
    {
      title: `Planejamento`,
      description: `Um planejamento bem desenhado é essencial para o sucesso de um projeto, 
      garantindo que prazos e qualidade sejam cumpridos de forma eficiente. Ações 
      planejadas permitem a redução de riscos, evitando desperdícios e otimizando recursos, 
      além de assegurar que as entregas atendam às expectativas do cliente. Além disso, fortalece 
      a equipe, aumenta a previsibilidade e melhora a credibilidade do projeto, impulsionando 
      resultados sustentáveis e de alto impacto.`,
    },
  ];

  return (
    <>
      <div className="center">
        <div className="banner-cards">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
