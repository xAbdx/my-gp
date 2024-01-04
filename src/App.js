import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home'
import Askme from './screens/AskMe/Askme.jsx'
import Plana from './screens/PlanA/Plana'
import Planb from './screens/PlanB/Planb'
import Planc from './screens/PlanC/Planc'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ask-me" element={<Askme />} />
      <Route path="plan-a" element={<Plana />} />
      <Route path="plan-b" element={<Planb />} />
      <Route path="plan-c" element={<Planc />} />
    </Routes>
  )
}

export default App;
