import {lazy} from 'react';

const BaseContainer = lazy(() => import("@/views/BaseContainer"));

const routes: any[] = [
    {
        path: '/',
        RouteComponent: BaseContainer
    }
]

export default routes;