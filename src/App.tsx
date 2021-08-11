import Header from './components/Header';
import Scores from './components/Scores';
import fetchCards from './API';
import './styles/App.css';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Scores />
        <div className="cardContainer">
          <img
            src="https://storage.googleapis.com/ygoprodeck.com/pics/1861630.jpg"
            alt="Yu-Gi-Oh Card"
          />
        </div>
      </main>
    </>
  );
}

export default App;
