import { Link } from "react-router-dom"
import { ItemWrapper, Label } from "./styles"

export const ItemMenu = ({label, icon: Icon, path, active}) => (
    <ItemWrapper active={active}>
        <Link to={path}>
            <Icon />
            <Label active={active}>{label}</Label>
        </Link>
    </ItemWrapper>
)
