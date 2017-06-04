import React, {Component} from 'react';
import ExhibitsTable from './../containers/ExhibitsTable';
import AddForm from './AddForm';


class Main extends Component {
  render() {

    return (
      <div>
        <h1 className="page-header">Экспонаты</h1>
        <AddForm onSubmit={this.props.addExhibit}/>
        <ExhibitsTable />
      </div>
    )
  }
}

export default Main;