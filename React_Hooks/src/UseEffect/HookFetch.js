import React, { useEffect, useState } from "react";
import axios from "axios";
function HookFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <ul>
        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button type="button" onClick={() => setIdFromButtonClick(id)}>
          Fetch Post
        </button>
        <h2>{post.title}</h2>
        {/* {posts.map((item) => {
          return <li>{item.title}</li>;
        })} */}
      </ul>
    </div>
  );
}

export default HookFetch;
