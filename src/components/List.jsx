import React from 'react';
import Post from './Post';
import '../styles/list.css';

const List = (props) => {
  return (
    <>
      <div>
        <ul>
          {props.posts.slice(0, props.visible).map((post) => (
            <Post post={post} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
