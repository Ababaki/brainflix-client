import './App.scss';
import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Upload from './pages/UploadPage/Upload';
import Home from "./pages/HomePage/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home   />}/>
            <Route path='/videos/:id' element={<Home  />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
