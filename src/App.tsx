import './App.css';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/home-page/home-page.component';
import { LoginPage } from './routes/login-page/login-page.component';
import { Navigation } from './routes/navigation/navigation';

const App: FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Route>
    </Routes>    
  );
}

export default App;
