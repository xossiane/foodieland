import React, { useState } from "react";

export const AddArticleContext = React.createContext({
  articles: [],
  isLoading: false,
  error: null,
});

const AddArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <AddArticleContext.Provider value={{ articles, addArticleHandler }}>
      {children}
    </AddArticleContext.Provider>
  );
};
