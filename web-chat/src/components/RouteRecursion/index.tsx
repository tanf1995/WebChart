import React, {Component, Suspense} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PageLoading from '@/components/PageLoading';


interface Props{
    path: string,
    RouteComponent: any,
    childrenRoute?: {
        path: string,
        RouteComponent: any,
        [propName: string]: any
    }[],
    [propName: string]: any
}
export default class RouteRecursion extends Component<Props>{
    render(){
        const {path, RouteComponent, action, ...res} = this.props;

        if(res.childrenRoute && res.childrenRoute.length){
            let {childrenRoute, ...res2} = res;

            return (
                <Route 
                    path={path}
                    render= {(props: any) => (
                        <Suspense fallback={<PageLoading />}>
                            <RouteComponent {...res2} {...props}>
                                <Switch>
                                    {childrenRoute.map(route => {
                                        if(route.redirect){
                                            return <Redirect from={route.path} to={route.redirect} 
                                                exact key={route.path} />
                                        }else{
                                            return <RouteRecursion {...route} key={route.path} />
                                        }
                                    })}
                                    <Redirect from='*' to='/notfound'/>
                                </Switch>
                            </RouteComponent>
                        </Suspense>
                    )}
                />
            )
        }else{
            return (
                <Suspense fallback={<PageLoading />}>
                    <Route 
                        path={path}
                        render={(props: any) => {
                            if(action) action(props);
                            return <RouteComponent {...props} />
                        }}
                        {...res}
                    />
                </Suspense>
            )
        }
    }
}