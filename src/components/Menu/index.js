import { FaHome, FaCalendar, FaCheckCircle, FaUser  } from "react-icons/fa";
import { ItemMenu } from "./components/ItemMenu";
import { MenuWraper } from "./styles";

const MenuOptions = [
  {
    icon: FaHome,
    label: "Home",
    path: "/"
  },
  {
    icon: FaCalendar,
    label: "Schedule",
    path: "/schedule"
  },
  {
    icon: FaCheckCircle,
    label: "Create task",
    path: '/create'
  },
  {
    icon: FaUser,
    label: "Profile",
    path: '/profile'
  },
];

export const Menu = () => {
  return (
    <MenuWraper>
      {MenuOptions.map((item, i) => (
        <ItemMenu key={i} {...item} />
      ))}
    </MenuWraper>
  );
};
