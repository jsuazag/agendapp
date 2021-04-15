import { FaHome } from 'react-icons/fa';
import { ItemMenu } from './components/ItemMenu';

const MenuOptions = [
    {
        icon: <FaHome />,
        label: 'Home'
    },
    {
        icon: <FaHome />,
        label: 'Home'
    },
    {
        icon: <FaHome />,
        label: 'Home'
    },
    {
        icon: <FaHome />,
        label: 'Home'
    }
];

export const Menu = () => {

    return (
        <section>
            {
                MenuOptions.map((item, i) => <ItemMenu key={i} {...item} /> )
            }
        </section>
    )
}
