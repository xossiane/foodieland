import React, { useRef, useContext } from "react";
import "./BlogForm.scss";
import Modal from "../Modal";
import { Button } from "../../atoms";
import { AddArticleContext } from "/src/context/AddArticleContext";

function BlogForm() {
  const { addArticleHandler } = useContext(AddArticleContext);

  const titleRef = useRef("");
  const descRef = useRef("");
  const authorRef = useRef("");
  // const ImgRef = useRef('')

  const onSubmitHandler = (e) => {
    e.preventDefault();

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
    const d = new date();
    const article = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      author: authorRef.current.value,
      date: `${d.getDate()} ${
        monthNames[d.getUTCMonth()]
      } ${d.getUTCFullYear()}`,
    };

    addArticleHandler(article);
  };

  return (
    <Modal>
      <div className="blogform-container">
        <h2 className="blogform__header">New Article</h2>
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
            ref={titleRef}
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
            ref={descRef}
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
            ref={authorRef}
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
          />
          <Button className={"button-l"}> Submit </Button>
        </form>
      </div>
    </Modal>
  );
}

export default BlogForm;
