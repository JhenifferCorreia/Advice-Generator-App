import Card from './components/Card';
import './App.css';

function Center({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Center>
        <Card />
      </Center>
    </div>
  );
}

export default App;
