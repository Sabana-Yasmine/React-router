import React from 'react';
import Product from './Product';

function Home(props) {
    return (
        <div>
           <h1>GET STARTED </h1>
           <a href="" onClick={(Product)=>navigate("/product")}>
                            View Products
                        </a>
        </div>
    );
}

export default Home;