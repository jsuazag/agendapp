import { Link } from "react-router-dom";
import { LinkWrapper } from "./styles";

export const LinkTo = ({url, text}) => (
    <LinkWrapper>
        <Link to={url}>{text}</Link>
    </LinkWrapper>
)
