
import { useRoutes } from 'react-router-dom'
import Landing from './landing/landing'
import MainLayout from './mainLayout/mainLayout'

const Routes = ({children}) => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [{
                path: "/",
                element: <Landing />
            }]
        }
    ]
    );
}

export default Routes