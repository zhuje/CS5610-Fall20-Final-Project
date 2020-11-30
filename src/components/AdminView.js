//get Admin View of list of users
//get table of users from repo
import React from "react";
export default class AdminView extends React.Component{

    render(){
        return(
            <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role</th>
                    <th>&nbsp;</th>
                   {/*empty for last column*/}
                </tr>

                <tr className="wbdv-form">
                    <td><input id="usernameFld" className="form-control"
                               placeholder="Username"/></td>
                    <td><input id="passwordFld" className="form-control"
                               placeholder="Password"/></td>
                    <td><input id="firstNameFld" className="form-control"
                               placeholder="First Name"/></td>
                    <td><input id="lastNameFld" className="form-control"
                               placeholder="Last Name"/></td>
                    <td><select id="roleFld" className="form-control">
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                        <option value="ADMIN">Admin</option>
                    </select></td>
                    <td>
                        {/*search, edit, and update buttons*/}
                        <span className="float-right" style="white-space: nowrap">
                        <i className="fa-2x fa fa-search wbdv-search"></i>
                        <i className="fa-2x fa fa-plus wbdv-create"></i>
                        <i className="fa-2x fa fa-check wbdv-update"></i>
                      </span>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr className="wbdv-template wbdv-user wbdv-hidden">
                    <td className="wbdv-username">ada</td>
                    <td className="wbdv-field wbdv-password">p@sswOrd</td>
                    <td className="wbdv-first-name">Ada</td>
                    <td className="wbdv-last-name">Lovelace</td>
                    <td className="wbdv-role">FACULTY</td>
                    <td className="wbdv-actions">
                <span className="float-right">
                    <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    <i className="fa-2x fa fa-pencil wbdv-edit"></i>
                </span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

        )
    }
}
