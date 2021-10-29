import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable({ products, filterText, inStockOnly }) {

    const filterTextFunction = (Text) => {
        return Text.toUpperCase().indexOf(filterText.toUpperCase()) !== -1
    }

    const filterProducts = products.filter(p => (!(inStockOnly && !p.stocked) && !(filterText && !(filterTextFunction(p.name) || filterTextFunction(p.price)))))

    const sortingProducts = filterProducts.sort((productA, productB) => {
        const a = productA.category.toUpperCase(),
            b = productB.category.toUpperCase();

        if (a > b) return 1
        else if (a < b) return -1
        else return 0
    })

    const markSearch = text => {
        let textMark = text
        let k = -filterText.length - 10

        while (k !== -1) {
            k = textMark.toLowerCase().indexOf(filterText.toLowerCase(), k + filterText.length + 10)
            if (k !== -1) {
                const txt = textMark.substr(k, filterText.length)
                const leftText = textMark.substring(0, k)
                const rightText = textMark.substr(k)
                textMark = leftText + rightText.replace(txt, `<#m#>${txt}<#m#>`)
            }
        }

        return [true, textMark]
    }

    const productsList = sortingProducts?.map((p, i) => {
        const productCatRow = p?.category !== sortingProducts[i - 1]?.category ? <ProductCategoryRow title={p?.category} /> : null

        const pName = filterText ? markSearch(p.name) : [false, p.name]
        const pPrice = filterText ? markSearch(p.price + '') : [false, p.price]

        return (
            <React.Fragment key={pName + i}>
                {productCatRow}
                <ProductRow
                    price={pPrice}
                    name={pName}
                    stocked={p?.stocked}
                    idMark={filterText}
                />
            </React.Fragment>
        )
    })

    return (
        <div
            className='border border-2 border-success p-3 mt-2 rounded'
        >
            {productsList}

        </div>
    )
}

export default ProductTable