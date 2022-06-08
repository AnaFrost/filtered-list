
const getComments = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const renderComments = async () => {
    let comments = await getComments();
    let html = "";
    comments.forEach(comment => {
        let htmlSegment = `<div class="card">
                            <h2 class="card__name">${comment.name}</h2>
                            <p class="card__email">${comment.email}</p>
                            <p class="card__body">${comment.body}</p>
                        </div>`;
        html += htmlSegment;
    });
    let cards = document.querySelector(".cards");
    cards.innerHTML = html;
};

renderComments();