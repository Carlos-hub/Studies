import React, { useState } from 'react';
import logo from './logo.svg';
import { Botao } from '../components/Butao';
import { Formulario } from '../components/formulario';
import { Lista } from '../components/Lista';
import style from './style.module.scss';
import { Cronometro } from '../components/cronometro';
import { ITarefas } from '../types/Itarefas';
function App() {
  const [tarefas,setTarefas] = useState<ITarefas[] | []>([])
  const [selecionado,setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada:ITarefas){
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true: false
      })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
      selecionado={selecionado}
      />
    </div>
  );
}

export default App;
