import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Pruebas en GiftItem', () => {  

    const title = 'One Piece';
    const url   = 'https://one-piece.com/onepiece.jpg'

    test('debe ser igual al snapshot', () => {  

        const { container } = render( <GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('should debe de mostar la imagen con el URL y al ALT indicado', () => {  

        render( <GifItem title={ title } url={ url } />);
        // asi se puede ver como se esta viendo el componente
        // screen.debug();
        // Evalua que la url (propiedades) de la img (elemento) sea la misma que se esta mandando en esta prueba
        // expect( screen.getByRole('img').src ).toBe( url );
        // forma optima de preguntar, cuando has mas de 1 propiedad
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe se mostrar el titulo en el componente', () => {  
        render( <GifItem title={ title } url={ url } />);
        // BUsca que exista el titulo dentro del html
        expect( screen.getByText( title) ).toBeTruthy();
    });
});