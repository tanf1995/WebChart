import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import RouteRecursion from '@/components/RouteRecursion';
import routes from '@/router';


const App = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route:any) => {
                    if(route.redirect){
                        return <Redirect from={route.path} to={route.redirect} 
                            exact key={route.path} />
                    }else{
                        return <RouteRecursion {...route} key={route.path} />
                    }
                })}
            </Switch>
        </Router>
    );
}

export default App;
