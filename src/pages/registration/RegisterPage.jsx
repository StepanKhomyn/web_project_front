import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();


const RegisterPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailDirty || passwordDirty) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailDirty, passwordDirty])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (!re.test(String(email).toLowerCase())) {
            setEmailDirty(true)
        } else {
            setEmailDirty(false)
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 6 || e.target.value.length > 24){
            setPasswordDirty(true)
        } else {
            setPasswordDirty(false)
        }
    }

  



    const push = useNavigate();

    const handleLogin = () => {

        push('/');
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
    };


    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Реєстрація
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            {/* Ось тут ваші поля для вводу додаткових даних */}
                            {/* Додайте їх та обробники подій, які вам потрібні */}
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Адреса електронної пошти"
                                        name="email"
                                        autoComplete="email"
                                        color={emailDirty ? 'error' : 'primary'}
                                        value={email}
                                        onChange={e => emailHandler(e)}


                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        color={passwordDirty ? 'error' : 'primary'}
                                        value={password}
                                        onChange={e => passwordHandler(e)}

                                    />
                                </Grid>
                            </Grid>
                            {/* Кінець полів для вводу додаткових даних */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "#222831" }}
                                disabled={!formValid}
                            >
                               Реєстрація
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        У вас вже є акаунт? Увійти
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default RegisterPage