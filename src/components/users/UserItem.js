import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <p>{login}</p>
      <img src={avatar_url} className='round-img' alt='' />

      <Link to={`user/${login}`}>
        <button className='btn btn-dark btn-sm my-1'>See more</button>
      </Link>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
