import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import MainText from "./components/MainText";
import MainAbout from "./components/MainAbout";
import DetailPage from "./components/DetailPage";
import PoseModel from "./components/PoseModel";

function App() {
  return (
    <div
      className="App"
      // style={{ backgroundColor: "#222222", paddingBottom: "20px" }}
    >
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <MainText />
          <Routes>
            <Route path="/" element={<MainAbout />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/pose" element={<PoseModel />} />
          </Routes>
        </main>
        {/* <footer></footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
