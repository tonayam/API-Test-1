const getPost = document.querySelector(`.getPost`);
const createPost = document.querySelector(`.createPost`);
const closeModal = document.querySelector(`.bi-x-lg`);
const submitBtn = document.querySelector(`.submit-btn`);
const inputTitle = document.getElementById(`title`);
const inputBody = document.getElementById(`body`);
const overlay = document.querySelector(`.overlay`);
const div = document.querySelector(`.row`);
let defaultItem = 0;

// OPEN MODAL
createPost.addEventListener(`click`, () => {
  overlay.classList.add(`show-modal`);
});

// CLOSE MODAL
closeModal.addEventListener(`click`, () => {
  overlay.classList.remove(`show-modal`);
});

// CREATE POST
submitBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  div.innerHTML += `<div class='card m-3' style='width: 18rem'>
  <div class='card-body'>
    <h5 class='card-title'>${inputTitle.value}</h5>
    <p class='card-text'>${inputBody.value}</p>
    <div class="options d-flex align-items-center justify-content-center">
        <a href="./post.html" target="_blank">
            <button class="btn btn-info text-light">Read More</button>
        </a>
        <i class="bi bi-trash3-fill fs-2 text-danger ms-2"></i>
    </div>
  </div>
</div>`;
  overlay.classList.remove(`show-modal`);
  inputTitle.value = "";
  inputBody.value = "";
});

// GET POST FROM JSONPLACEHOLDER
getPost.addEventListener(`click`, function () {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (i = 0; i < 1; i++) {
        div.innerHTML += `<div class='card m-3' style='width: 18rem'>
  <div class='card-body'>
    <h5 class='card-title'>${post[defaultItem].id}</h5>
    <p class='card-text'>${post[defaultItem].title}</p>
    <div class="options d-flex align-items-center justify-content-center">
        <a href="./post.html" target="_blank">
            <button class="btn btn-info text-light">Read More</button>
        </a>
        <i class="bi bi-trash3-fill fs-2 text-danger ms-2"></i>
    </div>
  </div>
</div>`;
        defaultItem++;
      }
      const del = document.querySelector(`.bi-trash3-fill`);
      del.addEventListener(`click`, function () {
        fetch(
          `"https://jsonplaceholder.typicode.com/posts/${post[defaultItem].id}"`,
          {
            method: "DELETE",
          }
        );
      });
    });
  console.log();
  // .catch((error) => {
  //   console.log(error);
  // });
});
