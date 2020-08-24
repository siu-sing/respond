import React from 'react';
import './App.css';
import { Button, Row, Container, Col } from 'react-bootstrap';


function App() {

    let playYes = () => {
        console.log("yes")
        const audioEl = document.getElementsByClassName("audio-yes")[0]
        audioEl.play()
    }

    let playNo = () => {
        console.log("no")
        const audioEl = document.getElementsByClassName("audio-no")[0]
        audioEl.play()
    }

    return (
        <Container className="">
            <Row className="">
                <Col className="yes text-center d-flex m-2">
                    <Button onClick={playYes} className="btn-block btn-success">
                        <span className="display-1">YES</span>
                        <audio className="audio-yes">
                            <source src="https://www.pacdv.com/sounds/voices/yes-5.wav"></source>
                        </audio>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className="no text-center d-flex m-2">
                    <Button onClick={playNo} className="btn-block btn-danger">
                        <span className="display-1">NO</span>
                        <audio className="audio-no">
                            <source src="https://www.pacdv.com/sounds/voices/no-2.wav"></source>
                        </audio>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
