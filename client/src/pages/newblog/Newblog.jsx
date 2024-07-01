import { useContext, useState } from "react";
import "./newblog.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Newblog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.username);
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="newblog">
     {file && (
      <img
        className="newblogImg"src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="newblogForm" onSubmit={handleSubmit}>
        <div className="newblogFormGroup">
          <label htmlFor="fileInput">
            <i className="newblogIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          <input
            className="newblogInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="newblogFormGroup">
          <textarea
            className="newblogInput newblogText"
            placeholder="Write your insights..."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          >
          </textarea>
        </div>
        <button className="newblogSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}