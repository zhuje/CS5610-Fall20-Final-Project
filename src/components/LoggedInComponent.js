
import React from 'react'



class LoggedInComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name:'',
    //         email:'',
    //         password:'',
    //         id:''
    //     };
    //
    // }
    // componentDidMount(){
    //     document.getElementById('addHyperLink').className = "";
    //     document.getElementById('homeHyperlink').className = "";
    //     document.getElementById('profileHyperlink').className = "active";
    //     this.getProfile();
    // }
    //
    // handleNameChange(e){
    //     this.setState({name:e.target.value})
    // }
    // handlePasswordChange(e){
    //     this.setState({password:e.target.value})
    // }



    render() {
        return (

            <div>

            <h1> User Profile</h1>
                <h3> This Logged In User's view</h3>
            </div>

            // <div className="col-md-5">
            //     <div className="form-area">
            //         <form role="form">
            //             <br styles="clear:both" />
            //             <div className="form-group">
            //                 <input value={this.state.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
            //             </div>
            //             <div className="form-group">
            //                 <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
            //             </div>
            //
            //             {/*<button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>*/}
            //         </form>
            //     </div>
            // </div>
        )
    }
}

export default LoggedInComponent