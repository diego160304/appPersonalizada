import "./App.css";
import miLogo from "./assets/img/BIBLIA.png";

function App() {
  return (
    <>
      <div>
        <img src={miLogo} alt="Logo de React" />
        <h1>¡¡¡Un tesoro escondido!!!</h1>

        <div className="h-100 p-5 text-bg-dark rounded-3">
         
          <h2>Mateo 13:44</h2>
          <div className="row justify-content-center">
          <div className="col-6 ">
          <p>“El Reino de los cielos se parece a un tesoro escondido en un campo.
          El que lo encuentra lo vuelve a esconder, y lleno de alegría, va y
          vende cuanto tiene y compra aquel campo”.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
