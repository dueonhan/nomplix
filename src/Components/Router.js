import React from "react";
import { BrowserRouter as Router , Route ,Redirect ,Switch  } from 'react-router-dom'
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "./Header"
import Search from "Routes/Search";
import Detail from "Routes/Detail";

//HashRouter 
export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/TV" exact component={TV} />
            <Route path="/TV/popular" render={() => <h1>popular</h1> } />
            <Route path="/search"  component={Search} />
            <Route path="/movie/:id"  component={Detail} />
            <Route path="/show/:id"  component={Detail} />

            <Redirect from="*" to ="/" />
        </Switch>
        </>
    </Router>
);
    


