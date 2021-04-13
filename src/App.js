import React from "react";
import "./styles/App.scss";
import logo from './logo.png';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema =yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <div className="container py-5">
        <div className="card border-0 shadow  p-4 w-50 mx-auto"> 
        {/* bg-primary text-white text-center */}
        <img src={logo} alt="Logo"class="center" height="50" width="50" />
        <p class="center" >Please enter your user information.</p>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
            ref={register({
              required: "this field is required",
            })}
          />
          {/* <p> {errors.email?.message} </p> */}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
            // {...register("password")}
          />
          {/* <small className="form-text text-danger">{errors.password?.message}
          </small> */}
        </div>


        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="tnc" />
            <label className="form-check-label" htmlFor="tnc">Remember Me</label>
          </div>
        </div>
        <button className="btn btn-primary">Sign Me In</button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default App;
