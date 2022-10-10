import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/post.css';

const Post = (props) => {
  const navigate = useNavigate();

  //navigate to the detail page of the post
  const handleClick = () => {
    navigate('/detail', {
      state: { props: props.post },
    });
  };

  return (
    <div className="container-card">
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h3>{props?.post.title} </h3>
          <div>
            <img src={props.post.author.avatar} alt="avatar" />
            {props?.post.author.name}
          </div>

          <p className="dateHome">
            {new Date(props.post.publishDate).toLocaleDateString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
