import { Taks } from "../../components/Task";

const Tasks = [
  {
    name: "Web design",
    responsable: "Luis",
    timeLeft: 2,
    status: 1,
  },
  {
    name: "Hacer revisión",
    responsable: "Maria",
    timeLeft: 4,
    status: 1,
  },
  {
    name: "Hacer estilos",
    responsable: "Martin",
    timeLeft: 6,
    status: 3,
  },
  {
    name: "Conectar con api",
    responsable: "Luisa",
    timeLeft: 12,
    status: 2,
  },
  {
    name: "Conectar servicio web",
    responsable: "Jose",
    timeLeft: 4,
    status: 4,
  }
];

export const Home = () => (
  <>
    <h3>Home</h3>
    <div>
      {Tasks.map((item, key) => (
        <Taks key={key} {...item} />
      ))}
    </div>
  </>
);
