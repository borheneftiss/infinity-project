import './App.css';
import { Switch, Route } from "react-router-dom";
import authentication from './auth';
import tasks from './tasks';

function App() {
  return (
    <Switch>
      <div>
        <Route path="/login" component={authentication} />
        <Route path="/tasks" component={tasks} />
      </div>
    </Switch>
  );
}

export default App;
