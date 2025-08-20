import React, { useContext, useState } from 'react'
import './ProductDetailModal.css';
import { IoIosClose, IoIosList, IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import { CartContext } from '@/context/addToCart';

const ProductDetailModal = ({ showModal, setShowModal, productData, otherProducts }) => {
    const handleCloseDetailModal = () => {
        setShowModal(false);
    }

    const [quantity, setQuantity] = useState(1)
    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleQuantityChange = (e) => {
        const val = e.target.value;
        setQuantity(val)
    }

    const [showDescription, setShowDescription] = useState(false);
    const handleDescription = () => {
        setShowDescription(!showDescription)
    }

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(productData, quantity);  // add product + quantity to cart
        setQuantity(1);
        setShowModal(false);
    };

    const handleSimillerProductAddToCart = (item) => {
        addToCart(item, 1);  // add product + quantity to cart
    }



    return (
        <div className={`product-detail-modal-main-container ${showModal ? 'show-product-details' : ''}`} onClick={handleCloseDetailModal}>
            <div className={`product-detail-modal-inner-container ${showModal ? 'show-product-details-inner-modal' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className='product-detail-modal-close-btn' onClick={handleCloseDetailModal}>
                    <IoIosClose size={20} color='#040202ff' />
                </button>

                <div className='product-detail-selected-product-details-container'>
                    <div className='product-detail-selected-product-image-container'>
                        <Image src={productData?.image} width={320} height={220} alt='img' />
                    </div>
                    <div className='product-detail-selected-product-detail-container'>
                        <h3 className='selected-product-name'>{productData.name}</h3>
                        <p className='selected-product-price'>{productData.price}</p>
                        <span className='selected-product-add-to-list'>
                            <IoIosList size={15} color='#595959' />
                            <p>Add To List</p>
                        </span>

                        <div className='selected-product-add-to-cart-container'>
                            <div className='selected-product-quantity-add'>
                                <button onClick={decreaseQuantity}>
                                    <FiMinus size={15} color='#595959' />
                                </button>
                                <input type='text' min={1} value={quantity} readOnly name='quantity' onChange={handleQuantityChange} />
                                <button onClick={addQuantity}>
                                    <IoIosAdd size={15} color='#595959' />
                                </button>
                            </div>
                            <div className='selected-product-add-to-cart-btn-container' onClick={handleAddToCart}>
                                <button>
                                    Add to cart {productData.price * quantity}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='selected-product-description-constainer'>
                    <div className='selected-product-description-head' onClick={handleDescription}>
                        <h3>Description</h3>
                        <MdOutlineKeyboardArrowDown size={15} color='#595959' className='description-arrow' />
                    </div>
                    <div className={`selected-product-desc ${showDescription ? 'show-description' : ''}`}>
                        <p>Fresh Ground Beef</p>
                    </div>
                </div>

                <div className='selected-product-similler-main-container'>
                    <h3>Similer Products</h3>
                    <div className='selected-product-simmer-products'>
                        {otherProducts.map((item, index) => (
                            <div key={index} className='similler-product'>
                                <div className='similer-product-image-container'>
                                    <Image src={item.image} width={220} height={220} alt='img' />
                                </div>
                                <div className='similler-products-details-container'>
                                    <h3>{item.price}</h3>
                                    <p>{item.name}</p>
                                    <p>{item.weight}</p>
                                </div>
                                <div className='similer-product-add-to-cart'>
                                    <button onClick={() => handleSimillerProductAddToCart(item)}>Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailModal