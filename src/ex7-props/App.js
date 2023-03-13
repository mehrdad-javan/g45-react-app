import React from 'react';
import Menu from './Menu';
import Product from './Product';

const App = () => {

    const menus = [
        {id: 1, name: 'Home', path: "/home", active: 'active'},
        {id: 2, name: 'Signin', path: "/login", active: ''},
        {id: 3, name: 'Signup', path: "/register", active: ''},
        {id: 4, name: 'Products', path: "/products", active: ''},
        {id: 5, name: 'About', path: "/about", active: ''}
    ];

    
    const productList = [
        {
            title: 'Old Vintage Camera', 
            description: 'None functioning camera', 
            price: 500, 
            picture_URL: 'https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Camera Lens', 
            description: 'Nikon Camera Lens', 
            price: 6000, 
            picture_URL: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Watch', 
            description: 'Wonderful Michael Kors Watch', 
            price: 15000, 
            picture_URL: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Old Vintage Camera', 
            description: 'None functioning camera', 
            price: 500, 
            picture_URL: 'https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }


    ];


    return (
        <div className='container-fluid'>
            <Menu menuList={menus}  />
            <br/>

            <div className='container card-group'>
                <div className='row'>

                    {
                        productList.map(product => {
                            return <Product data={product}/>
                        })
                    }




                </div>
            </div>

        </div>
    );
};

export default App;