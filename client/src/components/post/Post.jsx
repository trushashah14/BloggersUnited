import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://bloggersunited.onrender.com/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <span className="postauthor">
          by {post.username}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}