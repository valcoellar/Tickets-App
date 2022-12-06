import styles from './Consecutivo.module.css';

export function Consecutivo () {

    return (
        
        <div className={styles.Header}>
    <label className={styles.L_Consecutivo} id="L_Consecutivo" for="Consecutivo">Consecutivo</label>
	<input className={styles.Consecutivo} type="number" id="Consecutivo" disabled value="0" />
    <h5 className={styles.Etiquetas}>
        <p>Cantidad</p>
        <p>Descripcion</p>
        <p>Precio Unitario</p>
        <p>SubTotal</p>
        
        </h5>
        </div>

)

}