import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { ChatterComponentParams } from './types';

const Navigation = (chatterComponentParams: ChatterComponentParams) => {
    const drawerListItems = [
        {'page': 'Home', 'path': '/'},
        {'page': 'Me', 'path': '/me'},
        {'page': 'Communities', 'path': '/communities'},
      ];

    return (
        <Drawer variant='permanent' open>
        <Toolbar/>
        <div>{chatterComponentParams.user?.name}</div>
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
            {chatterComponentParams.isAuthenticated 
              ? <ListItem>
                <ListItemButton onClick={() => chatterComponentParams.logout({logoutParams: {returnTo: window.location.origin}})}>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
                </ListItem>
              : <ListItem>
                <ListItemButton onClick={() => chatterComponentParams.loginWithRedirect()}>
                  <ListItemText>Login</ListItemText>
                </ListItemButton>
                </ListItem>}
        </List>
      </Drawer>
    )
}

export default Navigation;