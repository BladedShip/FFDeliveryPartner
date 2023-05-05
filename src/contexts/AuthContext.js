import { createContext, useEffect, useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listDeliveryPeople } from "../graphql/queries";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [dbCourier, setDbCourier] = useState(null);
    const sub = authUser?.attributes?.sub;

    console.log(dbCourier)

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
    },[]);

    useEffect(() => {
        API.graphql(
            graphqlOperation(listDeliveryPeople, { sub: sub })
        ).then(res=>setDbCourier(res.data.listDeliveryPeople.items[0]))
    },[sub]);

    return(
        <AuthContext.Provider value={{ authUser, dbCourier, sub, setDbCourier }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;