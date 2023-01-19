import { useState } from "react";
import { SimpleAlert } from "../../components/forms/simple-alert/simple-alert.component";
import { Spinner } from "../../components/forms/spinner/spinner.component";
import { TextInput } from "../../components/forms/text-input/text-input.component";
import './login-page.style.scss';

interface IUserData {
    user: string,
    password: string
}

const LoginPage = () => {
    const [user, setUser] = useState<IUserData>({
        user: '',
        password: ''
    });

    const onChangeHandler = (value: string, id: string) => {
        setUser({...user, [id]: value});
    }
   
    return (
        <div className="login-page">
            <h1>Login</h1>
            <TextInput label="user" value={user.user} id='user' onChange={onChangeHandler}/>
            <TextInput label="password" value={user.password} id='password' type='password'  onChange={onChangeHandler}/>
            <button className="btn">Login</button>
        </div>
    );
}

export { LoginPage };