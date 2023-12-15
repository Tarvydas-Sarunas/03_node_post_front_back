"use strict";
console.log("front.js file was loaded");

const API_URL = "http://localhost:3000";

const els = {
  form: document.forms[0],
  postsContainer: document.querySelector("#posts"),
};

els.form.addEventListener("submit", addNewPostHandler);

function addNewPostHandler(e) {
  e.preventDefault();
  const newPostObj = {
    title: els.form.elements.title.value,
    content: els.form.elements.content.value,
    date: els.form.elements.date.value,
  };
  console.log(newPostObj);
  addNewPost(newPostObj);
}

function addNewPost(newPostObj) {
  fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPostObj),
  })
    .then((response) => response.json())
    .then((postsArr) => {
      console.log(postsArr);
      renderPosts(postsArr);
    });
}

// sukurti nauja posta su forma ir gauti atsakyma

// sugeneruoti esamus postus htmle
function getPosts() {
  fetch(`${API_URL}/posts`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data ===", data);
      renderPosts(data);
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
getPosts();

function renderPosts(arr) {
  const HtmlArr = arr.map((post) => {
    return `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>
    <hr>
  `;
  });
  els.postsContainer.innerHTML = HtmlArr.join("");
}
