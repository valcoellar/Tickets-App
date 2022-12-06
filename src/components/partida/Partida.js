import styles from './Partida.module.css';


export function Partida() {

return (
<div>
{/** <h2>----------- una partida --------------</h2> */}


<section id="Captura">
	{/**seccion de campos de captura */}
	<div id="Campos_line" className={styles.Campos_line}>
<div>	
{/*	<label for="I_Cantidad">Cantidad</label> */}
			<input id="I_Cantidad" className={styles.I_Cantidad} type="number" />
</div>
<div>
 {/*	<label for="I_Descripcion">Descripcion</label> */}
			<input id="I_Descripcion" className={styles.I_Descripcion} type="text" maxlength="27" />
</div>
<div>
{/*	<label for="I_PrecioUnitario">PrecioUnitario</label>	*/}
			<input id="I_PrecioUnitario" className={styles.I_PrecioUnitario} type="number" />
</div>
<div>
{/*	<label for="I_Subtotal">Subtotal</label> */}			
		<input id="I_Subtotal" clasName={styles.I_Subtotal} type="number" value= "0" disabled />

 <button id="B_Ok" className={styles.Ok_Partida} type="button" onclick="Ok_Partida()">*</button>    
    
<button id="B_Agregar" className={styles.B_Agregar} type="button" onclick="Nueva_Partida()">+</button>
<button id="B_Eliminar" className={styles.B_Eliminar} type="button" onclick="Elimina_Partida()">-</button>


		
</div>

	</div>	

</section>





</div>

)

}