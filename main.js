document.addEventListener("DOMContentLoaded", function () {
    // Sample blog posts
    const blogPosts = [
        { title: "First Post", content: "This is my first blog post." },
        { title: "Second Post", content: "Here's another post on my blog." },
        // Add more posts as needed
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    // Loop through blog posts and create HTML elements
    blogPosts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
});
