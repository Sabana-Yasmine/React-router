import React from 'react';
import {useNavigate} from 'react-router-dom'

function Home(props) {
    const navigate = useNavigate()
    return (
        
        <div>
           <h1>GET STARTED </h1>
           <a href="" onClick={()=>navigate("/product")}>
                            View Products
                        </a>
        </div>
    );
}

export default Home;