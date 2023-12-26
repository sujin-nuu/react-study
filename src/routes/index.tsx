import { useRoutes } from "react-router-dom";
import * as paths from './const';
import { MainLayout } from "common";
import { DashBoardPage, NotFoundPage, StateChangePage } from "pages";

export const MainRoutes = () => {
    const routes = useRoutes([
        {
            path: paths.ROUTE_ROOT,
            children: [
                {
                    element: <MainLayout/>,
                    children: [
                        {
                            path: paths.ROUTE_TEST,
                            element: <DashBoardPage />
                        }
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <NotFoundPage />
        }
    ]);

    return routes;
};