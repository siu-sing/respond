import React from 'react';
import './App.css';
import { Button, Row, Container, Col } from 'react-bootstrap';
import RespondButton from './RespondButton';
import { responses } from './responseTypes'


function App() {

    return (
        <>
            <Container fluid className="d-flex flex-column justify-content-around">
                <RespondButton display={responses.yes} color={"success"} />
                <RespondButton display={responses.no} color={"danger"} />
                <RespondButton display={responses.notSure} color={"secondary"} />
            </Container>
        </>
    );
}

export default App;
