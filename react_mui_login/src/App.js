import './App.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant='h5'>
          Sign in
        </Typography>
        <TextField
          margin='normal'
          label="Email Address"
          name='email'
          autoComplete='email'
          required
          fullWidth
        >
        </TextField>
        <TextField
          margin='normal'
          label="Password"
          type='password'
          name='password'
          autoComplete='current-password'
          required
          fullWidth
        >
        </TextField>
        <FormControlLabel control={<Checkbox value="remember" color='primary'></Checkbox>} label="Remember me"></FormControlLabel>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Sign in</Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Dont have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
    
  );
}

export default App;
