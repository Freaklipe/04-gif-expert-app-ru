import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simplifica el uso del async para no tener que meterlo como tal dentro del useeffect
    const getImages = async() => {
        // Obtienes las images nuevas
        const newImages = await getGifs( category );
        // setea las imagenes nuevas
        setImages( newImages );
        // Manejo del is loanding que es mas que nada visual
        setIsLoading(false);
    }; 

    // Controla la ejecucion del metodo getImages, para evitar su sobre llamado
    useEffect(() => {
        getImages();
    }, [category]);

    return {
        images,
        isLoading
    }
}
