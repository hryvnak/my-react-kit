import './App.css';
import Button from './components/Button/Button';

const showAlert = () => alert('Шо по русні');
const showAlert2 = () => alert('Русні пизда');

function App() {
  return (
    <div className="App">
      <Button onClick={ showAlert } type="button" autofocus  variant="contained" size="small" buttonText="Button" />
    </div>
  );
}

export default App;
