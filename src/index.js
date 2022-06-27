import './styles/index.css'


const getComments = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    try {
      return await fetch(url).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
};

const renderComments = (elements) => {
  let html = "";
    if (elements && elements.length) {
      elements.forEach(comment => {
        const htmlSegment = `<li class="card">
                            <h2 class="card__name">${comment.name}</h2>
                            <p class="card__email">${comment.email}</p>
                            <p class="card__body">${comment.body}</p>
                        </li>`;
        html += htmlSegment;
    });
    }
    
    const cards = document.querySelector('.cards');
    cards.innerHTML = html;
};



const init = async () => {
  const comments = await getComments();
  

  renderComments(comments);

  comments.forEach((comment) => {
    if (comment.email.endsWith('.com')) {
      let emailCom = comment;
    } else if (comment.email.endsWith('.biz')) {
      let emailBiz = comment;
    }
  

  })
  
}

init();

function toggleButtonState() {
  const filterButtons = document.querySelectorAll('.pane__button');
  
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('active')){
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
    })
  })
};

toggleButtonState();
