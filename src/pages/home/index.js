import React from 'react';
import Dashboard from '../dashboard';

/* Criação da pagina principal */
function Home(){
  return(
    <html lang='pt-BR'>
      <header id="menuDoSite">
        <spam class="logo">Agenda Telefonica</spam>
        <input class="pesquisa" type="search" ></input>
      </header>   
        <Dashboard></Dashboard>
      <footer id="finalDoSite">
        <spam>Criado por: Marcus Vinicius</spam>  
      </footer>

    </html>
  );
}

export default Home;