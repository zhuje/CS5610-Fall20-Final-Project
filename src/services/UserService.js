
//logout gets called in Profile.js
export const logout = () =>
    fetch(`http://localhost:8080/logout`, {
        method: 'POST',
        credentials: "include"
    })
//logout does not need to parse (no response required)


export const profile = () =>
    fetch(`http://localhost:8080/profile`, {
        method: 'POST',
        credentials: "include"  //must pass cookie to participate in a session
    }).then(response => response.json())
