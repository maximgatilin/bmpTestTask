import React from 'react';
import ExhibitsTable from './../containers/ExhibitsTable';
import AddFormContainer from './../containers/AddFormContainer';
import SearchFormContainer from './../containers/SearchFormContainer';

function Home() {
  return (
    <div>
      <h1 className="page-header">Экспонаты</h1>
      <AddFormContainer/>
      <SearchFormContainer />
      <ExhibitsTable />
    </div>
  )
}

export default Home;