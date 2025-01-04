import './App.css';
import ListTasks from './Components/ListTasks';
import TitleImage from './Components/Title';
import AddNewTask from './Components/AddTask';
import SearchTask from './Components/SearchTasks';
import CheckAndDeleteAll from './Components/CheckAndDeleteAll';

function App() {
  const styleAll = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  const style2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div style={styleAll}>
      <TitleImage/>
      <div style={style2}>
        <SearchTask/>
        <CheckAndDeleteAll/>
        <AddNewTask/>
      </div>
      <ListTasks/>
    </div>
  );
}

export default App;
