import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bayProduct } from '../store/productsSlice'

export const Posts = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    
    const increaseCount = () => {
        dispatch(bayProduct())
    }

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
            {products.map((product) => (
                <div key={product._id} style={{width: '300px'}}>
                    <img src={product.picture} alt="" />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>{product.name}</h3>
                        <button onClick={increaseCount}>BUY PRODUCT</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
