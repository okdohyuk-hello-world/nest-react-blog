import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/articles/:id" component={ArticlePage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
