export default function UserData({ user }) {
  const {
    avatar_url,
    followers,
    bio,
    location,
    public_repos,
    name,
    login,
    repos_url,
  } = user;

  return (
    <div className="user">
      <div className="usertext">
        <div className="profilepic">
          <img className="pic" src={avatar_url} alt="User Profile Pic" />
        </div>
        <div className="githubid">
          <h3>{name}</h3>
          <a href={`https://github.com/${login}`} target="_blank">
            {login}
          </a>
        </div>

        <div className="bio">
          <p>{bio}</p>
        </div>
        <div className="location">
          <p>Location: {location}</p>
        </div>
        <div className="publicrepos">
          <p>
            Public Repositories:
            <a
              href={`https://github.com/${login}?tab=repositories`}
              target="_blank"
            >
              {" "}
              {public_repos} Repos
            </a>
          </p>
        </div>
        <div className="follower">
          <p>Followers: {followers}</p>
        </div>
      </div>
    </div>
  );
}
