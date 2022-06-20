import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => {  

    test('debe de retornar un arreglo de gifs', async() => {  

        const gifst = await getGifs('Spy Family');
        // console.log(gifst);
        // Evalua que exista un arry con elementos
        expect( gifst.length ).toBeGreaterThan( 0 );
        // En segundo lugar valida que la estructura del {} sea la necesaria
        expect( gifst[0] ).toEqual( {
            id   : expect.any( String ),
            title: expect.any( String ),
            url  : expect.any( String )
        } );
    });
});