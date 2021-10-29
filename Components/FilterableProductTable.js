import React, { useState } from 'react'
import { Container } from 'reactstrap';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import products from './Products.json';

function FilterableProductTable() {
    const [filterText, setFiltertext] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const changeHandlerFilterText = text => setFiltertext(text);
    const changeHandlerInStockOnly = bool => setInStockOnly(bool);

    return (
        <Container className='py-3'>
            <div
                className='col-sm-10 col-md-8 col-lg-6 p-3 border border-3 border-warning mx-auto rounded'
            >
                <SearchBar
                    onChangeText={changeHandlerFilterText}
                    onChangeCheck={changeHandlerInStockOnly}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />

                <ProductTable
                    products={products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
            </div>
        </Container>
    )
}

export default FilterableProductTable