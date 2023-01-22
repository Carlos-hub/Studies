import style from './style.module.scss';
import { Item } from "./item";
import { ITarefas } from '../../types/Itarefas';

interface IProps{
 tarefas:ITarefas[];
 selecionaTarefa: (tarefaSelecionada:ITarefas)=>void
}

export function Lista({tarefas, selecionaTarefa}:IProps){
 return(
  <aside className="listaTarefas">
   <h2>Estudos do dia</h2>
   <ul>
    {
     tarefas.map((item) =>(
      <Item 
      selecionaTarefa={selecionaTarefa}
      {...item} 
      key={item.id}
      />
     ))
    }
    
   </ul>
  </aside>
 )
}