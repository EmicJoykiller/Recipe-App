import { useState } from "react";

export const Auth = () => {
    return <div className="auth">
        <Login />
        <Register />
    </div>
};

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, serPassword] = useState("");

    return <Form username={username} setUsername={setUsername} password={password} serPassword={serPassword} />
};


const Register = () => {

    const [username, setUsername] = useState("");
    const [password, serPassword] = useState("");

    return <Form username={username} setUsername={setUsername} password={password} serPassword={serPassword} />
};





const Form = ({ username, setUsername, password, serPassword }) => {
    return <div className="auth-container">
        <form>
            <h2> Register </h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Password:</label>
                <input type="text" id="password" value={password} onChange={(event) => serPassword(event.target.value)} />
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
}