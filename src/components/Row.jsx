import React from 'react'

export default function row(props) {
  return (
    <>
        { props.filas.map((fila, i) => 
            <tr key={fila.titulo +i}>
                <td key={fila.titulo}>{fila.titulo}</td>
                <td key={fila.duracion}>{fila.duracion}</td>
                <td key={fila.rating}>{fila.rating}</td>
                <td key={fila.genero}>{fila.genero}</td>
                <td key={fila.premios}>{fila.premios}</td>
            </tr>
            )}
    </>
  )
}
