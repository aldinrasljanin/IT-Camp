const postsDiv = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((el) => el.json())
  .then((res) => {
    let skraceniPostovi = res.slice(0, 10);
    // console.log(skraceniPostovi);
    for (let post in skraceniPostovi) {
      //   console.log(skraceniPostovi(post));
      const newParagraph = document.createElement("p");
      newParagraph.innerText = post.title;
      postsDiv.append(newParagraph);
    }
  });
