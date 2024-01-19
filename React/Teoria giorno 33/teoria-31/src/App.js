import './App.css';
import NavBarComponent from './components/NavBarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import FooterComponent from './components/FooterComponent';
import NewUserPage from './pages/NewUserPage';
import DetailUsers from './pages/DetailUsers'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/new" element={<NewUserPage />} />
            <Route path="/users/:email/info" element={<DetailUsers />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
