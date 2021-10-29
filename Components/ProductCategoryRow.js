import React from 'react'

function ProductCategoryRow(props) {
    return (
        <div
            className='border border-info text-center bg-secondary bg-opacity-25'
        >
            <h4>{props.title}</h4>
        </div>
    )
}

export default ProductCategoryRow
