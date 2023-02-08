import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import  Plan from "./plan.js"


import React, { Component } from 'react'

 class App extends Component {
  state={
    items:[],
    text:""
  }
  handlechange=e=>{
    this.setState({text:e.target.value})
  }
  handeladd=e=>{
    if(this.state.text!==""){
        const items=[...this.state.items,this.state.text];
        this.setState({items:items,text: ""})
    }
  }
  handeldelete=id=>{
    console.log("deleted"+id)
    const olditems=[...this.state.items]
    console.log("olditems"+olditems)
    const items=olditems.filter((element,i)=>{
      return  i!==id
    })
    this.setState({items:items})

  }
  render() {
    return (
      <div  className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2  className="text-center">Today's Plane</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" value={this.state.text} onChange={this.handlechange} placeholder="Write plane Here"className="form-control"/>
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-3 font-weight-bold" onClick={this.handeladd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul  className="list-unstyled row m3 ">
                    {
                      this.state.items.map((value,i)=>{
                        return   <Plan  key={i} value={value}  id={i} sendData={this.handeldelete}/>
                      })
                    }          
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