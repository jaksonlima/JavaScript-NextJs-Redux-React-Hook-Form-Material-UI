import { useForm } from 'react-hook-form'
import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import {Visibility, VisibilityOff } from '@material-ui/icons';
import { useCallback, useState } from 'react';

function Login() {
  const { handleSubmit, register, errors } = useForm();

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });


  const onSubmit = (e) => {
    console.log(e)
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleError = useCallback((name) => {
    const errorInput =  errors[name];

    return {
       error: errorInput ? true : false, 
       helperText: errorInput?.message
    }
  }, [errors])

  return (
    <Box style={{margin: '10px', display: 'flex', justifyContent: 'center'}}>
      <Card style={{ width: '375px' , height: '183px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box style={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px'}}>
            <TextField
            {...handleError('login')}
            id="login"
            name="login"
             label="Login"
             type="text"
            variant="outlined"
            inputRef={register({ required: true })}
            />

            <FormControl variant="outlined" style={{marginTop: '10px'}}>
            <InputLabel htmlFor="password">Senha</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                inputRef={register}
                labelWidth={70}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                       aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }  
              />
              </FormControl>
              <Button variant="contained" size="large" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Acessar
              </Button>
          </Box>
        </form>
      </Card>
    </Box>  
  )
}

export default Login;