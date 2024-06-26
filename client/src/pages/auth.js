import { useState } from "react";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
    return <div className="auth">
        <Login />
        <Register />
    </div>
};

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, serPassword] = useState("");

    const [_, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate();


    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/register", { username, password });
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");


        } catch (err) {
            console.error(err);
        }
    }

    return <Form onSubmit={onSubmit} username={username} setUsername={setUsername} password={password} serPassword={serPassword} label="Login" />
};


const Register = () => {

    const [username, setUsername] = useState("");
    const [password, serPassword] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { username, password });
            alert("Registration Completed! Login Now")
        } catch (err) {
            console.error(err);
        }
    }

    return <Form onSubmit={onSubmit} username={username} setUsername={setUsername} password={password} serPassword={serPassword} label="Register" />
};





const Form = ({ username, setUsername, password, serPassword, label, onSubmit }) => {
    return <div className="auth-container">
        <form onSubmit={onSubmit}>
            <h2> {label} </h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Password:</label>
                <input type="password" id="password" value={password} onChange={(event) => serPassword(event.target.value)} />
            </div>

            <button type="submit">{label}</button>
        </form>
    </div>
}