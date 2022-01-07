let User = class {
    constructor(json){
        this.name = json['name'] ?? ""
        this.username = json['login'] ?? ""
        this.avatarUrl = json['avatar_url'] ?? ""
        this.htmlUrl = json["html_url"] ?? ""
        this.bio = json["bio"] ?? ""
        this.followers = json["followers"] ?? ""
        this.followersUrl = json["followers_url"] ?? ""
        this.following = json["following"] ?? ""
        this.followingUrl = json["following_url"] ?? ""
        this.reposUrl = json["repos_url"] ?? ""
    }
}

export default User