import { ITarefas } from "../../../types/Itarefas";
import style from './item.module.scss';
interface IProps extends ITarefas{
  selecionaTarefa: (tarefaSelecionada:ITarefas) =>void
}

export function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id, 
    selecionaTarefa
  }:IProps){

 return(
  <li 
  className={`${style.item} ${selecionado ? style.itemSelecionado :''}`} onClick={() => selecionaTarefa({
    tarefa,
    tempo,
    selecionado,
    completado,
    id, 
  })}>
      <h3>
       {tarefa}
      </h3>
      <span>
        {tempo}
      </span>
     </li>
 )
}