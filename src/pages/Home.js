import React from 'react';
import ExhibitsTable from './../containers/ExhibitsTable';
import AddFormContainer from './../containers/AddFormContainer';
import SearchFormContainer from './../containers/SearchFormContainer';
import FilterFormContainer from './../containers/FilterFormContainer';
import AddModalContainer from './../containers/AddModalContainer';

function Home() {
  return (
    <div>
      <h1 className="page-header">Экспонаты</h1>
      <AddModalContainer title="Добавление экспоната">
        <AddFormContainer/>
      </AddModalContainer>
      <SearchFormContainer />
      <FilterFormContainer />
      <ExhibitsTable />
    </div>
  )
}

export default Home;