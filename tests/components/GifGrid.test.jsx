import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hook/useFetchGifs';

// Esto se usa para poder emular la funcion y trabajarla con valor definidos, como se ve mas abajo
jest.mock('../../src/hook/useFetchGifs');

describe('Pruebas en GifGrid', () => {  


    const category = 'Spy Family';
    const loading = 'Cargando...';

    test('debe mostrar isLoading inicialmente', () => { 

        // dado que se emulo, es obligatorio dar valores, sino sera indefinido. Esta prueba puede ser sola
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category} />);
        expect( screen.getByText( loading ));
        expect( screen.getByText( category ));
        // screen.debug();
    });

    test('debe de mostrar items cuando se cargan las images useFetchGifs', () => {

        // creacion y asigancion de valores
        const gifs = [
            {
                id: 'abc',
                title: 'spy family',
                url: 'https://spyfamily.com'
            },
            {
                id: 'abca',
                title: 'hunter x',
                url: 'https://hunterx.com'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        // renderizado con los valores
        render( <GifGrid category={category} />);
        // validacion que vengan los valores a nivel de cantidad, ya que lo sabemos
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);

        // screen.debug();

    });
});