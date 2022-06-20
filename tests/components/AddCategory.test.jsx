import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {

    const inputValue    = 'Spy Family';
    // hace un monk osea simulacion de una funcion
    const onNewCategory = jest.fn();

    test('dede de cambiar el valor de la caja de texto (prueba en el input) ', () => {  

        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        /* 
            Firevent se encarga de hacer acciones html y las pone a funcionar
            para el ejem se desingan a input html y se le entrega el valor de
            inputValue, definida mas arriba 
        */
        fireEvent.input( input, { target: { value: inputValue }} );
        expect( input.value ).toBe( inputValue );

        // screen.debug();
    });

    test('debe llamar onNewCategory si el input tiene valor', () => {  

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // ejecuta el input y le da valor
        fireEvent.input( input, { target: { value: inputValue }} );
        // ejecuta el submit asociado al form
        fireEvent.submit( form );
        // al final de submit se limpia el input, asi que lo evaluamos
        expect( input.value ).toBe( '' );

        // evalua que se llame la funcion onNewCategory que esta presente dentro del submit y es prop del componente
        expect( onNewCategory ).toHaveBeenCalled();
        // evalua el numero de veces es llamada segun el codigo
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // esta fun recibe el valor de la caja de texto a nivel de codigo, es por ello que se 
        // evalua que este presente en ella
        // ojo todo esto fue evaluar que se llamara y se le pasara el valor, ya que la funcion de la misma
        // se realiza en otro componente
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        screen.debug();
    });

    test('no debe llamar onNewCategory si el input no tiene valor', () => {
        /* este comportamiento ocurre cuando el input esta vacio, por ende
        no existe razon para generar el llamado */

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');

        // ejecuta el submit asociado al form
        fireEvent.submit( form );

        // evalua que se llame la funcion onNewCategory que esta presente dentro del submit y es prop del componente
        expect( onNewCategory ).not.toHaveBeenCalled();
        // screen.debug();
    });
});