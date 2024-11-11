import * as React from "react";
import { Route, Switch } from "wouter";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/">
                        index
                    </Route>
                    <Route>404</Route>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

export default App;