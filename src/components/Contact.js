import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {

    const onSubmit = () => {
        alert("Thank you for your message. We will get back to you soon.")
    }



    return (
        <Form style={{ margin: "10px", width: "50%" }}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default Contact
