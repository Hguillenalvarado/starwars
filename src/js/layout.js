import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container, Row, Col} from 'react-bootstrap';

import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
      
        <container>
            <div className="d-flex flex-column">
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Row>
                            <Col>
                                <Navbar />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Switch>
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route>
                                        <h1>Not found!</h1>
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                        
                        
                        <Footer />
                    </ScrollToTop>
                </BrowserRouter>
            </div>
        </container>    
	);
};

export default injectContext(Layout);
