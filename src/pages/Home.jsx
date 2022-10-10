import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Select from 'react-select';

const Home = () => {
  //all posts
  const [posts, setPosts] = useState([]);
  //number of posts which are visible
  const [visible, setVisible] = useState(4);
  //all categories
  const [listCategory, setListCategory] = useState([]);
  //selected categories
  const [selectedCat, setSelectedCat] = useState([]);
  //selected posts
  const [selectedPost, setSelectedPost] = useState([]);
  //verify if the elements are mounted into the DOM
  const [isMount, setIsMount] = useState(false);

  //increases the number of posts displayed
  const showMorePost = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  //fetch all posts and all categories
  useEffect(() => {
    let list = [];
    axios.get('/api/posts').then((res) => {
      setPosts(res.data.posts);
      setSelectedPost(res.data.posts);
      res.data.posts.forEach((post) => {
        post.categories.forEach((category) => {
          if (!list.includes(category.name)) {
            list.push(category.name);
            setListCategory((current) => [
              ...current,
              { value: category.name, label: category.name },
            ]);
          }
        });
      });
      setIsMount(true);
    });
  }, []);

  // permit to change the list of selected categories to filter posts.
  // if nothing is selected it shows every posts

  useEffect(() => {
    if (selectedCat.length > 0) {
      filterPosts();
    } else if (selectedCat.length == 0) {
      setSelectedPost(posts);
    }
  }, [selectedCat]);

  //filters posts by categories
  const filterPosts = () => {
    let listPosts = [];
    for (let post of posts) {
      for (let category of post.categories) {
        for (let categorySelect of selectedCat) {
          if (categorySelect.label === category.name) {
            //verify that the post is already in the list
            if (!listPosts.includes(post)) {
              listPosts.push(post);
            }
          }
        }
      }
    }
    setSelectedPost(listPosts);
  };

  return (
    isMount && (
      <>
        <div>
          <div className="selectDiv">
            <Select
              isMulti
              name="colors"
              options={listCategory}
              className="select"
              placeholder="Select a category"
              onChange={setSelectedCat}
            />
          </div>
          <List posts={selectedPost} visible={visible} />
          <div className="buttonDiv">
            {visible < selectedPost.length ? (
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={showMorePost}
              >
                {visible > selectedPost.length ? '' : 'Load more'}
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright : Victoria Arbaoui
        </div>
      </>
    )
  );
};

export default Home;
