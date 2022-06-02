import React, { useEffect, useRef, useState } from "react";
import "./BlogForm.scss";
import Modal from "../Modal";
import { Button } from "../../atoms";
import { storage } from "/src/data/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

function BlogForm({ setShowModal }) {
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    author: "",
    img: "",
  });
  const [isBtnEnable, setIsBtnEnable] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const uploadImage = () => {
    const imageRef = ref(
      storage,
      `article-images/${imageUpload.name + uuid()}`
    );
    uploadBytes(imageRef, imageUpload).then((geturl) => {
      getDownloadURL(geturl.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };

  async function addArticleHandler(article) {
    const response = await fetch(
      "https://webfood-45487-default-rtdb.firebaseio.com/articles.json",
      {
        method: "POST",
        body: JSON.stringify(article),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  // useEffect(() => {
  //   // if () {
  //     console.log("blocked");
  //   }
  // }, [inputs]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    uploadImage();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    const article = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      author: authorRef.current.value,
      date: `${d.getDate()} ${
        monthNames[d.getUTCMonth()]
      } ${d.getUTCFullYear()}`,
      img: imageUrl,
    };
    addArticleHandler(article);
    titleRef.current.value = "";
    descRef.current.value = "";
    authorRef.current.value = "";
  };

  return (
    <Modal setShowModal={setShowModal}>
      <div className="blogform-container">
        <h2 className="blogform__header">New Article</h2>
        <button
          className="blogform__closebtn"
          onClick={() => setShowModal(false)}
        >
          <span className="blogform__closebtn--icon"></span>
        </button>
        <form action="" className="blogform" onSubmit={onSubmitHandler}>
          <label htmlFor="blogform__Title" className="blogform__Title">
            Article Title
          </label>
          <input
            className="blogform__input--text"
            id="blogform__Title"
            type="text"
            name="title"
            placeholder="Article Title..."
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />

          <label
            htmlFor="blogform__Description"
            className="blogform__Description"
          >
            Article Description
          </label>
          <textarea
            className="blogform__input--text"
            id="blogform__Description"
            rows={10}
            name="description"
            placeholder="Article Description..."
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, desc: e.target.value }))
            }
            required
          />

          <label
            htmlFor="blogform__AuthorName"
            className="blogform__AuthorName"
          >
            Author Name
          </label>
          <input
            className="blogform__input--text"
            id="blogform__AuthorName"
            type="text"
            name="authorName"
            placeholder="Author Name..."
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, author: e.target.value }))
            }
            required
          />

          <label htmlFor="blogform__img" className="blogform__AuthorName">
            Article Image
          </label>
          <input
            id="blogform__img"
            type="file"
            name="img"
            accept="image/png, image/jpeg, image/jpg"
            required
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
              setInputs((prev) => ({ ...prev, img: e.target.files[0].name }));
            }}
          />
          <Button className={"button-l"}> Submit </Button>
        </form>
      </div>
    </Modal>
  );
}

export default BlogForm;
