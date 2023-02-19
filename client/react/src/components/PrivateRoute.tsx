import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';

type XX = () => JSX.Element
type Props = {
    children: any
    // children: React.ReactNode
    // children: string | JSX.Element | JSX.Element[] | XX
}

const PrivateRoute = ({ children }: Props) => {
    const isLoggedIn = useAppSelector((state) => state?.auth.isLoggedIn);
    let location = useLocation();

    if (isLoggedIn) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;