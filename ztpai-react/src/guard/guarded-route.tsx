
import { Navigate, Outlet } from "react-router-dom";

export type GuardedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet?: JSX.Element;
};

export default function GuardedRoute({isAuthenticated, authenticationPath, outlet}: GuardedRouteProps) {
    if(isAuthenticated) {
        return outlet ?? (<Outlet/>);
    } else {
        return (<Navigate to={authenticationPath}/>);
    }
}