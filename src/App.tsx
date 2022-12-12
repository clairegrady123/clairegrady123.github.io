import { Routes, Route, Navigate } from 'react-router-dom'
import { Home} from './pages'
import './App.css';

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </main>
  );
}

export default App;
