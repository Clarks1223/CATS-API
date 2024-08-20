import './App.css';
//hooks importados\
import { useCatFact } from './Hooks/UseCatFact';
import { useCatImage } from './Hooks/UseCatimage';

function App() {
  //estados
  const { fact, refreshFact } = useCatFact();
  //devuelve la imagen, utilizando el fact
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <>
      <h1>Prueba Tecninca</h1>
      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          className="img"
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </>
  );
}

export default App;
