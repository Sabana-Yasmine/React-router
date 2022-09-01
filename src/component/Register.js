import React, {useState} from 'react';
import axios from "axios";

function Register(props) {

 const[user, setUser] = useState({
    username : "",
    email : "",
    password : ""

 })   

 const handleChange = (e) =>{
    console.log(e.target.value)
    const{name, value} = e.target

    setUser({
        ...user,//spread operator
        [name]:value
    })
    console.log("user",user)

 }

 const handleSubmit = ()=> {
    const{username, email, password} = user
    if(username && email && password){
        console.log("user",user);
        axios({
            method : 'post',
            url : 'http://localhost:402/user/Register',
            data : user
        }).then((res) =>{
            console.log(res.data.message)
            alert("user")
        }).catch((err) =>{
            console.log("err", err)
        })
    }else{
        alert("please enter all values")
    }
 }
    return (
        <div className="col-md4-container">
            <h1>Register Form</h1>
            
            <div>
            <label htmlfor="username" className="form-label">username</label>
            <input type="text" class="form-control" name='username' value = {user.username} onChange={handleChange}/>
            </div>

            <div>
            <label htmlfor="email" className="form-label">email</label>
            <input type="email" class="form-control" name='email' value = {user.email} onChange={handleChange}/>
            </div>

            <div>
            <label htmlfor="passwword" className="form-label">password</label>
            <input type="password" class="form-control" name='password' value = {user.password} onChange={handleChange}/>
            </div>

            <div>
            <label htmlfor="" className="btn btn-primary" onClick={handleSubmit}>submit</label>
            </div>
            </div>
    );
}

export default Register;