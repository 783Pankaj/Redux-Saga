
import { addToCart, removeToCart, emptyCart} from '../redux/action'
import { useDispatch } from 'react-redux';
import { productList} from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.log("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div className='product-item' key={item.id}>
            <img src={item.thumbnail} alt="" />
            <div>Title : {item.title} </div>
            <div>stock : {item.stock} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
              </div>
          </div>)
        }
      </div>
    </div>
  );
}
export default Main;
 