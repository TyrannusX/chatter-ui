import './App.css'
import Home from './home/home'
import Me from './me/me';
import Communities from './communities/communities';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navigation from './navigation';
import { Container } from '@mui/material';

function App() {
  const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();

  getAccessTokenSilently().then(r => console.log(r))
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Container maxWidth="sm">
        <Navigation user={user} isAuthenticated={isAuthenticated} logout={logout} loginWithRedirect={loginWithRedirect}/>
        <Home/>
      </Container>
    },
    {
      path: "/me",
      element: 
      <Container maxWidth="sm">
        <Navigation user={user} isAuthenticated={isAuthenticated} logout={logout} loginWithRedirect={loginWithRedirect}/>
        <Me user={user} isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} getAccessTokenSilently={getAccessTokenSilently}/>
      </Container>
    },
    {
      path: "/communities",
      element:
      <Container maxWidth="sm">
        <Navigation user={user} isAuthenticated={isAuthenticated} logout={logout} loginWithRedirect={loginWithRedirect}/>
        <Communities/>
      </Container>
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
