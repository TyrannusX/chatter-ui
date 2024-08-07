import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const Navigation = ({user, isAuthenticated, logout, loginWithRedirect}: {user: any, isAuthenticated: boolean, logout: any, loginWithRedirect: any}) => {
    const drawerListItems = [
        {'page': 'Home', 'path': '/'},
        {'page': 'Me', 'path': '/me'},
        {'page': 'Communities', 'path': '/communities'},
      ];

    return (
        <Drawer variant='permanent' open>
        <Toolbar/>
        <div>{user?.name}</div>
        <Divider/>
        <List>
          {drawerListItems.map((item, _) => (
            <Link component={RouterLink} to={item.path} color="inherit">
                <ListItem>
                    <ListItemButton>
                        <ListItemText>{item.page}</ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
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
    )
}

export default Navigation;