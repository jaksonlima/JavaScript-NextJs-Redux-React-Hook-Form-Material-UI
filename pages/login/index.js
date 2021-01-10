import { useForm } from 'react-hook-form'
import { Box, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';

function Login() {
  const { handleSubmit } = useForm();

  const values = {
    showPassword: true
  }

  const handleChange = () => {
  }
  
  return (
    <Box style={{margin: '10px'}}>
      <form>
        <TextField
          error
          helperText="Incorrect entry."
          id="username"
          label="Username"
          type="text"
          variant="outlined"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
      </form>
    </Box>
  )
}

export default Login;