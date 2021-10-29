import React from 'react'
import { Input, Label } from 'reactstrap'

function SearchBar(props) {

    return (
        <div className='border border-2 border-primary p-3 rounded'>
            <Input
                type='text'
                value={props.filterText}
                onChange={e => props.onChangeText(e.target.value)}
                autoFocus={true}
            />
            <Label
                className='pt-3 d-flex justify-content-center'
            >
                <Input
                    type='checkbox'
                    checked={props.inStockOnly}
                    onChange={e => props.onChangeCheck(e.target.checked)}
                    className='me-2'
                />

                Only show products in stock
            </Label>
        </div>
    )
}

export default SearchBar
