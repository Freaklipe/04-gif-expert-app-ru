
export const getGifs = async( category ) => {

    // Configuracion para la llamada a la API
    const api_key = 'EqFY58WMRDEZeR3cLf9vV7F8xLH1D5HS';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=${ limit }`;
    
    // Llamada a la API
    const resp = await fetch( url );
    // Tratando la data de interes de la API respuesta
    const { data } = await resp.json();
    const gifs = data.map( ({ id, title, images:{downsized_medium:{url}} }) => ( 
        {
            id,
            title,
            url
        } 
    ));

    // console.log( gifs );

    return gifs;
}