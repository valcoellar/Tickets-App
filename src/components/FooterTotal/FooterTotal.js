import styles from './FooterTotal.module.css';


export function FooterTotal() {

return (
<div>
{/* <h1>----------- FOOTER --------------</h1>*/}

<section id="Controles" className={styles.Controles}>
	{/**seccion de botones */}
	<button id="B_Cancelar" className={styles.B_Cancelar} type="button" onClick="Cancelar()">Cancelar</button>
	<button id="B_Generar" className={styles.B_Generar} type="button" onClick="Generar_Ticket()" >Generar</button>
	<label id="L_Total" className={styles.L_Total} for="Total">Total</label>
	<input id="Total" className={styles.Total} type="number" value="0" disabled />
    </section>

<hr></hr>
<p id="Footer_Line" className={styles.Footer}>Developed by Valentin Coellar S. /  www.gruponucleon.com 2018-2022</p>


</div>

)

}