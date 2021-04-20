import { FaHome, FaCalendar, FaCheckCircle, FaUser  } from "react-icons/fa";
import { ItemMenu } from "./components/ItemMenu";
import { MenuWraper } from "./styles";

const MenuOptions = [
  {
    icon: FaHome,
    label: "Home",
  },
  {
    icon: FaCalendar,
    label: "Schedule",
  },
  {
    icon: FaCheckCircle,
    label: "Create task",
  },
  {
    icon: FaUser,
    label: "Profile",
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
