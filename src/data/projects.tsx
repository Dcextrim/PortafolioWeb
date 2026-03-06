import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiNumpy,
  SiOpengl,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  csharp: {
    title: "Csharp",
    bg: "black",
    fg: "white",
    icon: <SiCsharp />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  dockerCompose: {
    title: "Docker Compose",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  opengl: {
    title: "OpenGL",
    bg: "black",
    fg: "white",
    icon: <SiOpengl />,
  },
  pygame: {
    title: "Pygame",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },

};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "calculadora",
    category: "Web Development",
    title: "Calculadora",
    src: "/assets/projects-screenshots/calculadora/CalculadoraWeb.png",
    screenshots: ["CalculadoraWeb.png"],
    skills: {
      frontend: [ 
        PROJECT_SKILLS.react, 
        PROJECT_SKILLS.ts, 
        PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.js],
    },
    live: "https://calicheoficial.lat/231177/Proyecto_1/dist/",
    github: "https://github.com/Dcextrim/Proyecto1Web.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Calculadora React - Proyecto de Componentes y Testing
          </TypographyP>
          <TypographyP className="font-mono">
            Este proyecto es una calculadora web desarrollada como ejercicio para
            practicar diseño de componentes, testing y buenas prácticas de linting.
            Implementada enteramente con botones HTML y un display de resultados,
            esta calculadora respeta reglas específicas para simular escenarios reales
            de validación y pruebas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Objetivos</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Practicar diseño de aplicaciones en base a componentes.</li>
            <li>Reforzar habilidades de testing automatizado.</li>
            <li>Mejorar la calidad del código mediante reglas de linting.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Requerimientos funcionales</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Pantalla (display) y teclado numérico con botones HTML.</li>
            <li>Todo input proviene de los botones, sin usar teclado.</li>
            <li>El display muestra números secuenciales o resultados según la operación.</li>
            <li>Operaciones: suma, resta, multiplicación, división, módulo.</li>
            <li>Botón de igual para mostrar el resultado.</li>
            <li>Soporte para punto decimal y botón +/-.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Reglas del display</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Máximo 9 caracteres visibles en pantalla.</li>
            <li>No se muestran números negativos (se muestra ERROR).</li>
            <li>No se muestran resultados mayores a 999999999 (se muestra ERROR).</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Evaluación</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>(20 pts) Diseño de interfaz.</li>
            <li>(25 pts) Por tests automatizados no triviales.</li>
            <li>(25 pts) Por historias en Storybook.</li>
            <li>(10 pts) Código conforme a JavaScript Standard (sin punto y coma, líneas &lt; 120).</li>
            <li>(5 pts) Punto decimal funcional.</li>
            <li>(10 pts) Operación de división.</li>
            <li>(5 pts) Operación de módulo.</li>
            <li>(5 pts) Botón +/-.</li>
            <li>(10 pts) Uso de un custom hook para la lógica.</li>
            <li>(20 pts) Cada componente con menos de 20 líneas.</li>
            <li>(5 pts) Title y favicon personalizados.</li>
            <li>(5 pts) Uso de TypeScript.</li>
            <li>(5 pts) Uso de package manager distinto de npm (ej. bun o deno).</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Vista Previa</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/calculadora/CalculadoraWeb.png`,
              `${BASE_PATH}/calculadora/CalculadoraWeb2.png`,
            ]}
          />
        </div>
      );
    },
  },
  

  {
    id: "space invaders",
    category: "Game Development",
    title: "Space Invaders",
    src: "/assets/projects-screenshots/spaceinvaders/menu.png",
    screenshots: ["menu.png"],
    skills: {
      frontend: [ 
        PROJECT_SKILLS.cplusplus],
      backend: [
        PROJECT_SKILLS.cplusplus],
    },
    live: "",
    github: "https://github.com/lin231135/Proyecto03-SpaceInvaders.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Space Invaders Concurrente con Pthreads
          </TypographyP>
          <TypographyP className="font-mono">
            Proyecto académico del curso CC3086 – Programación de Microprocesadores, donde se implementa una versión del juego clásico Space Invaders usando C++ y hilos POSIX (Pthreads). El enfoque principal es la sincronización, paralelismo y control concurrente de múltiples entidades dentro del juego.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Objetivos</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Identificar oportunidades de paralelización en un videojuego clásico.</li>
            <li>Usar hilos, mutexes, condicionales y semáforos en un entorno de juego.</li>
            <li>Aplicar programación concurrente para controlar la lógica del jugador, invasores y disparos.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Requisitos funcionales</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Controlar la nave del jugador (modo jugador o automático).</li>
            <li>Movimiento descendente sincronizado de invasores representados por hilos.</li>
            <li>Disparos del jugador e invasores gestionados con hilos independientes.</li>
            <li>Mostrar en consola en tiempo real la posición de la nave, invasores y disparos usando ASCII-Art.</li>
            <li>Mostrar puntaje acumulado al eliminar invasores.</li>
            <li>Permitir reinicio del juego o salida al terminar una partida.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Sincronización y Concurrencia</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Uso de al menos 4 hilos: uno para el jugador, uno para los disparos, y múltiples para invasores.</li>
            <li>Empleo de mecanismos como <b>mutexes</b> y <b>semáforos</b> para sincronizar movimientos y accesos compartidos.</li>
            <li>Sincronización entre eventos de disparo, colisión e impresión en pantalla.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Modos de Juego</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>1 Jugador vs Invasores: el jugador usa el teclado para mover su nave y disparar.</li>
            <li>Computadora vs Invasores: el programa controla automáticamente la nave.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Extras y Dificultad</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>La velocidad de los invasores y disparos es configurable, permitiendo ajustes de dificultad.</li>
            <li>Implementación de puntuación y condiciones de victoria/derrota.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Vista Previa</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/spaceinvaders/menu.png`,
              `${BASE_PATH}/spaceinvaders/menu2.png`,
              `${BASE_PATH}/spaceinvaders/difficult.png`,
              `${BASE_PATH}/spaceinvaders/game.png`,
            ]}
          />
        </div>
      );
    },
  },


  {
    id: "renta-vehiculos",
    category: "Fullstack Web App",
    title: "Sistema de Renta de Vehículos",
    src: "/assets/projects-screenshots/gestionvehiculos/clientes.png",
    screenshots: ["clientes.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "",
    github: "https://github.com/Tunchxz/Proyecto-4-CC3088",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sistema de Gestión y Reportería para Renta de Vehículos
          </TypographyP>
          <TypographyP className="font-mono">
            Proyecto final del curso Bases de Datos 1 (CC3088), Universidad del Valle de Guatemala.
            Esta aplicación fullstack permite la administración de clientes, vehículos y reservas, así como la generación de reportes avanzados. Se implementó utilizando FastAPI, React y PostgreSQL con ORM SQLAlchemy y validaciones en backend y frontend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Características Técnicas</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>15+ tablas normalizadas hasta 3FN</li>
            <li>Relaciones 1:N y N:M con uso de tablas de cruce</li>
            <li>3 tipos de datos personalizados y triggers SQL</li>
            <li>CRUD completo para Clientes, Vehículos y Reservas</li>
            <li>Validaciones con Pydantic y restricciones SQL</li>
            <li>3 vistas SQL + 3 reportes exportables a CSV</li>
            <li>Base de datos con más de 1000 registros</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Reportes Avanzados</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Reporte de Reservas: filtra por cliente, fecha, tipo, estado</li>
            <li>Reporte de Mantenimientos: filtra por tipo, proveedor, costo</li>
            <li>Reporte de Ingresos por Contrato: filtra por monto, estado y período</li>
            <li>Todos los reportes exportables a CSV</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tecnologías Usadas</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li><strong>Frontend:</strong> React, Vite, JavaScript, Material UI</li>
            <li><strong>Backend:</strong> FastAPI, SQLAlchemy, PostgreSQL, Docker</li>
            <li><strong>DevOps:</strong> Docker Compose para orquestación de contenedores</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Capturas de Pantalla</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/gestionvehiculos/clientes.png`,
              `${BASE_PATH}/gestionvehiculos/reservas.png`,
              `${BASE_PATH}/gestionvehiculos/vehiculos.png`,
              `${BASE_PATH}/gestionvehiculos/reportereservas.png`,
              `${BASE_PATH}/gestionvehiculos/reportemantenimientos.png`,
              `${BASE_PATH}/gestionvehiculos/reporteingreso.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Colaboradores</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Cristian Túnchez (231359)</li>
            <li>Dulce Ambrosio (231143)</li>
            <li>Daniel Chet (231177)</li>
            <li>Javier Linares (231135)</li>
            <li>Gadiel Ocaña (231270)</li>
          </ul>
        </div>
      );
    },
  },


  {
    id: "opengl-diorama",
    category: "Computer Graphics",
    title: "Diorama OpenGL: Bowser en Mario's House",
    src: "/assets/projects-screenshots/opengl-diorama/preview.png",
    screenshots: ["preview.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opengl,
        PROJECT_SKILLS.pygame,
      ],
      backend: [
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.python,
      ],
    },
    live: "",
    github: "https://github.com/Dcextrim/CC2018-OpenGl",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Diorama OpenGL: Bowser en Mario&apos;s House
          </TypographyP>
          <TypographyP className="font-mono">
            Diorama 3D interactivo que presenta una escena de Super Mario 64 con
            múltiples modelos, shaders únicos por modelo, sistema de cámara avanzado,
            menú de pausa con efectos especiales y música dinámica. Bowser se ha
            infiltrado en la casa de Mario, acompañado de un POW Block, MIPS el conejo
            y el icónico logo de Nintendo 64.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Características Principales</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>5 modelos 3D con materiales y texturas individuales</li>
            <li>Shaders únicos asignados a cada modelo (activables/desactivables)</li>
            <li>Sistema de cámara dual: Modo Orbital y Modo Libre (FPS)</li>
            <li>Menú de pausa interactivo con blur DOF, logo N64 rotando y fantasmas Boo</li>
            <li>Música dinámica que cambia entre modo normal y pausa</li>
            <li>Skybox con environment map</li>
            <li>Sistema de iluminación ajustable (ambiental y puntual)</li>
            <li>Post-procesamiento en tiempo real</li>
            <li>Arquitectura modular con 7 módulos separados</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Modelos y Shaders</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li><strong>Mario&apos;s House</strong> — Base Shader: texturizado con iluminación Lambertiana</li>
            <li><strong>Bowser</strong> — ASCII Art Shader: estilización procedural a caracteres ASCII</li>
            <li><strong>POW Block</strong> — Hologram Shader: efecto holográfico con scanlines animadas</li>
            <li><strong>MIPS (Conejo)</strong> — Assembling Shader: efecto de ensamblaje/construcción animado</li>
            <li><strong>N64 Logo &amp; Boos</strong> — Dissolve Shader: disolución con ruido procedural y bordes brillantes</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Sistema de Pausa</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Presiona ESC para activar el menú de pausa</li>
            <li>Blur DOF: efecto de desenfoque por profundidad en toda la escena</li>
            <li>Logo N64 aparece rotando en el centro de la pantalla</li>
            <li>4 fantasmas Boo aparecen flotando con animación sinusoidal</li>
            <li>Transición automática de música entre modo normal y pausa</li>
            <li>Shader dissolve opcional en los Boos (Tecla 1)</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Controles Principales</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li><strong>ESC</strong> — Menú de pausa</li>
            <li><strong>ESPACIO</strong> — Cambiar enfoque entre modelos</li>
            <li><strong>C</strong> — Alternar Modo Orbital / Modo Libre</li>
            <li><strong>Flechas</strong> — Rotar/orbitar cámara</li>
            <li><strong>R / T</strong> — Zoom in/out</li>
            <li><strong>7-0</strong> — Seleccionar modelo</li>
            <li><strong>TAB</strong> — Cambiar efecto de post-procesamiento</li>
            <li><strong>2</strong> — Toggle shaders personalizados ON/OFF</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tecnologías</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li><strong>Lenguaje:</strong> Python 3.13</li>
            <li><strong>Gráficos:</strong> OpenGL (PyOpenGL), GLSL Shaders</li>
            <li><strong>Motor:</strong> Pygame para ventana y audio</li>
            <li><strong>Matemáticas:</strong> NumPy, PyGLM</li>
            <li><strong>Texturas:</strong> Pillow (PIL)</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Video Demostrativo</TypographyH3>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden my-4">
            <video
              className="w-full h-full rounded-lg"
              src="/assets/projects-screenshots/opengl-diorama/Proyecto3OpenGl_Hecho_con_Clipchamp_3_1_1_1_1_1.mp4"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      );
    },
  },


  {
    id: "ema",
    category: "Fullstack Web App",
    title: "EMA - Ellie's Music Academy",
    src: "/assets/projects-screenshots/ema/homepage.png",
    screenshots: ["homepage.png", "Loginpage.png", "AboutUspage.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            EMA - Sistema de Gestión Académica Musical
          </TypographyP>
          <TypographyP className="font-mono">
            Sistema integral de gestión académica para Ellie&apos;s Music Academy,
            una academia musical que ofrece clases grupales de estimulación musical
            para niños de 2 a 5 años, clases individuales de piano y canto tanto en
            sede física como a domicilio, con disponibilidad en español e inglés.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Problema</TypographyH3>
          <TypographyP className="font-mono">
            La academia enfrentaba limitaciones por la gestión manual de inscripciones,
            programación de clases y control de pagos. Esto provocaba conflictos en la
            asignación de horarios, pérdida de cupos por falta de pagos oportunos e
            ineficiencias en la organización de clases a domicilio.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Solución</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Plataforma digital que centraliza y automatiza inscripciones, pagos, horarios y reservas</li>
            <li>Calendario académico en tiempo real para estudiantes, padres y maestros</li>
            <li>Notificaciones y recordatorios automáticos</li>
            <li>Reportes dinámicos para la administración</li>
            <li>Planificación de rutas para profesores a domicilio</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Funcionalidades Clave</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li>Gestión de inscripciones y matrículas</li>
            <li>Control de pagos con validación de cupos</li>
            <li>Programación de clases sin conflictos de horarios</li>
            <li>Coordinación de clases a domicilio y en sede</li>
            <li>Comunicación ágil entre estudiantes, padres y maestros</li>
            <li>Reportes y estadísticas de la academia</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tecnologías</TypographyH3>
          <ul className="font-mono list-disc pl-5">
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Backend:</strong> Node.js, JavaScript</li>
            <li><strong>Contenedores:</strong> Docker</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Capturas de Pantalla</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/ema/homepage.png`,
              `${BASE_PATH}/ema/Loginpage.png`,
              `${BASE_PATH}/ema/AboutUspage.png`,
            ]}
          />
        </div>
      );
    },
  },

];
export default projects;
