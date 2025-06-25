import { Route ,Routes} from 'react-router-dom'
import Home from './home'
import Signup from './signup'
import ProblemS from './problems'

import ProgressL from './progress'
import Profile from './profile'
import './App.css'
import ProblemSID from './problemSID'
import ProblemSQUID from './ProblemSQUID'

function App() {      
  
 return (<Routes>
  <Route path="/" element={<Signup />}/>
  <Route path="/Home" element={<Home />}/>
  <Route path="/Problems" element={<ProblemS/>}/>
  <Route path="/Problems/:rid" element={<ProblemSID/>}/>
  <Route path="/Problems/:rid/:qid" element={<ProblemSQUID/>}/>

  
  <Route path="/Progress" element={<ProgressL/>}/>
  <Route path="/Profile" element={<Profile/>}/>

 </Routes>
 );
}

export default App
