import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/article" component={ArticlePage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
