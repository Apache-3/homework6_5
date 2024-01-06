import React from 'react'
import { useSelector } from 'react-redux'

export const NavBar = () => {
    const count = useSelector((state) => state.products.count)

    return (
        <header style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
            <div className="logo" style={{color: 'red', fontSize: '24px'}}>
                logo
            </div>
            <div style={{color: 'red', fontSize: '24px'}}>
                Корзина
                <span>{count}</span>
            </div>
        </header>
    )
}
