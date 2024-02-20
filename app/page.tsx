'use client';
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import * as React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

interface CustomInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  endAdornment: string;
  min: number; // Přidání minimální hodnoty pro validaci
}

// Custom AppBar component
function CustomAppBar() {
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
            MBI Calculator
          </Typography>
          <Button>
            <Link href={'/about'}>About</Link>
          </Button>
          <Button>
            <Link href={'/login'}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// Custom Button component
function CustomButton({ onClick, children }: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ marginBottom: '20px' }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

// Custom Input component
function CustomInput({
  value,
  onChange,
  label,
  endAdornment,
  min,
}: CustomInputProps) {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <OutlinedInput
        id={`outlined-adornment-${label}`}
        endAdornment={
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        }
        aria-describedby={`outlined-${label}-helper-text`}
        inputProps={{
          'aria-label': label,
          min: min, // Nastavení minimální hodnoty pro validaci
        }}
        style={{ background: 'grey' }}
        value={value}
        onChange={onChange}
      />
      <FormHelperText id={`outlined-${label}-helper-text`}>
        {label}
      </FormHelperText>
    </FormControl>
  );
}

// eslint-disable-next-line import/no-default-export
export default function Calculate() {
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  // eslint-disable-next-line unicorn/no-null
  const [bmiResult, setBmiResult] = React.useState<string | null>(null);

  React.useEffect(() => {
    setWeight('');
    setHeight('');
    // eslint-disable-next-line unicorn/no-null
    setBmiResult(null);
  }, []);

  const calculateBMI = () => {
    const weightInKg = Number.parseFloat(weight);
    const heightInCm = Number.parseFloat(height) / 100;
    if (weightInKg > 0 && heightInCm > 0) {
      const bmi = weightInKg / (heightInCm * heightInCm);
      setBmiResult(bmi.toFixed(2));
    } else {
      // eslint-disable-next-line unicorn/no-null
      setBmiResult(null);
    }
  };

  return (
    <div className="container">
      <div id="Navbar">
        <CustomAppBar />
      </div>

      <CustomInput
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        label="Weight"
        endAdornment="Kg"
        min={10} // Nastavení minimální hodnoty pro váhu na 10
      />
      <CustomInput
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        label="Height"
        endAdornment="Cm"
        min={50} // Nastavení minimální hodnoty pro výšku na 50
      />

      <CustomButton onClick={calculateBMI}>Calculate</CustomButton>

      {bmiResult !== null && <p id="BMI-result">BMI result: {bmiResult}</p>}
    </div>
  );
}
