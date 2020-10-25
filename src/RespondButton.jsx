import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

export default function RespondButton(props) {
    let { display, color } = props;
    return (
        <Row className="border border-success">
            <Col>
                <Button className={`btn-block btn-${color} respond__button`}>
                    <span className="display-1">{display}</span>
                </Button>
            </Col>
        </Row>
    )
}
