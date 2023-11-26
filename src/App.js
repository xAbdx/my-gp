import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home'
import Askme from './screens/AskMe/Askme';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ask-me" element={<Askme />} />
    </Routes>
  )
}

export default App;
