import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../Constants/urls";
import { useUser } from "../../Contexts/userContext";


export function PrivateRoute({children}){
    console.log("Imprimiendo UseUser", useUser())
    const {user, isLoading}=useUser();
    if(isLoading){
        return <h1> Loading User</h1>
    }

    if(!isLoading && !user){
        return <Navigate to={LOGIN_URL}/>
    }
    return children
}