import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainImg from "./components/MainImg";
import MainAbout from "./components/MainAbout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header></header> */}
        <main>
          <MainImg />
          <MainAbout />
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
