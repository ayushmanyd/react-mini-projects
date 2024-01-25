export default function UserData({ user }) {
  const { avatar_url, followers, public_repos, name, login } = user;

  return (
    <div className="user">
      <div className="profilepic">
        <img src={avatar_url} alt="User Profile Pic" />
      </div>
      <div className="githubid">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
    </div>
  );
}
