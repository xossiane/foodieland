import React from "react";
import "./BlogForm.scss";
import Modal from "../Modal";
import { Button } from "../../atoms";

function BlogForm() {
  return (
    <Modal>
      <div className="blogform-container">
        <h2 className="blogform__header">New Article</h2>
        <form action="" className="blogform">
          <label for="blogform__Title" className="blogform__Title">
            Article Title
          </label>
          <input
            className="blogform__input--text"
            id="blogform__Title"
            type="text"
            name="title"
            placeholder="Article Title..."
          />

          <label for="blogform__Description" className="blogform__Description">
            Article Description
          </label>
          <textarea
            className="blogform__input--text"
            id="blogform__Description"
            rows={10}
            name="description"
            placeholder="Article Description..."
          />

          <label for="blogform__AuthorName" className="blogform__AuthorName">
            Author Name
          </label>
          <input
            className="blogform__input--text"
            id="blogform__AuthorName"
            type="text"
            name="authorName"
            placeholder="Author Name..."
          />

          <label for="blogform__img" className="blogform__AuthorName">
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
