import React from "react";
import { Botao } from "../Butao";
import './style.scss';
import { ITarefas } from "../../types/Itarefas";
import { v4 as uuidv4} from 'uuid';

export class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>}>{
 state = {
  tarefa:"",
  tempo:"00:00"
 }
 adicionarTarefa(event:React.FormEvent){
  event.preventDefault()
   this.props.setTarefas((tarefasAntigas) => 
   [
    ...tarefasAntigas, 
    {
     ...this.state,
     selecionado:false,
     completado:false,
     id:uuidv4()
    }
   ]
    )
   this.setState({
    tarefa:"",
    tempo: "00:00:00"
   })
 }
 render(){
  return(
   <form onSubmit={this.adicionarTarefa.bind(this)} className="novaTarefa">
    <div className="inputContainer">
     <label htmlFor="tarefa">Adicione um novo estudo</label>
     <input type="text" name="tarefa" id="tarefa"
     placeholder="O que vocẽ quer estudar?"
     value={this.state.tarefa}
    onChange={(event)=>this.setState({...this.state, tarefa:event.target.value})}
     required
     />
    </div>
    <div className="inputContainer">
    <label htmlFor="time">Tempo</label>
    <input type="time" name="time" id="time" step="1"
    min="00:00:00"
    max="01:30:00"
    value={this.state.tempo}
    onChange={(event)=>this.setState({...this.state, tempo:event.target.value})}
    required
    />
    </div>
    <Botao type="submit" texto="Adicionar"
    />
   </form>
  )
 }
}