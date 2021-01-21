import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './Tasks.css';

import Header from './header.js';

function Tasks() {
  const [tasksData, setTasksData] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const deleteHandler = (e, id) => {
    var index = tasksData.findIndex(e => e.id === id);
    //copy array
    var newAray = tasksData.slice();
    //delete element by index
    newAray.splice(index, 1);
    setTasksData(newAray);
  }
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('Tasks'));
    if (item) {
      setTasksData(item)
    } else {
        console.log("no data")
    }
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var obj = { id: 5, task: taskName, to: taskDescription, status: false }
    setTasksData.push(obj);
  }
  return (
    <div>

      <Header />
      <div className="container">
        {tasksData !== "" && tasksData !== undefined && tasksData !== null ? tasksData.map((data) =>
          <div id="rowStyle" className="row">
            <div className="spanTask">{data.task} </div>
            <div className="divTaskTo">{data.to} </div>
            <div
              onClick={e => deleteHandler(e, data.id)}
              className="divSupprimeClick"
            >-Supprimer </div>
            {data.status === true ? <div className="divStatus" style={{ background: "#28a745" }}>complete </div> : <div style={{ background: "red" }} className="divStatus">Non completée</div>}
          </div>) : <div></div>}
        {/* {listItems} */}
        <div style={{marginTop:'30px'}}>
          <form onSubmit={handleSubmit}>
            <h3>Créer une nouvelle tâche</h3>
            <div style={{ display: "flex" }}>
              <div className="form-group">
                <label>Nom de la tâche</label>
                <input type="text"
                  onChange={e => setTaskName(e.target.value)}
                  value={taskName}
                  className="form-control" />
              </div>

              <div className="form-group">
                <label>Description de la tâche en une ligne</label>
                <input type="text"
                  onChange={e => setTaskDescription(e.target.value)}
                  value={taskDescription}
                  className="form-control"/>
              </div>

              <div style={{ paddingTop: "32px" }}> <button type="submit" className="btn btn-primary btn-block">Ajouter la tâche</button></div>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
