import React, { Component } from 'react';
import exhibits from './data/exhibits.json'

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {exhibits: exhibits};
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="container">
        <table className="table">
         <caption>Экспонаты</caption>
          <thead>
            <tr>
              <th>Название</th>
              <th>Место создания</th>
              <th>Организация</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            { this.state.exhibits.map((exhibit, index) =>
              <tr key={index}>
                <td>{exhibit.name}</td>
                <td>{exhibit.city}, {exhibit.country}</td>
                <td>{exhibit.organization}</td> 
                <td>{exhibit.description || "Описание отсутствует"}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
