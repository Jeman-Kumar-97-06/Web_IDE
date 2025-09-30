import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import HomePage from "./components/HomePage"
import AuthPage from "./components/AuthPage"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path='/auth' element={<AuthPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
