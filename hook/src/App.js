import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import ReactTodo from './components/Todo';
import DatePickerComp from './components/DatePicker';
import PostInfo from './components/postData';
import Searchpage from './hookPrcaticeweb/Searchpage';

function App() {
  return (
    <div className="App">
    {/* <Counter/> */}
<ReactTodo/>
<PostInfo/>
{/* <DatePickerComp/> */}
<Searchpage/>
    </div>
  );
}

export default App;
