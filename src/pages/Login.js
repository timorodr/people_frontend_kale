import { Form } from "react-router-dom"


const Login = () => {
    return (
        <div>
            <h1>Login Form</h1>
            <Form action="/login" method="POST">
                <label>username:</label>
                <input type="text" name="username" placeholder="username"></input>

                <label>username:</label>
                <input type="password" name="password" placeholder="password"></input>

                <input type="submit" value="login"></input>
            </Form>
        </div>
    )
}

export default Login