import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { addOneProduct, clearProduct } from '../store/action'

function mapStateToProps(state) {
    return {
        addedProducts: state.addedProducts.addedProducts
    };
}


export default connect(mapStateToProps)(function ShowPoductsBought(props) {
    const { addedProducts, dispatch } = props;

    useEffect(() => {
        alert(`Do you want to go to the payment page?`);
    }, []);


    return (
        <>
            <Link to='/toEnd'>To complete the purchase</Link>

            {addedProducts.map(item => <Card style={{ height: '150px', width: '18rem' }}>
                <Card.Body><Card.Text key={item.id}>item: {item.name}</Card.Text>
                    <button onClick={() => dispatch(clearProduct(item))} >to delete the product</button>
                    <Button variant="info" onClick={() => dispatch(addOneProduct({ name: item.name, id: item.id }))} >to add the product {item.amount}</Button>
                </Card.Body>
            </Card>)}
        </>
    )

   
})