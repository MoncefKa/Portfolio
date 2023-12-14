import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Welcome} from "./Pages/Dynamic/dynamicpath.js";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#191919]">
        <Router>
          <Routes>
            <Route path={"/"} element={<Welcome/>}/>
          </Routes>
        </Router>
    </main>
  )
}

export default App
