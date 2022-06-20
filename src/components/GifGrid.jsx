import PropTypes from 'prop-types';

import { useFetchGifs } from "../hook/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ( {category} ) => {


    //////////////////// Resumido en un custom hook///////////////////

    // const [images, setImages] = useState([]);

    // // Simplifica el uso del async para no tener que meterlo como tal dentro del useeffect
    // const getImages = async() => {
    //     // Obtienes las images nuevas
    //     const newImages = await getGifs( category );
    //     // setea las imagenes nuevas
    //     setImages( newImages );
    // }; 

    // // Controla la ejecucion del metodo getImages, para evitar su sobre llamado
    // useEffect(() => {
    //     getImages();
    // }, [category]);

    ///////////////////////////////////////////////////////////////////

    // Custom Hook
    const { images, isLoading } = useFetchGifs( category );
    // console.log(isLoading);

    return (
        <>
            { isLoading && <h2>Cargando...</h2> }
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem
                            
                            key={ image.id }
                            // Recordar esta tecnica, es muy comoda
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )

}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
