import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RespondButton(props) {
    let { display, color, height, link } = props;

    let linkUrl = link ? `/${link}` : "";

    return (
        <Row className="my-1">
            <Col>

                <Button
                    className={`btn-block btn-${color} respond__button`}
                    style={{ height: `${height}vh` }}
                    href={link && linkUrl}
                >
                    <span className="button__text">{display}</span>
                </Button>

            </Col>
        </Row>
    )
}
