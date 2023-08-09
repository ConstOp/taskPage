import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile"
import Error from "./components/Error/Error"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  )
}

export default App
