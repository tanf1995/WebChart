import {lazy} from 'react';

const BaseContainer = lazy(() => import('@/views/BaseContainer'))
const HomePage = lazy(() => import('@/views/HomePage'));

const routes: any[] = [
    {
        path: '/',
        RouteComponent: BaseContainer,
        childrenRoute: [
            {
                path: "/",
                RouteComponent: HomePage,
                exact: true
            }
        ]
    }
]

export default routes;