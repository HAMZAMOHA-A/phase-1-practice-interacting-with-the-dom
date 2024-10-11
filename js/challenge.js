let counter = 0;
let timerId;
let likes = {};
let isPaused = false;

function startTimer() {
    timerId = setInterval(() => {
        counter++;
        document.getElementById('counter').innerText = counter;
    }, 1000);
}

window.onload = startTimer;

document.getElementById('plus').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('heart').addEventListener('click', () => {
    if (!likes[counter]) {
        likes[counter] = 0;
    }
    likes[counter]++;
    document.getElementById('likes').innerText = `${counter} has ${likes[counter]} likes`;
});

document.getElementById('pause').addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(timerId);
        isPaused = true;
        document.getElementById('pause').innerText = 'Resume';
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
    } else {
        startTimer();
        isPaused = false;
        document.getElementById('pause').innerText = 'Pause';
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
    }
});

document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = document.getElementById('comment-input').value;
    const commentsList = document.getElementById('comments');
    const newComment = document.createElement('li');
    newComment.innerText = comment;
    commentsList.appendChild(newComment);
    document.getElementById('comment-input').value = '';
});