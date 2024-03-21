export function BtnRunner({clase, nombre, apellido}) {
    return <div>
        <button className={clase} >{nombre} {apellido}</button>
    </div>
}