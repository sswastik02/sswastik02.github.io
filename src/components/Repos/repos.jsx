import React from 'react';
import "./repos.css"
class Repos extends React.Component {
    renderRepo(repo){
        console.log(repo)
        return <div className="repo">
            <a href={repo.html_url}>
            <div className="repo-name">
            <p>{repo.name}</p>
            </div>
            <div className="repo-desc">
                {repo.description ?? 'No description'}
            </div>
            <div className="repo-language">
                {repo.language}
            </div>
            </a>
        </div>
    }

    renderRepos(){
        return <React.Fragment>
            {this.props.repos.map((repo)=> this.renderRepo(repo) )}
        </React.Fragment>
    }
    render() { 
        return <div id="repos">
            {this.renderRepos()}
        </div>;
    }
}
 
export default Repos;