import './globals.css';

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
            color="primary"
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

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <div id="Navbar">
        <CustomAppBar title="MBI Calculator" />
      </div>
      <h1 id="title">Who we are ?</h1>
      <div id="content">
        <p id="about_text">
          With our new application, the BMI calculator, we aim to help people
          better understand their Body Mass Index (BMI) and support them in
          achieving their health goals. This application is designed to provide
          users with easily understandable information about their BMI, while
          also offering personalized recommendations regarding diet and
          lifestyle. By gradually inputting data about their BMI and other
          relevant factors such as age, gender, and level of physical activity,
          our application generates individual recommendations on how to achieve
          optimal health and fitness. We are convinced that awareness of one s
          health and a healthy lifestyle is key to long-term well-being, and it
          is this mission that motivates us to constantly improve our
          application for the best user experience. With our BMI calculator, you
          can start your journey to a healthier and happier life
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;
