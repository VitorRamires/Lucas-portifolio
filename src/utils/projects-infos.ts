// Importações das imlogo
import americanexpress from "@/assets/icons/AEX.svg";
import apple from "@/assets/icons/apple.svg";
import arcelormittal from "@/assets/icons/arcelor.svg";
import autoliv from "@/assets/icons/autoliv.svg";
import avery from "@/assets/icons/avery.svg";
import exlon from "@/assets/icons/exlon.svg";
import fairisaac from "@/assets/icons/fair.svg";
import frontier from "@/assets/icons/frontier.svg";
import boticario from "@/assets/icons/boticario.svg";
import nextera from "@/assets/icons/NEE.svg";
import petrobras from "@/assets/icons/petrobras.svg";
import roche from "@/assets/icons/roche.svg";
import selective from "@/assets/icons/selectivelogo.svg";
import siteimprove from "@/assets/icons/siteimprove.svg";
import triptri from "@/assets/icons/triptri-placeholder.svg";
import yara from "@/assets/icons/yara.svg";

import eua from "@/assets/icons/us.svg";
import brasil from "@/assets/icons/br.svg";
import { technologies } from "./technologies";

const techsData = technologies.reduce((acc, tech) => {
  acc[tech.name] = tech.url;
  return acc;
}, {} as { [key: string]: string });

export const allProjects = [
  { projeto: "American Express", logo: americanexpress },
  { projeto: "Apple", logo: apple },
  { projeto: "Autoliv", logo: autoliv },
  { projeto: "Avery Dennison", logo: avery },
  { projeto: "Exelon", logo: exlon },
  { projeto: "Fair Isaac", logo: fairisaac },
  { projeto: "Frontier", logo: frontier },
  { projeto: "Grupo Boticário", logo: boticario },
  { projeto: "NextEra", logo: nextera },
  { projeto: "Petrobras", logo: petrobras },
  { projeto: "Roche", logo: roche },
  { projeto: "Selective", logo: selective },
  { projeto: "Site Improve", logo: siteimprove },
  { projeto: "Trip Tri", logo: triptri },
  { projeto: "Yara Internacional", logo: yara },
];

export const projectsInfos = [
  {
    projeto: "Apple",
    descricaoCliente: "projectsInfo.description.aboutClient.0",
    objetivo: "projectsInfo.objectives.objectivesText.0",
    execucao: "projectsInfo.description.execucao.0",
    desafio: "projectsInfo.description.desafio.0",
    resultados: "projectsInfo.description.resultados.0",
    extras: ["OutSystems", "EUA", "projectsInfo.extras.3"],
    logo: apple,
    techs: [
      techsData.outsystem,
      techsData.sap,
      techsData.office,
      techsData.excel,
      techsData.jira,
      techsData.msproject,
    ],
    id: 2,
    pais: eua,
  },

  {
    projeto: "Petrobras",
    descricaoCliente: "projectsInfo.description.aboutClient.2",
    objetivo: "projectsInfo.objectives.objectivesText.2",
    execucao: "projectsInfo.description.execucao.2",
    desafio: "projectsInfo.description.desafio.2",
    resultados: "projectsInfo.description.resultados.2",
    id: 11,
    pais: brasil,
    extras: ["RPA / Outsystem", "Brasil", "projectsInfo.extras.0"],
    logo: petrobras,
    techs: [
      techsData.outsystem,
      techsData.sap,
      techsData.office,
      techsData.excel,
      techsData.jira,
      techsData.msproject,
      techsData.automation,
      techsData.oracle,
      techsData.trello,
      techsData.IA,
      techsData.python,
      techsData.powerapps,
    ],
  },

  {
    projeto: "ArcelorMittal",
    descricaoCliente: "projectsInfo.description.aboutClient.1",

    objetivo: "projectsInfo.objectives.objectivesText.1",
    execucao: "projectsInfo.description.execucao.1",
    desafio: "projectsInfo.description.desafio.1",
    resultados: "projectsInfo.description.resultados.1",
    extras: ["RPA", "Brasil", "projectsInfo.extras.4"],
    logo: arcelormittal,
    techs: [
      techsData.outsystem,
      techsData.sap,
      techsData.office,
      techsData.excel,
      techsData.jira,
      techsData.msproject,
      techsData.automation,
      techsData.trello,
      techsData.python,
      techsData.uipath,
      techsData.servicenow,
      techsData.devops,
      techsData.powerbi,
      techsData.fullstack,
      techsData.ux,
      techsData.infra,
      techsData.powerapps,
    ],

    id: 3,
    pais: brasil,
  },
];
