import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainAbout from "./components/MainAbout";
import DetailPage from "./components/DetailPage"; // DetailPage 컴포넌트 임포트

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainAbout />} />
            <Route path="/detail/:id" element={<DetailPage />} /> {/* 세부 페이지 경로 추가 */}
          </Routes>
        </main>
        {/* <footer></footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
