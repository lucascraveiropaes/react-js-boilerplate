import React, { Component } from "react";
import {
    BrowserRouter,
    Redirect,
    Switch,
    Route
}                   from "react-router-dom";
import * as Pages   from "pages";

// Redux
import { Provider }          from "react-redux";
import { PersistGate }       from "redux-persist/lib/integration/react";
import { persistor, store }  from "store/store.js";

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login" component={ Pages.Login } />
                            <Route path="/about" component={ Pages.About } />
                            <Redirect from="/" to="/login" />
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
