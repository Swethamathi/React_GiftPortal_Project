
import './login.css';
import { Link } from 'react-router-dom';
const Login=()=>
{
  const Hello = ()=>{
  alert("click");
  }
  
  return(
 
    <>
    <body className="bodylo">

    <div class="login-container">
    
        <form class="container" onSubmit={Hello}>
         <h2>Login</h2>
     
 
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" required placeholder="Enter your name"/>

            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">
                SUBMIT
                {/* <Link to="/Footer" className="nav-link">Submit</Link> */}
            </button>
            {/* <p>Don't have an account? <a href="#">Register here</a>.</p> */}


        </form>
    </div>
    
    
    </body>
    
    </>




  )
}
export default Login;
