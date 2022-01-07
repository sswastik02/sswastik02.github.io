import React from 'react';
import "./profile.css"
class Profile extends React.Component {

    state = {
        showNameUsernameSameLine:(window.innerWidth > 800)
    }
    constructor(props){
        super(props)
        this.state = {
            showNameUsernameSameLine:(window.innerWidth > 800)
        }
        this.updateShowNameUserNameSameLine = this.updateShowNameUserNameSameLine.bind(this)
        window.addEventListener('resize',this.updateShowNameUserNameSameLine)
    }

    updateShowNameUserNameSameLine=()=>{
        this.setState({
            showNameUsernameSameLine:(window.innerWidth > 800)
        })
    }

    renderAvatar(){
        return (this.state.showNameUsernameSameLine)? <div className="avatar">
        <div className="followers">
            Followers
            <div className="followers-number">{this.props.user.followers}</div>
        
        </div>
        <img src={this.props.user.avatarUrl} alt="" />
        <div className="following">
            Following
            <div className="following-number">{this.props.user.following}</div>
        </div>
    </div>: <div className="avatar">
    <img src={this.props.user.avatarUrl} alt="" />
    </div>
    }

    renderUserDetails(){
        return (this.state.showNameUsernameSameLine)? <div className="user-details">
        <span className="username" id='hidden-username'>
                {` @${this.props.user.username}`}
            </span>
            <span className="name">
                {" ".repeat(` @${this.props.user.username}`.length)+this.props.user.name}
            </span>
            <span className="username">
                {` @${this.props.user.username}`}
            </span>
        </div> : <React.Fragment> <div className="user-details">
            <span className="name">
                {this.props.user.name}
            </span>
        </div>
        <div className="username">
        {` @${this.props.user.username}`}
        </div>
        </React.Fragment>
    }
    
    render() { 
        return <div id = "profile">
            {this.renderAvatar()}
            {this.renderUserDetails()}
            <div className="quote">
            “Programming can be fun, and so can cryptography; however, they should not be combined.”
            </div>
        </div>;
    }
}
 
export default Profile;