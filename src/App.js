import React, { useState } from 'react';
import './App.css';
import { Button, Row, Container, Col } from 'react-bootstrap';
import RespondButton from './RespondButton';
import { responses } from './responseTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function App() {
    let mainDisplayConfig = [
        { display: responses.yes, color: "success" },
        { display: responses.no, color: "danger" },
        { display: responses.notSure, color: "secondary" },
    ];
    let ht_vh = 90 / (mainDisplayConfig.length + 1);

    let mainDisplay = (mainDisplayConfig.map((b, idx) => (
        <RespondButton display={b.display} color={b.color} height={ht_vh} />
    )))

    let actionDisplayConfig = [
        { display: responses.toilet, color: "secondary" },
        { display: responses.massageChair, color: "light" },
        { display: responses.tv, color: "secondary" },
        { display: responses.sleep, color: "light" },
    ]

    let actionDisplay = (actionDisplayConfig.map((b, idx) => (
        <RespondButton display={b.display} color={b.color} height={90 / (actionDisplayConfig.length + 1)} />
    ))
    )

    let loveDisplayConfig = [
        { display: "I ♥️ WIFE", color: "light" },
        { display: `Thank You Wife`, color: "light" },
    ]

    let loveDisplay = (loveDisplayConfig.map((b, idx) => (
        <RespondButton display={b.display} color={b.color} height={30} />
    ))
    )

    const [display, setDisplay] = useState(mainDisplay);

    let updateDisplay = (e) => {
        switch (e.target.name) {
            case "mainDisplay":
                setDisplay(mainDisplay);
                break;
            case "actionDisplay":
                setDisplay(actionDisplay);
                break;
            case "loveDisplay":
                setDisplay(loveDisplay);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Container fluid className="d-flex flex-column justify-content-center">
                {display}
                <Row>
                    <Col className="d-flex justify-content-around">
                        <Button size="lg" onClick={updateDisplay} name="mainDisplay" variant="light">Main</Button>
                        <Button size="lg" onClick={updateDisplay} name="actionDisplay" variant="light">Actions</Button>
                        <Button size="lg" onClick={updateDisplay} name="loveDisplay" variant="light">
                            <FontAwesomeIcon onClick={updateDisplay} name="loveDisplay" icon={faHeart} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
