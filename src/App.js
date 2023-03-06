import './styles/app.css';
import InputBox from './components/InputBox';
import TodoScreen from './components/TodoScreen';

function App() {
  return (
    <div className="app">
      <InputBox />
      <TodoScreen />
    </div>
  );
}

export default App;
