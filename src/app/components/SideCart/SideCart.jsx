import React, { useContext } from 'react'
import './SideCart.css'
import { BsCart2 } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { CartContext } from '@/context/addToCart';
import Image from 'next/image';

const SideCart = ({showSideCart, setShowSideCart}) => {
    const { cart, removeFromCart } = useContext(CartContext);
    const handleCloseSideCart = () => {
        setShowSideCart(false)
    }


  return (
    <div className={`side-cart-contaner ${showSideCart ? 'show-side-cart' : ''}`} onClick={handleCloseSideCart}>
        <div className={`side-cart-inner-container ${showSideCart ? 'show-side-cart-inner' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className='side-cart-head'>
                <span>
                    <BsCart2 size={20} color='#595959' />
                    Your Cart
                </span>
                <button onClick={handleCloseSideCart}>
                    <IoIosClose size={20} color='#595959' />
                </button>
            </div>

            <div className='side-cart-products-container'>

                {cart.map((item, index) => (
                    <div className='side-cart-single-product' key={item.id}>
                        <button className='side-cart-single-product-delete' onClick={() => removeFromCart(item.id)}>
                            <IoIosClose size={15} color='#595959' />
                        </button>
                        <div className='side-cart-image-container'>
                            <Image src={item.image} width={60} height={40} alt='img' />
                        </div>
                        <div className='side-cart-product-details'>
                            <h3>{item.name}</h3>
                            <p>{item.weight}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='side-cart-checkout-contianer'>
                <button>
                    Checkout
                </button>
            </div>
        </div>
    </div>
  )
}

export default SideCart