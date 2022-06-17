import { useState } from 'react';

import { AddCategory, GifGrid } from './components';
import './styles/styles.css';


export const GifEXpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => { 
    // valida si existe y no lo ingresa, la validacion es completa en lower case, para evitar el case sensitibe
    const catLower = categories.map(cat => cat.toLowerCase());
    const newCatLower = newCategory.toLowerCase();
    if( catLower.includes( newCatLower )) return;

    setCategories( [ newCategory, ...categories ] );
    // console.log(newCategory);
    // setCategories( cat => [ newCategory, ...cat ] );
  };

  return (
    <>
        {/* titulo */}
        <h1>@_@ Gif EXpert App *_*</h1>

        {/* input */}
        <AddCategory 
          // setCategories={ setCategories }
          // la implementacion de abajo es mejor, ya que hace llegar el valor y evita complicar las cosas
          onNewCategory={ onAddCategory }
        />

        {/* Listado de gif */}
        
        { 
          categories.map( category =>
            <GifGrid 
              category={ category }
              key={ category } 
            />
          )
        }
        {/* gif item */}

    </>
  );
};
