import React, {Component, Suspense} from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import PageLoading from '@/components/PageLoading';
import {observer} from 'mobx-react';
import {userStore} from '@/store';
import Cookies from 'cookies-ts';
import axiosIns from '@/request';


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
@observer
class RouteRecursion extends Component<Props>{
    verityLogin = (props: any) => {
        if(!userStore.user.token){
            let cookie_token = (new Cookies()).get("token");

            if(!cookie_token){
                props.history.push({
                    pathname: "/login",
                    state: {
                        from: this.props.location.pathname
                    }
                });
            }else{
                axiosIns.defaults.headers["Authorization"] = cookie_token;
                userStore.setToken(cookie_token);
            }
        }
    }

    render(){
        const {path, RouteComponent, action, ...res} = this.props;

        if(res.childrenRoute && res.childrenRoute.length){
            let {childrenRoute, ...res2} = res;

            return (
                <Route 
                    path={path}
                    render= {(props: any) => {
                        if(res2.needLogin) this.verityLogin(props);

                        return (
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
                        )
                    }}
                />
            )
        }else{
            return (
                <Suspense fallback={<PageLoading />}>
                    <Route 
                        path={path}
                        render={(props: any) => {
                            if(action) action(props);
                            if(res.needLogin) this.verityLogin(props);
                            return <RouteComponent {...props} />
                        }}
                        {...res}
                    />
                </Suspense>
            )
        }
    }
}

export default withRouter(RouteRecursion as any);