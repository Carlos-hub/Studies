import React from 'react';
import './style.scss';

interface Iprops{
 texto:string;
 type:"button" | "submit" | "reset" | undefined;
}

export function Botao ({texto,type}:Iprops){
  return(
   <button className='botao' type={type}>
   {texto}
   </button>
  )
}