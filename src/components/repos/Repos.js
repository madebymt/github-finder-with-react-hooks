import React from "react";
import RepoItem from "./RepoItems";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.length >= 0 ? (
        repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
      ) : (
        <p>Waiting data</p>
      )}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
