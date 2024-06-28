import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header/>
        </header>
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
