import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Welcome} from "./Pages/Dynamic/dynamicpath.js";
import { Navbar } from "./Components/Dynamic/DynamicComp.js";
function App() {
  return (
    <main className="w-full min-h-screen bg-[#0F0F0F] bg-galaxy bg-no-repeat bg-center bg-cover">
        <Router>
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<Welcome/>}/>
          </Routes>
        </Router>
    </main>
  )
}

export default App
