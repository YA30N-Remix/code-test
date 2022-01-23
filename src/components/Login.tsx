import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { useSelector, actions, useDispatch } from '../store';
import useQuery from '../hooks/useQuery';
import useAPI from '../hooks/useAPI';

import './Login.scss';
import { Redirect, useHistory } from 'react-router-dom';

const Login: FC = () => {
  const { Login } = useAPI();
  const dispatch = useDispatch();
  const { query, setQuery } = useQuery();
  const userobjs = useSelector((state) => state.userobjs);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="Login">
      <h1>Login</h1>
      <div>
        <input
          type="text"
          className="form-control "
          name="email" value={email}
          placeholder="Enter Your Email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>

        <input
          type="password" value={password}
          className="form-control my-2"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Your Password"
        ></input>
        <button
          className="btn btn-primary w-100"
          onClick={() => {
            debugger;
            const userobj = {
              email: email.toString(),
              password: password.toString()
            };
            Login(userobj).then((userobj) => { 
              toast(`Login Success`, { type: 'success' });
              window.location.href = '/DataPage';
            });
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default Login;
