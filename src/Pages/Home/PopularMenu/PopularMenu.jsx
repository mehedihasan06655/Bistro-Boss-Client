import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then (data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');

    
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Popular Items"
                heading="From our menu"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 ">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;