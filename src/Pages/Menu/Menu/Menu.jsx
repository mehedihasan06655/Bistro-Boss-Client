import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            
            <Cover
                img= {menuImg}
                title= "our menu"
            />
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"/>
            {/* offered menu items */}
            <MenuCategory items={offered}/>
            {/* dessert menu items */}
            <MenuCategory items= {dessert} title= "dessert" coverImg={dessertImg} />
            <MenuCategory  items= {salad} title= "salad" coverImg={saladImg} />
            <MenuCategory items= {soup} title= "soup" coverImg={soupImg} />
            <MenuCategory items= {pizza} title= "pizza" coverImg={pizzaImg} />

        </div>
    );
};

export default Menu;