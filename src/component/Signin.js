import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {
    const navigate =useNavigate();
    const [status, setStatus] = usestate("false");
    const[username, savedusername]= useState();
    const[password,savedpassword] = usestate();
    
    const getdetails = async() => {
        const get = await axios.post("http://localhost:402/user/userlogin",{
            username,password
        }).then((Response) => {
            console.log(Response);
             
            console.log("token",Response.data.data.jwttoken)
            localStorage.setItem("token",Response.data.data.jwttoken)
            
            alert("successfully Signin")
            navigate("/home");
        }).catcgith((error)=>{
            console.log(error);
        });
        const removedata = async(data) =>{
            const token = localStorage.getItem("token")
            console.log("token",token)
            let deleteitem =await axios.deleteitem(`http://localhost:402/product/deleteproduct`,{
                headers:{token:token}
            })
            .then((Response)=>{
                console.log(response.data.result);
                item();
            })
            .catch((error)=>{
                alert(error.response.data.message);
                console.log(error);
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
          };
        
          return (
            <div className ="container my-5">
                <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4">
                    <h2 className="text-left">Signin</h2>
                    <p>Already have an account? Signin or 
                        <a href="" onClick={()=>navigate("/register")}>
                            Signup
                        </a>
                    </p>
                    <form>
                        <div className="mb-3 mt-3">
                            <label htmlfor = "email" className="form-label">
                                Username
                            </label>
                            <input type="text" className="form-control" name="username" 
                            onChange={(e)=>savedusername(e.target.value)} required/>
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlfor = "password" className="form-control">
                                Password
                            </label>
                            <input type="text" className="form-control" name="password" 
                            onChange={(e)=>savedpassword(e.target.value)} required/>
                        </div>
                        <div>
                           <label htmlfor="" className="btn btn-primary" onClick={handleSubmit}>submit</label>
                         </div>
                    </form>

                </div>
                 </div>
        )
    };
}