import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';

export class SettingsPanel extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        todos: [
            {
                id: 1,
                task: 'Pick up kids from school',
                isCompleted: false
            },
            {
                id: 2,
                task: 'Prepare for presentation',
                isCompleted: true
            },
            {
                id: 3,
                task: 'Print Statements',
                isCompleted: false
            },
            {
                id: 4,
                task: 'Create invoice',
                isCompleted: false
            },
            {
                id: 5,
                task: 'Call John',
                isCompleted: true
            },
            {
                id: 6,
                task: 'Meeting with Alisa',
                isCompleted: false
            }
        ],
        inputValue: '',
    }

    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
}

statusChangedHandler(event, id) {
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
}

addTodo (event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        task: this.state.inputValue,
        isCompleted: false
        
    })

    this.setState({
        todos: todos,
        inputValue: ''
    })
}

removeTodo (index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
        todos: todos
    })
}

inputChangeHandler(event) {
    this.setState({
        inputValue: event.target.value
    });
}

  closeRightSidebar() {
    document.querySelector('.right-sidebar').classList.remove('open');
    //alert("abc")
  }

  render() {
    return (
      <div>
        {/* <div id="settings-trigger"><i className="mdi mdi-settings"></i></div> */}
        <div id="right-sidebar" className="settings-panel right-sidebar">
          <i className="settings-close mdi mdi-close"  onClick={this.closeRightSidebar}></i>
          <Tabs defaultActiveKey="TODOLIST" className="bg-primary" id="uncontrolled-tab-example">
            <Tab eventKey="TODOLIST" title="TO DO LIST" className="test-tab">
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="px-3">
                      <div>
                        <h4 className="card-title">Todo List</h4>
                        <form  className="add-items d-flex" onSubmit={this.addTodo}>
                          <input 
                            type="text" 
                            className="form-control h-auto" 
                            placeholder="What do you need to do today?" 
                            value={this.state.inputValue} 
                            onChange={this.inputChangeHandler}
                            required />
                          <button type="submit" className="btn btn-primary font-weight-bold">Add</button>
                        </form>
                        <div className="list-wrapper">
                          <ul className="d-flex flex-column todo-list">
                            {this.state.todos.map((todo, index) =>{
                              return <ListItem 
                              isCompleted={todo.isCompleted}
                              changed={(event) => this.statusChangedHandler(event, index)}
                              key={todo.id}
                              remove={() => this.removeTodo(index) }
                              >{todo.task}</ListItem>
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="events py-4 border-bottom px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="mdi mdi-circle-outline text-primary mr-2"></i>
                    <span>Feb 11 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Creating component page</p>
                  <p className="text-gray mb-0">build a js based app</p>
                </div>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="mdi mdi-circle-outline text-primary mr-2"></i>
                    <span>Feb 7 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                  <p className="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="CHATS" title="CHATS">
              <div>
                <div className="d-flex align-items-center justify-content-between border-bottom">
                  <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">FRIENDS</p>
                  <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                </div>
                <ul className="chat-list">
                  <li className="list active">
                    <div className="profile"><img src={ require("../../assets/images/faces/face1.jpg")} alt="profile" /><span className="online"></span></div>
                    <div className="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">19 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src={ require("../../assets/images/faces/face2.jpg")} alt="profile" /><span className="offline"></span></div>
                    <div className="info">
                      <div className="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                    <small className="text-muted my-auto">23 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src={ require("../../assets/images/faces/face3.jpg")} alt="profile" /><span className="online"></span></div>
                    <div className="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">14 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src={ require("../../assets/images/faces/face4.jpg")} alt="profile" /><span className="offline"></span></div>
                    <div className="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small className="text-muted my-auto">2 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src={ require("../../assets/images/faces/face5.jpg")} alt="profile" /><span className="online"></span></div>
                    <div className="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">5 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src={ require("../../assets/images/faces/face6.jpg")} alt="profile" /><span className="online"></span></div>
                    <div className="info">
                      <p>Sarah Graves</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">47 min</small>
                  </li>
                </ul>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}
const ListItem = (props) => {
    
  return (
      <li className={(props.isCompleted ? 'completed' : null)}>
          <div className="form-check">
              <label htmlFor="" className="form-check-label"> 
                  <input className="checkbox" type="checkbox" 
                      checked={props.isCompleted} 
                      onChange={props.changed} 
                      /> {props.children} <i className="input-helper"></i>
              </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
      </li>
  )
};

export default SettingsPanel
