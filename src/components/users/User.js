import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-lines
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      <p>
        Hireable:{" "}
        {hireable ? (
          <i className='fas fa-chceck text-success' />
        ) : (
          <i className='fa fa-times-circle text-danger' />
        )}
      </p>
      <div className='card grid-2'>
        <img
          src={avatar_url}
          className='round-img'
          alt=''
          style={{
            width: "150px"
          }}
        />
        <h1>{name}</h1>
        <p>Location: {location}</p>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:{bio}</h3>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visist my Bio
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:{login}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:{company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <b>Website:{blog}</b>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Reop: {public_repos}</div>
        <div className='badge badge-dark'>Public Gist: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
