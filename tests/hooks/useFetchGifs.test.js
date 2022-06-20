import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hook/useFetchGifs";

describe('Pruebas en Custom Hook useFetchGifs', () => {  

    test('debe regresar el estado inical', () => {  
        
        const { result } = renderHook( () => useFetchGifs('spy family'));
        const { images, isLoading } = result.current; 
        // console.log(result);
        // console.log(images, isLoanding);

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('debe regresar array de images e isloading false', async() => {  
        
        const { result } = renderHook( () => useFetchGifs('spy family'));
        
        /*  genera el tiempo necesario para la espera de una respuesta,
            de no tener la respuesta en un seg, se genera un error. De 
            necesitar mas de 1 seg, se le configura como 2 parametro
        */
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );

        // con los valores procesados, se procede a evaluarlos y fin
        const { images, isLoading } = result.current; 

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});