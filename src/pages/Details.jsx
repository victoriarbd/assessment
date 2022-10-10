import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/details.css';

const Details = () => {
  const location = useLocation();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="img-details">
              <img
                className="imgDetails"
                src={location.state.props.author.avatar}
                alt="avatar"
              />
              <div className="author-name">
                <p>{location.state.props.author.name}</p>
              </div>
            </div>
          </div>
          <div className="col align-self-center">
            <h3 className="title"> {location.state.props.title}</h3>
            <p className="summary">{location.state.props.summary}</p>
          </div>
          <div className="col align-self-center">
            <ul>
              <li> Categorie(s) :</li>
              {location.state.props.categories.map((category) => (
                <li> - {category.name}</li>
              ))}
            </ul>
            <p className="details-date">
              {new Date(location.state.props.publishDate).toLocaleDateString(
                'en-US'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
