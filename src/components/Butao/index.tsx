import React from 'react';
import './style.scss';

interface Iprops{
 texto:string;
 type:"button" | "submit" | "reset" | undefined;
 onClick?:() => void;
}

export function Botao ({texto,type, onClick}:Iprops){
  return(
   <button onClick={onClick} className='botao' type={type}>
   {texto}
   </button>
  )
}