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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateIsAuth } from '../../store/reducers/FilterSlice';

const defaultTheme = createTheme();

const LoginPage = () => {

    const {email} = useSelector((state) => state.FilterReducer);
    const dispatch = useDispatch()

    //const [email, setEmail] = useState('')
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
    }, [emailDirty, passwordDirty])

    const emailHandler = (e) => {
        dispatch(updateEmail(e.target.value));
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(email).toLowerCase())) {
            setEmailDirty(true)
        } else {
            setEmailDirty(false)
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 24) {
            setPasswordDirty(true)
        } else {
            setPasswordDirty(false)
        }
    }

    const push = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('token', result.token);
                dispatch(updateIsAuth(true))
                push('/');
            } else {
                if (response.status === 400) {
                    alert('Неправильний пароль');
                }
            }
        } catch (error) {
            console.error('Помилка при відправленні запиту:', error);
        }
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
                            Вхід
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Адреса електронної пошти"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                color={emailDirty ? 'error' : 'primary'}
                                value={email}
                                onChange={e => emailHandler(e)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color={passwordDirty ? 'error' : 'primary'}
                                value={password}
                                onChange={e => passwordHandler(e)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Запам'ятати мене"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "#222831"}}
                                disabled={!formValid}
                                
                            >
                                Увійти
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Забули пароль?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Немає облікового запису? Реєстрація"}
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

export default LoginPage