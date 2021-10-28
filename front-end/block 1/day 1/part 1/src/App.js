import './App.css';

const Task = (value) => <li>{value}</li>;

function App() {
  const fruitList = ['Banana', 'Orange', 'Apple', 'Mango'];
  return (
    <div className="App">
      <header className="App-header">
        <ol>{fruitList.map((fruit) => Task(fruit))}</ol>
      </header>
    </div>
  );
}

export default App;
