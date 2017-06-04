import React, {Component} from 'react';
import ExhibitsTable from './../containers/ExhibitsTable';
import AddFormContainer from './../containers/AddFormContainer';

function Home() {
  return (
    <div>
      <h1 className="page-header">Экспонаты</h1>
      <AddFormContainer/>
      <ExhibitsTable />
    </div>
  )
}

export default Home;