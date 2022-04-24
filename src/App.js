import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default App;
