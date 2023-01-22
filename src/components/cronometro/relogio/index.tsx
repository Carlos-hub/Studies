import style from './Relogio.module.scss';
interface IProps{
 tempo:number | undefined;
}

export function Relogio({tempo = 0}:IProps){
 const minutos = Math.floor(tempo/60);
 const segundo = tempo % 60;
 const [minutoDezena, minutoUnidade] = String(minutos)
 .padStart(2, '0');
 const [segundoDezena, segundoUnidade] = String(segundo)
 .padStart(2, '0');

 return(
  <>
  <span className={style.relogioNumero}>{minutoDezena}</span>
  <span className={style.relogioNumero}>{minutoUnidade}</span>
  <span className={style.relogioDivisao}>:</span>
  <span className={style.relogioNumero}>{segundoDezena}</span>
  <span className={style.relogioNumero}>{segundoUnidade}</span>
  </>
 )
}