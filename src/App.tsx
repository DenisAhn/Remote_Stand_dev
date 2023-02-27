import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import {Homepage} from "./pages/Homepage"
import {LR1} from "./pages/LR1"
import {LR2} from "./pages/LR2"
import {LR3} from "./pages/LR3"
import {LR4} from "./pages/LR4"
import {FeedbackForm} from "./pages/FeedbackForm"
import {Docs} from "./pages/docs"
import {Layout} from "./components/Layout"
function App() {

  return (
          <div className={"font-dmSans bg-slate-50"}>
                      <Routes>
                          <Route path = "/" element={<Layout/>}>
                              <Route path ="" element={<Homepage/>}/>
                              <Route path ="Lab1" element={<LR1/>}/>
                              <Route path ="Lab2" element={<LR2/>}/>
                              <Route path ="Lab3" element={<LR3/>}/>
                              <Route path ="Lab4" element={<LR4/>}/>
                              <Route path ="FeedbackForm" element={<FeedbackForm/>}/>
                              <Route path ="docs" element={<Docs/>}/>
                          </Route>

                      </Routes>


          </div>
  )
}

export default App
