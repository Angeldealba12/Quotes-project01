import Data from './Quotes.json'
import Container from './Container';
import './main.css'

function App() {
  console.log(Data)
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
