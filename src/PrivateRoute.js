import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from "./auth";

/*
Decorator component will be used by any route that needs to be behind authentication.
 */
function PrivateRoute({component: Component, ...rest}) {
    const {authTokens} = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ) : (
                    //when the user logs in, they will either be redirected to the referer, or to the home page
                    //passing state to redirect
                    <Redirect to={{pathname: "/login", state: {referer: props.location}}}
                    />
                )
            }
        />
    );
}

/*
Here, we’re using our hook and pulling whatever value is stored in our AuthContext.
Later we’ll be using tokens to update this value. For now, it is set to false.
 That means isAuthenticated will always be false, so when we hit the logic in our
 Route render prop, it will redirect us to the home page. Later, this will be to the
  login page, but for now, if you test this out, you should not be able to reach the admin page —
   you’ll be stuck on the home page.
 */

export default PrivateRoute;