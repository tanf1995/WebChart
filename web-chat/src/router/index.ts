import {lazy} from 'react';

const BaseContainer = lazy(() => import('@/views/BaseContainer'))
const SessionContainer = lazy(() => import('@/views/SessionContainer'));
const ChatPage = lazy(() => import('@/views/ChatPage'));
const LoginOrRegister = lazy(() => import('@/views/LoginOrRegister'));
const FriendsContainer = lazy(() => import('@/views/FriendsContainer'));
const SessionHome = lazy(() => import('@/views/SessionHome'));
const FriendsHome = lazy(() => import('@/views/FriendsHome'));

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
                redirect: "/session"
            },
            {
                path: "/session",
                RouteComponent: SessionContainer,
                childrenRoute: [
                    {
                        path: "/session",
                        RouteComponent: SessionHome,
                        exact: true
                    },
                    {
                        path: "/session/:user",
                        RouteComponent: ChatPage,
                        exact: true
                    },
                ]
            },
            {
                path: "/friend",
                RouteComponent: FriendsContainer,
                childrenRoute: [
                    {
                        path: "/friend",
                        RouteComponent: FriendsHome,
                        exact: true
                    }
                ]
            }
        ]
    }
]

export default routes;