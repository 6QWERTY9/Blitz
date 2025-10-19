import { PropertyCard } from "../entities/PropertyCard";


function App() {
    return (
            <PropertyCard img="./property_img/property1.webp" title="Апартаменты в «башне ОКО»" lotNumber={4536} price={'25 600 000'} pricePerSquareMeter="365 714" square={62} storey={52}/>
    );
}

export default App;
