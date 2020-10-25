import React from 'react';
import './App.css';
import { Button, Row, Container, Col } from 'react-bootstrap';
import RespondButton from './RespondButton';
import { responses } from './responseTypes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';


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

    return (
        <>
            <Container fluid className="d-flex flex-column justify-content-around">
                <Router>
                    <Switch>
                        <Route exact path="/respond">
                            {mainDisplay}
                            <RespondButton display="Actions" color="secondary" height={ht_vh / 1.8} link="actions" />
                        </Route>
                        <Route path="/actions">
                            {actionDisplay}
                            <RespondButton display="🔙" color="secondary" height={ht_vh / 1.8} link="respond" />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </>
    );
}

export default App;
