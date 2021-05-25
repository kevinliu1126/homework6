import logo from './logo.svg';
import './App.css';
import DatePickerComponent from './DatePicker.js'

function App() {
  return (
    <div className="App">
      <div>
        {DatePickerComponent()}
      </div>
    </div>
  );
}

export default App;
