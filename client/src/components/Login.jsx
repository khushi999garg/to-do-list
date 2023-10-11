import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../services/api.js';

function Login({user, setUser}){
    const navigation = useNavigate();

    const [form, setForm] = useState({
        email : "",
        password: ""
    });

    useEffect(() => {
        if(user){
            navigation('/')
        }
    }, [])

    const [errors, setErrors] = useState(null);


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {
        console.log('form', form);

        const result = await login(form); 
        console.log("form", result);
        setErrors(null);


        if(result.status === 200){
            if(result.data.status === 200){
                localStorage.setItem('user', JSON.stringify(result.data.data))
                navigation('/');
                return;
            }

            if (result.data.status === 201){
                setErrors(result.data.data)
                return;
            }

            if(result.data.status === 202) {
                toast(result.data.message);
                return;
            }
        }
    }

    return(
        
        <form>
            <fieldset>
                <legend>Log In</legend>
                <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      {
        errors?.username && (<small id='emailHelp' className='form-text text-muted'>{errors.username.message}</small>)
      }
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
      <input type="password" name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="off"/>
      {errors?.password && (<small id='emailHelp' className='form-text text-muted'>{errors.password.message}</small>)}
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </fieldset>
        </form>
        
    );
}

export default Login;