import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next)=>prev+next)
    console.log("amount is ", amount)
    return (
        <div>
            <Link to='/'>Product Listing</Link>
            <h1>Cart Page</h1>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Stock</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Brand</td>
                    </tr>
                    {
                        cartData.map((item) => <tr key={item.id}>
                            <td> {item.title} </td>
                            <td> {item.stock} </td>
                            <td>{item.price} </td>
                            <td> {item.category} </td>
                            <td>{item.brand} </td>
                        </tr>)
                    }
                </table>
                <div className='price-details'>
                      <div className='adjest-price'><span>Amount</span><span>{amount}</span></div>
                      <div className='adjest-price'><span>10% Discount</span><span>{amount/10}</span></div>
                      <div className='adjest-price'><span>Tax</span><span>0000</span></div>
                      <div className='adjest-price'><span>Totle</span><span>{amount-(amount/10)}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Cart
