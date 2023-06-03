import React from 'react'
import { Button, Form } from "react-bootstrap";
import { ProductState } from '../context/Context'

const Filters = () => {
    const { state, dispatch } = ProductState();
    const { byStock } = state;


    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => {
                        dispatch({
                            type: "BY_STOCK",
                            payload: "lowToHigh",
                        })
                    }}
                    checked={byStock === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => {
                        dispatch({
                            type: "BY_STOCK",
                            payload: "highToLow",
                        })
                    }}
                    checked={byStock === "highToLow" ? true : false}
                />
            </span>
            <Button
                variant="light"
                onClick={() => {
                    dispatch({
                        type: "CLEAR_FILTERS",
                    })
                }}
            >
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters
