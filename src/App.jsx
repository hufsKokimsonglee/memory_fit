import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header></header> */}
        <main>
          <Routes>
            <Route />
          </Routes>
        </main>
        {/* <footer></footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
