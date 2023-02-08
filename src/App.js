import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div  className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-8 mx-auto text-white shadow-lg p-3">
            <h2  className="text-center">Today's Plane</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" placeholder="Write plane Here"className="form-control"/>
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-3 font-weight-bold">Add</button>
              </div>
              <div className="container-fluid">
                <ul  className="list_unstyled row m4">
                    <li>Client Meeting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;