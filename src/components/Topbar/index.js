import { TopbarContainer, TopbarTitle } from "./styles";
import { FaAngleLeft } from "react-icons/fa";

export const Topbar = ({ isBackVisible = true, title, onPress }) => {
  return (
    <TopbarContainer>
      {isBackVisible && (
        <div onClick={onPress}>
          <FaAngleLeft />
        </div>
      )}
      <TopbarTitle>
        <h4>{title}</h4>
      </TopbarTitle>
    </TopbarContainer>
  );
};
