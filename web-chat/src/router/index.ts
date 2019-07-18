import {lazy} from 'react';

const BaseContainer = lazy(() => import('@/views/BaseContainer'))
const HomePage = lazy(() => import('@/views/HomePage'));
const ChatPage = lazy(() => import('@/views/ChatPage'));
const LoginOrRegister = lazy(() => import('@/views/LoginOrRegister'));

const routes: any[] = [
    {
        path: '/login',
        RouteComponent: LoginOrRegister
    },
    {
        path: '/register',
        RouteComponent: LoginOrRegister
    },
    {
        path: '/',
        RouteComponent: BaseContainer,
        needLogin: true,
        childrenRoute: [
            {
                path: "/",
                RouteComponent: HomePage,
                exact: true
            },
            {
                path: "/chat/:user",
                RouteComponent: ChatPage,
                exact: true
            }
        ]
    }
]

export default routes;