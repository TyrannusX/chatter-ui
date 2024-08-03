import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import Home from './home/home'
import Me from './me/me';
import { useAuth0 } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/me",
    element: <Me/>
  },
]);

function App() {
  const {loginWithRedirect, isAuthenticated, isLoading, user, logout, getAccessTokenSilently} = useAuth0();
  getAccessTokenSilently().then(r => console.log(r))
  const drawerListItems = [
    {'page': 'Home', 'path': '/'},
    {'page': 'Me', 'path': '/me'},
    {'page': 'Communities', 'path': '/communities'},
  ];

  return (
    <>
    <Drawer variant='permanent' open>
      <Toolbar/>
      <div>{user?.name}</div>
      <Divider/>
      <List>
        {drawerListItems.map((item, _) => (
          <ListItem>
            <ListItemButton href={item.path}>
                <ListItemText primary={item.page}/>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider/>
          {isAuthenticated 
            ? <ListItem>
              <ListItemButton onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                <ListItemText>Logout</ListItemText>
              </ListItemButton>
              </ListItem>
            : <ListItem>
              <ListItemButton onClick={() => loginWithRedirect()}>
                <ListItemText>Login</ListItemText>
              </ListItemButton>
              </ListItem>}
      </List>
    </Drawer>
    <RouterProvider router={router} />
    </>
  )
}

export default App
