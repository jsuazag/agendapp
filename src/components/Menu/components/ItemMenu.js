import { ItemWrapper, Label } from "./styles"

export const ItemMenu = ({label, icon: Icon}) => (
    <ItemWrapper>
        <Icon />
        <Label>{label}</Label>
    </ItemWrapper>
)
