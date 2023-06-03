import React, { useEffect } from 'react'
import { ProductState } from '../context/Context'
import { ListGroup, Button, Alert } from 'react-bootstrap'
import emailjs from 'emailjs-com';


const SingleProducts = ({ product, key }) => {
    const { dispatch } = ProductState()
    const [error, setError] = React.useState("")

    useEffect(() => {
        setError("")
    }, [product.qty])
    
    const onDecreaseQty = () => {
        if (product.qty <= 0) {
            return;
        }
        dispatch({
            type: 'DECREASE_QTY',
            payload: product
        })
        if (product.qty === 1) {
            const service_id = process.env.REACT_APP_SERVICE_ID;
            const template_id = process.env.REACT_APP_TEMPLATE_ID;
            const user_id = process.env.REACT_APP_USER_ID;

            let params = {
                to_name: 'Vidhu',
                from_name: 'Inventory System',
                message: `Sorry, the inventory for ${product.title} is at 0`
            }

            emailjs.send(service_id, template_id, params, user_id)
                .then(function (response) {
                    setError("success")
                }, function (error) {
                    setError("danger")
                })
        }
    }

    return (
        <>
            {error.length > 0 && <Alert key={error} variant={error}>
                {error === "success" ? "Email sent successfully" : "Email not sent"}
            </Alert>}
            <ListGroup>
                <ListGroup.Item key={key} style={{ margin: "10px" }}>
                    <div className="cartitem" style={{ display: 'flex' }}>
                        <img src={product.image} alt={product.title} className="cartItemImg" />
                        <div className="cartItemDetail">
                            <div className="name">{product.title}</div>
                            <div className="details">
                                <div className="price">Price : ${product.price}</div>
                                <div className="stock">In Stock : {product.qty}</div>
                                <div className="incDec">
                                    <Button className="dec" style={{ margin: "5px" }} onClick={() => {
                                        onDecreaseQty()
                                    }}>-</Button>
                                    <span className="quantity" style={{ margin: "5px" }}>{product.qty}</span>
                                    <Button className="inc" onClick={() => {
                                        dispatch({
                                            type: 'INCREASE_QTY',
                                            payload: product
                                        })
                                    }}>+ </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListGroup.Item>

            </ListGroup >
        </>
    )
}

export default SingleProducts
