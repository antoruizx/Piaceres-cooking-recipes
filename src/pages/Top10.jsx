import React from 'react'
import '../styles/Top10.css';

const Top10 = () => {
  return (
    <div>
      <h1>Top 10 mejores platos</h1>
    <table>
      <tr>
        <th><strong>Posición</strong></th>
        <th><strong>Nombre el plato</strong></th>
        <th><strong>Puntaje</strong></th>
      </tr>

      <tr>
        <td>1</td>
        <td>Milanesa de garbanzos</td>
        <td>9</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Milanesa de lentejas</td>
        <td>10</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Milanesa de soja texturizada</td>
        <td>8.5</td>
      </tr>

      <tr>
        <td>4</td>
        <td>Milanesa de berenjena</td>
        <td>9,5</td>
      </tr>

      <tr>
        <td>5</td>
        <td>Nuggets de soja texturizada</td>
        <td>9</td>
      </tr>

      <tr>
        <td>6</td>
        <td>Salchichas parrilleras de legumbres</td>
        <td>9,5</td>
      </tr>

      <tr>
        <td>7</td>
        <td>Queso de papa</td>
        <td>8</td>
      </tr>

      <tr>
        <td>8</td>
        <td>Queso de semillas de girasol</td>
        <td>10</td>
      </tr>

      <tr>
        <td>9</td>
        <td>Sorrentinos de calabaza, roquefort y nueces</td>
        <td>10</td>
      </tr>

      <tr>
        <td>10</td>
        <td>Tortelli de de ricota y espinaca</td>
        <td>9</td>
      </tr>
    </table>
    </div>

  )
}

export default Top10;