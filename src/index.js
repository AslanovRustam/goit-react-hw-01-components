import ReactDOM from 'react-dom';
import user from './user.json';

function Profile(props) {
  const { src, alt, name, tag, location, followers, views, likes } = props;
  return (
       <div class="profile">
  <div class="description">
    <img
      src={props.src}
      alt={props.alt}
      class="avatar"
    />
    <p class="name">{props.name}</p>
    <p class="tag">{props.tag}</p>
    <p class="location">{props.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{props.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{props.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{props.likes}</span>
    </li>
  </ul>
</div>
  )
  
};

ReactDOM.render(
  <Profile
    src={user.avatar}
    alt={user.name}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes} />,
  document.querySelector('#root'));




//========================================================
  // import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();