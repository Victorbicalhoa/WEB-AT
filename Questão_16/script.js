const profilePic = document.querySelector('.profile-pic');
const postImage = document.getElementById('postImage');
const likeIcon = document.getElementById('likeIcon');
const likeCountSpan = document.getElementById('likeCount');
const commentIcon = document.getElementById('commentIcon');
const saveIcon = document.getElementById('saveIcon');
const commentsContainer = document.getElementById('commentsContainer');

let likeCount = 0;

function likePost() {
    if (!likeIcon.classList.contains('fas')) {
        likeIcon.classList.remove('far');
        likeIcon.classList.add('fas', 'red');
        likeCount++;
        likeCountSpan.textContent = likeCount;
    }
}

postImage.addEventListener('dblclick', likePost);

likeIcon.addEventListener('click', likePost);

commentIcon.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Adicionar comentário';
    input.className = 'comment';

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const commentText = document.createElement('p');
            commentText.textContent = input.value;
            commentsContainer.appendChild(commentText);
            input.remove();
        }
    });
    
    commentsContainer.appendChild(input);
    input.focus();
});

saveIcon.addEventListener('click', () => {
    if (!saveIcon.classList.contains('fas')) {
        saveIcon.classList.remove('far');
        saveIcon.classList.add('fas', 'black');
        alert('Post Salvo!');
    }
});
