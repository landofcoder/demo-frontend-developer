import React from 'react'
import Product from "./Product";

function NameList() {
    const name = [
        {
            name: 'Name 1',
            price: 11,
            status: 'Ok',
        },
        {
            name: 'Name 2',
            price: 12,
            status: 'Ok',
        },
        {
            name: 'Name 3',
            price: 13,
            status: 'Ok',
        },
    ]
    const list = name.map((product, i) => <Product product={product} key={i}></Product>)
    return (
        <div>
            {list}
        </div>
    )
}

export default NameList
