import React from 'react';

const Product = (props) => {

    const {title, description, price, picture_URL} = props.data;


    
    return (
        <div className='col-md-4'>

            <div className='card p-3 mb-2'>

                <img src={picture_URL} alt="TEST" className='card-img-top' />
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>
                    {description}
                    </p>
                    <h5>Price: {price} SEK</h5>
                </div>
                <div className='card-footer d-grid'>
                    <button className='btn btn-primary'>Add To Cart!</button>
                </div>

            </div>

        </div>
    );
};

export default Product;