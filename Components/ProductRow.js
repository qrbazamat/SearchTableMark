import React from 'react'

function ProductRow({ name, price, stocked, idMark }) {
    const markSearchText = txt => {
        const splitName = txt.split('<#m#>')

        return splitName.map((n, i) => {
            if (i % 2 === 0) return n
            else return <span style={{
                padding: '0', color: 'white', fontWeight: '800', background: 'blue'
            }} key={n + i}>{n}</span>
        })
    }

    const markName = name[0] ? markSearchText(name[1]):name[1]
    const markPrice = price[0] ? markSearchText(price[1]):price[1]

    return (
        <div
            className={`border border-danger py-1 px-3 my-1 d-flex justify-content-between ${!stocked ? 'text-danger' : ''}`}
        >
            <div>
                {markName}
            </div>
            <div>{markPrice}</div>
        </div>
    )
}

export default ProductRow
