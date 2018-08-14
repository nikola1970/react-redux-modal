import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home";
import Favorites from "./components/Favorites";
import ProxyModal from "./components/modals/ProxyModal";

const App = () => (
    <AppWrapper>
        <ProxyModal />
        <Router>
            <React.Fragment>
                <nav>
                    <LinkItem to="/">Home</LinkItem>
                    <LinkItem to="/favorites">Favorites</LinkItem>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/favorites" component={Favorites} />
                </Switch>
            </React.Fragment>
        </Router>
    </AppWrapper>
);

const AppWrapper = styled.div`
    max-width: 500px;
    margin: 50px auto 0 auto;
    padding: 20px;
    border: 1px solid #cecece;
`;

const LinkItem = styled(Link)`
    margin: 0 10px;
`;

export default App;
