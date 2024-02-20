import { Button, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

interface CustomAppBarProps {
  title: string;
}

// Custom AppBar component
function CustomAppBar({ title }: CustomAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ cursor: 'pointer' }}
          >
            <Link href=".." color="inherit">
              {title}
            </Link>
          </Typography>
          <Button>
            <Link href={'../about'}>About</Link>
          </Button>
          <Button>
            <Link href={'../login'}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const LoginPage: React.FC = () => {
  return (
    <div className="container">
      <div id="Navbar">
        <CustomAppBar title="MBI Calculator" />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default LoginPage;
