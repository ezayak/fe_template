import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/home-page/home-page.component';
import { Navigation } from './routes/navigation/navigation';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<HomePage />}></Route>
        </Route>
    </Routes>    
  );
}

export default App;
