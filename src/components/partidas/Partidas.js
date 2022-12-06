import styles from './partidas.module.css';
import { Partida } from '../partida/Partida'

export function Partidas() {

return (
<div id="Partidas">
       {/* <h1>Partidas  -- agregar componentes Partida</h1>
       las partidas se auto-desplazan hacia abajo
       */}
        <Partida />
        <Partida />
        <Partida />
        

</div>


)




}