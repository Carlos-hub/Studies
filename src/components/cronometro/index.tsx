import { Botao } from "../Butao";
import { Relogio } from "./relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/Itarefas";
import { useEffect, useState } from "react";

interface IProps{
 selecionado: ITarefas | undefined;
}

export function Cronometro({selecionado}:IProps){
 console.log("conversão:", tempoParaSegundos('01:01:01'))
 const [tempo,setTempo] = useState<number>();
 useEffect(() =>{
  if(selecionado?.tempo){
   setTempo(tempoParaSegundos(selecionado.tempo))
  }
 },[selecionado])
 return(
  <div className={style.cronometro}>
   <p className={style.titulo}>Escolhe um card e inicie o cronometro</p>
   <div className={style.relogioWrapper}>
    <Relogio
    tempo={tempo}
    />
   </div>
   <Botao type="button" texto="Inicia"/>
  </div>
 )
}