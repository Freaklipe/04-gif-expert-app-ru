import { useState } from 'react';


export const AddCategory = ( {/*setCategories, */ onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    // se encarga se recibir lo tipeado en el input, como extra tiene doble destructuracion
    const onIputChange = ( { target:{value} } ) => {
        // console.log(value);
        setInputValue( value );
    };

    // pasa el valor del input a las categorias
    const onSubmit = ( event ) => {
        // previene los auto refresh del formulario
        event.preventDefault();

        // limpieza del string ingresado
        const cleanInputValue = inputValue.trim();

        // valida que minimo exista  1 letra para input
        if ( cleanInputValue.length <= 0) return;

        // pasa el valor del input a las categorias
        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( cleanInputValue );

        // para limpiar el input
        setInputValue('');
    };

  return (
    <form onSubmit={ onSubmit } >
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onIputChange }
        />
    </form>
  )
}
