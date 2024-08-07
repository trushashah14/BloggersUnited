import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://bloggersunited.onrender.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://bloggersunited.onrender.com/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://bloggersunited.onrender.com/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://bloggersunited.onrender.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        linkedinUrl: post.linkedinUrl,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const handleTwitterShare = () => {
    const tweetContent = `Check out "${title}" by ${post.username} on Bloggers United! ${window.location.href}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetContent
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const handleLinkedInShare = () => {
    const shareContent = `Check out "${title}" by ${post.username} on Bloggers United! ${window.location.href}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?text=${encodeURIComponent(
      shareContent
    )}`;
    window.open(linkedinUrl, "_blank");
  };

  const handleFacebookShare = () => {
    const facebookShareURL = "www.google.com";

    let facebookParameters = [];

    facebookParameters.push("u=" + encodeURI(facebookShareURL));
    facebookParameters.push("quote=Check out the blogs");
    const facebookUrl =
      "https://www.facebook.com/sharer/sharer.php?" +
      facebookParameters.join("&");
    // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span>
            Follow me on{" "}
            <a href={post.linkedinUrl} target="_blank">
              LinkedIn
            </a>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}

        <div className="button-container">
          <button
            className="twitter-button"
            id="twitter"
            title="Tweet This!"
            onClick={handleTwitterShare}
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="linkedin-button"
            id="linkedin"
            title="Share This!"
            onClick={handleLinkedInShare}
          >
            <i className="fab fa-linkedin"></i>
          </button>

          <button
            className="facebook-button"
            id="facebook"
            title="Share This!"
            onClick={handleFacebookShare}
          >
            <i className="fab fa-facebook"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
