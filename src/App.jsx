import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import MainImg from "./components/MainImg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header/>
        </header>
        <main>
          <MainImg />
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
