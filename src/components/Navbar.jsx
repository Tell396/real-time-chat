import React, {useContext} from 'react';
import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import user from './AppRouter'
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {Context} from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Navbar() {
  const { auth } = useContext(Context)
  const [user] = useAuthState();

  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant={"dense"}>
        <Grid container justify={"flex-start"}>
          {user ?
            <Button variant={"outlined"}>Login</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Exit</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
