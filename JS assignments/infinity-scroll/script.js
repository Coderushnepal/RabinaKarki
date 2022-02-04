"use strict";

// selecting element
const postWrapper = document.getElementById("posts-wrapper");
const loading = document.querySelector(".loader");
const input_filter = document.getElementById("input_filter");

let limit = 15;
let page = 1;

// fetch data from api
async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await res.json();
    return data;
}

// showing data in UI
async function showPosts() {
    const posts = await getPosts();

    posts.forEach((post) => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <div class="post-title">${post.title}</div>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        postWrapper.appendChild(div);
    });
}

showPosts();

// fetch more post from api
function showLoading() {
    loading.classList.add("show");
    console.log(loading)

    setTimeout(() => {
        loading.classList.remove("show");

        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
}

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

// filtering
function filterPosts(event) {
    const keyword = event.target.value.toUpperCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach((post) => {
        const title = post.querySelector(".post-title").innerText.toUpperCase();
        const body = post.querySelector(".post-body").innerText.toUpperCase();

        if (title.indexOf(keyword) > -1 || body.indexOf(keyword) > -1) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}

input_filter.addEventListener("input", filterPosts);