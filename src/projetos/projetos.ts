import gitHub from "./img/git-hub.png"
import nlwSpace from "./img/nlw-spaceTime.png"
import geradorConselho from "./img/geradorConselho.png"
import pokedex from "./img/pokedex.png"
import todo from "./img/todo.png"
import steam from "./img/SteamStore.png"

export const projetos = [
  {
    name: "Steam Store",
    img: steam,
    text: "Projeto desenvolvido com TypeScript e React. Esta aplicação consiste em uma página de e-commerce que apresenta uma lista de jogos disponíveis na loja, incluindo um sistema de carrinho, formulário de envio do produto e uma página de confirmação.",
    technologies: ["ReactJS", "TypeScript", "Styled-components", "React-modal", "Radix-ui", "React form + Zod"],
    linkSite: "https://games-store-navy.vercel.app/",
    linkGitHub: "https://github.com/SamueLVitor1/Games-Store?tab=readme-ov-file"
  },
  {
    name: "Todo",
    img: todo,
    text: "Todo é o primeiro desafio da trilha de ReactJS do Ignite, para realizar esse desafio usamos de vários conceitos importantes aprendidos do ReactJS durante as aulas, conceitos de estados, imutabilidade do estado, listas e chaves no ReactJS, propriedades, componentização entre outros.",
    technologies: ["ReactJS", "Vite", "Styled components", "Phosphoricons"],
    linkSite: "https://todo-coral-three.vercel.app/",
    linkGitHub: "https://github.com/SamueLVitor1/Todo"
  },

  {
    name: "Pokedex",
    img: pokedex,
    text: "Este projeto faz parte do curso DevQuest e tem como objetivo simular um teste técnico, fornecendo demandas e requisitos a serem implementados durante a codificação.",
    technologies: ["ReactJS", "Styled-Components", "react-router-dom"],
    linkSite: "https://quest-pokedex.vercel.app/",
    linkGitHub: "https://github.com/SamueLVitor1/quest-POKEDEX"
  },

  {
    name: "Github Busca",
    img: gitHub,
    text: "Buscador de perfil do github trazendo informações públicas do usúario atráves da api do github, permitindo uma busca dinâmica e em tempo real.",
    technologies: ["HTML", "CSS", "JavaScript"],
    linkSite: "https://samuelvitor1.github.io/Quest-GitHub-API/",
    linkGitHub: "https://github.com/SamueLVitor1/Quest-GitHub-API"
  },

  {
    name: "Gerador de Conselho",
    img: geradorConselho,
    text: "Gerador de conselho faz parte de um desafio do frontend mentor, com a utilização de uma api pública de conselho para fazer as requisições",
    technologies: ["HTML", "CSS", "JavaScript"],
    linkSite: "https://samuelvitor1.github.io/Projetos-Desafios-LandingPages/Gerador-de-Conselhos/index.html",
    linkGitHub: "https://github.com/SamueLVitor1/Projetos-Desafios-LandingPages/tree/main/Gerador-de-Conselhos"
  },

  {
    name: "NLW-spacetime",
    img: nlwSpace,
    text: "Projeto feito durante a semana NLW-spacetime da rocketseat onde aprendi mais sobre conceitos de html, css, git e um pouco de figma também. Durante as aulas fui fazendo juntamente com o professor e no final modifiquei o tema para uma Cápsula do tempo dos meus jogos favoritos!",
    technologies: ["HTML", "CSS"],
    linkSite: "https://samuelvitor1.github.io/NLW-spacetime/",
    linkGitHub: "https://github.com/SamueLVitor1/NLW-spacetime"
  }
]