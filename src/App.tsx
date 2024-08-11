import './App.css'
import Home from './home/home'
import Me from './me/me';
import Communities from './communities/communities';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navigation from './navigation';
import { Container } from '@mui/material';
import Community, {loader} from './communities/community';

function App() {
  const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();

  getAccessTokenSilently().then(r => console.log(r))
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Container maxWidth="sm">
        <Navigation 
          user={user} 
          isAuthenticated={isAuthenticated} 
          logout={logout} 
          loginWithRedirect={loginWithRedirect} 
          getAccessTokenSilently={getAccessTokenSilently}/>
        <Home/>
      </Container>
    },
    {
      path: "/me",
      element: 
      <Container maxWidth="sm">
        <Navigation 
          user={user} 
          isAuthenticated={isAuthenticated} 
          logout={logout} 
          loginWithRedirect={loginWithRedirect} 
          getAccessTokenSilently={getAccessTokenSilently}/>
        <Me 
          user={user} 
          isAuthenticated={isAuthenticated} 
          logout={logout} 
          loginWithRedirect={loginWithRedirect} 
          getAccessTokenSilently={getAccessTokenSilently}/>
      </Container>
    },
    {
      path: "/communities",
      element:
      <Container maxWidth="xl">
        <Navigation 
          user={user} 
          isAuthenticated={isAuthenticated} 
          logout={logout} 
          loginWithRedirect={loginWithRedirect} 
          getAccessTokenSilently={getAccessTokenSilently}/>
        <Communities/>
      </Container>
    },
    {
      path: "/communities/:communityId",
      loader: loader,
      element:
      <Container maxWidth="xl">
        <Navigation 
          user={user} 
          isAuthenticated={isAuthenticated} 
          logout={logout} 
          loginWithRedirect={loginWithRedirect} 
          getAccessTokenSilently={getAccessTokenSilently}/>
        <Community/>
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
