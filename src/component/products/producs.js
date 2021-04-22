import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import { addProduct } from '../store/action'

function mapStateToProps(state) {
    debugger
    return {
        producs: state.producs.products,
    };
}

export default connect(mapStateToProps)(function IntroducingProducts(props) {
    const { producs, dispatch } = props;
    debugger
    return (
        <>
        <Link to='/addedProducts'>To complete the purchase</Link>
            {producs&&
                producs.map((producs, index) => <div class="card" style={{width: "18rem"}}>
                    <img src={producs.image} class="card-img-top" alt="..." />
                        
                        <div class="card-body">
                        <h5 class="card-title">{producs.name}</h5>
                        <h5 class="card-title">{producs.id}</h5>
                            
                            <DropdownButton as={ButtonGroup} title="to view the product" id="bg-vertical-dropdown-2">
                            <Dropdown.Item eventKey="1">this is the view  product {producs.name} the id of this is {producs.id}</Dropdown.Item>
                            </DropdownButton>           
                        {/* <button type="button" class="btn btn-primary" onClick={() => dispatch(addProduct({ name: producs.name, amount: producs.amount, id: producs.id }))} >מחיקה</button> */}
                        <button type="button" class="btn btn-primary" onClick={() => dispatch(addProduct({ name: producs.name, amount: producs.amount, id: producs.id }))} > הוספה
                      
                        </button>
                    
                        </div>
                    </div>

                )}
        </>
    )
})
