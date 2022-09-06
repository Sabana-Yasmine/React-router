import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
    const navigate =useNavigate();
   
    const[username, savedusername]= useState();
    const[password,savedpassword] = useState();
    
    const login = async() => {
        console.log("login initiates")
        const get = await axios.post("http://localhost:402/user/userlogin",{
            username,password
        }).then((Response) => {
            console.log(Response);
             
            console.log("token",Response.data.data.jwttoken)
            localStorage.setItem("token",Response.data.data.jwttoken)
            
            alert("successfully Signin")
            navigate("/home");
        }).catch((error)=>{
            console.log(error);
        });
       
    }
    const handleSubmit = () => {
       console.log(username,password)
      };

          
        
          return (
            <div className ="container my-5">
                <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4">
                    <h2 className="text-left">Signin</h2>
                    
                    <form>
                        <div className="mb-3 mt-3">
                            <label htmlfor = "email" className="form-label">
                                Username
                            </label>
                            <input type="text" className="form-control" name="username" 
                        onChange={(e)=>savedusername(e.target.value)} required/>
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlfor = "password" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" name="password" 
                            onChange={(e)=>savedpassword(e.target.value)} required/>
                        </div>
                        
                        
                        <div>
                           <button htmlfor="" className="btn btn-primary" onClick={login}>submit</button>
                         </div>
                    </form>
                    
                        <p>Already have an account? Signin or 
                        <a href="" onClick={(Register )=>navigate("/register")}>
                            Signup
                        </a>
                    </p>
                        

                </div>
                 </div>
        )
    
}
export default Signin;