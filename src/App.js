import './App.css';
import Task1HelloReact from './task1';
import Person from './task2';
import Town from './task3';
function App() {
  return (
    <>
      <div className="task">Task1</div>
      <Task1HelloReact></Task1HelloReact>
      <div className="task">Task2</div>
      <Person></Person>
      <div className="task">Task3</div>
      <Town></Town>
    </>
  );
}

export default App;
