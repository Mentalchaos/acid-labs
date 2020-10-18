import React from 'react';
import Logo from './components/Logo';
import UserTable from './components/UserTable';
import Search from './components/Search';
import PageLimits from './components/PageLimits';
import data from './mockData.json';
import './css/all.css';

const  App = () => (
  <div className="App">
    <Logo />
    <Search />
    <UserTable data={data}/>
    <PageLimits />
    <p>Aqui deberia estar la mejor pagina de la vida, pero no lo esta porque aun no he avanzado en nada XD</p>
    <p>Pero la configuracion inicial esta lista :D</p>
  </div>
);

App.displayName = "App";

export default App;
