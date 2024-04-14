import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';

function App() {
  // const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarCollapsed(!isSidebarCollapsed);
  // };

  return (
    <Router>
      <Topbar />
      {/* <button className='sidebar-toggle' onClick={toggleSidebar}>☰</button> */}
      {/* <div className={`container ${isSidebarCollapsed ? 'collapsed' : ''}`}> */}
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
