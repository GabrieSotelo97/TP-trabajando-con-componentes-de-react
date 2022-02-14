import "./Table.css"
import Row from "./Row"

export default function table() {

    const fila =[
        {
            titulo:"Billy Elliot",
            duracion: 123,
            rating:5,
            genero:["drama, ", "comedia"],
            premios:2
        },
        {
            titulo:"Alicia en el país de las maravillas",
            duracion: 142,
            rating:4.8,
            genero:["drama, ","accion, ", "comedia"],
            premios:3
        }
    ]


  return (
    <table className="tatle table-dark">
        <tbody>
        <tr className="MiTr">
            <th> Titulo </th>
            <th> Duración </th>
            <th> Rating </th>
            <th> Generos </th>
            <th> Premios </th>
        </tr>
        <Row filas={fila}/>
        <tr className="MiTr">
            <th> Titulo </th>
            <th> Duración </th>
            <th> Rating </th>
            <th> Generos </th>
            <th> Premios </th>
        </tr>
        </tbody>
    </table>
  )
}
