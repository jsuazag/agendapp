import { Link } from "react-router-dom"
import { ItemWrapper, Label } from "./styles"

export const ItemMenu = ({label, icon: Icon, path}) => (
    <ItemWrapper>
        <Link to={path}>
            <Icon />
            <Label>{label}</Label>
        </Link>
    </ItemWrapper>
)
