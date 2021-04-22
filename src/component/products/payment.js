import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        addedProducts: state.addedProducts.addedProducts
    };
}

export default connect(mapStateToProps)(function AllProducts(props) {
    const { addedProducts, } = props;

    return (
        <>

            <ul class="list-group">The pprpoducts you choose is:
                        {addedProducts.map(item => <li key={item.id}>from the: {item.name}   you wont to buy:  {item.amount}</li>)}
            </ul>
        </>
    )
})