import React from 'react';
import Register from '../../components/modal';

function Dashboard() {

const botaoAcionado = () =>{
  return(
    <Register></Register>
  );
};

  return(
    <body class="bg-transparent">
     <table class="table table-hover">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Usuário
            </th>
            <th>
              Número
            </th>
            <th>
              E-mail
            </th>
            <th>
              Data e Hora
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              26
            </th>
            <td>
              mark zuckerberg
            </td>
            <td>
              +55(84) 98756-0404
            </td>
            <td>
              testeemail@gmail.com
            </td>
            <td>
              30/01/2022 ás 18:47
            </td>
          </tr>

          <tr>
            <th scope="row">
              74
            </th>
            <td>
              Jeffrey Preston
            </td>
            <td>
              +55(51) 97499-2455
            </td>
            <td>
              adminhacker@hotmail.com
            </td>
            <td>
              31/12/2021 ás 21:59
            </td>
          </tr>

          <tr>
            <th scope="row">
              32
            </th>
            <td>
              Elon Reeve Musk
            </td>
            <td>
              +55(79) 98442-1965
            </td>
            <td>
              ceoteslabrasil@gmail.com
            </td>
            <td>
              05/01/2022 ás 12:20
            </td>
          </tr>

          <tr>
            <th scope="row">
              251
            </th>
            <td>
              Alexandre Tadeu da Costa
            </td>
            <td>
              +55(85) 99231-1877
            </td>
            <td>
              cacaushowbrasil@outlook.com
            </td>
            <td>
              27/08/2021 ás 15:44
            </td>
          </tr>

          <tr>
            <th scope="row">
              18
            </th>
            <td>
              Alan Ferreira Pereira
            </td>
            <td>
              +55(81) 92962-1901
            </td>
            <td>
              alanzokastreemer@gmail.com
            </td>
            <td>
              18/04/2021 ás 13:39
            </td>
          </tr>
        </tbody>
      </table>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-success" onClick={()=>botaoAcionado()}>Adicionar</button>
          <button type="button" class="btn btn-warning">Editar</button>
          <button type="button" class="btn btn-danger">Deletar</button>
        </div>
    </body>
  );
}

export default Dashboard;