// Importações das imlogo

import apple from "@/assets/icons/apple.svg";
import arcelormittal from "@/assets/icons/arcelor.svg";
import petrobras from "@/assets/icons/petrobras.svg";

import eua from "@/assets/icons/us.svg";
import brasil from "@/assets/icons/br.svg";

import { technologies } from "./technologies";

const techsData = technologies.reduce((acc, tech) => {
  acc[tech.name] = tech.url;
  return acc;
}, {} as { [key: string]: string });

export const projectsInfos = [
  {
    projeto: "Apple",
    descricaoCliente: "projectsInfo.description.aboutClient.1",
    descricaoProjeto: "projectsInfo.description.aboutProject.1",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.2",
    ],
    extras: ["OutSystems", "EUA", "projectsInfo.extras.3"],
    logo: apple,
    techs: [techsData.outsystem],
    id: 2,
    pais: eua,
  },
  {
    projeto: "ArcelorMittal",
    descricaoCliente: "projectsInfo.description.aboutClient.2",
    extras: ["RPA", "Brasil", "projectsInfo.extras.4"],
    logo: arcelormittal,
    id: 3,
    pais: brasil,
    segmentos: {
      rpa: {
        nome: "RPA",
        descricaoProjeto: "projectsInfo.description.aboutProject.2",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.3",
          "projectsInfo.objectives.tags.4",
          "projectsInfo.objectives.tags.5",
        ],
        techs: [techsData.automation, techsData.office],
      },

      IA: {
        nome: "IA",
        descricaoProjeto: "projectsInfo.description.aboutProject.18",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.2",
          "projectsInfo.objectives.tags.18",
          "projectsInfo.objectives.tags.19",
        ],
        techs: [techsData.IA, techsData.excel, techsData.office, techsData.sap],
      },

      data: {
        nome: "Data",
        descricaoProjeto: "projectsInfo.description.aboutProject.17",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.14",
          "projectsInfo.objectives.tags.15",
          "projectsInfo.objectives.tags.16",
          "projectsInfo.objectives.tags.17",
        ],
        techs: [
          techsData.data,
          techsData.sap,
          techsData.excel,
          techsData.devops,
          techsData.powerbi,
        ],
      },

      fullstack: {
        nome: "Fullstack",
        descricaoProjeto: "projectsInfo.description.aboutProject.19",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.14",
          "projectsInfo.objectives.tags.15",
        ],
        techs: [
          techsData.devops,
          techsData.excel,
          techsData.python,
          techsData.java,
        ],
      },
    },
  },

  {
    projeto: "Petrobras",
    descricaoCliente: "projectsInfo.description.aboutClient.10",
    id: 11,
    pais: brasil,
    extras: ["RPA / Outsystem", "Brasil", "projectsInfo.extras.0"],
    logo: petrobras,
    segmentos: {
      rpa: {
        nome: "RPA",
        descricaoProjeto: "projectsInfo.description.aboutProject.10",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.3",
          "projectsInfo.objectives.tags.4",
          "projectsInfo.objectives.tags.5",
        ],
        techs: [techsData.automation, techsData.uipath, techsData.sap],
      },
      outsystem: {
        nome: "Outsystem",
        descricaoProjeto: "projectsInfo.description.aboutProject.11",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.13",
        ],
        techs: [
          techsData.automation,
          techsData.sap,
          techsData.office,
          techsData.citrix,
        ],
      },
    },
  },
];
