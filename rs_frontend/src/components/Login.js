import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth';
import RentalApi from "../api/api";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login(){
 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleError = (errors) => {};

  const registerOptions = {
    username: { required: "Username is required" },
    password: { required: "Password is required" },
};

  const navigate = useNavigate()
  const auth = useAuth();

  async function handleLogin( data, evt ) { 
    evt.preventDefault();
    try {
      let user = {
        username: data.username,
        password: data.password,
      }
      console.log("form data " + user.password)
      let result = await RentalApi.login(user);
      if (result.token ){
        user.token = result.token;
        console.log("token from api " + result.token )
        auth.login(user);
        navigate("/");
      } else {
        alert("Error logging in")
      }
    } catch(error) {
      console.log(error);
      alert("Login Failed, Sign up if you don't have an account");
    }
  }
  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3 className="mt-4">Login Form</h3>
      <hr></hr>
      <div className="card mt-4">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin, handleError)}>
            <div className="form-group">
                <label>Username</label>
                <input
                    name="username"
                    className="form-control" 
                    type="text" {...register('username', registerOptions.username) }/>     
                  <small className="text-danger">
                        {errors?.username && errors.username.message}
                  </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" className="form-control" 
                  type="password" {...register('password', registerOptions.password) }/>
                <small className="text-danger">
                    {errors?.password && errors.password.message}
                </small>
            </div>
            <button className="mt-4">Submit</button>
          </form>
          <div className="mt-4">
                <b>If you don't have an account</b><Link to={`/signup`}>
                            <button className="btn btn-link">Sign Up</button>
                    </Link>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Login;
