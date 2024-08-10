const loadComment = () => {
    const commentUrl = `https://jsonplaceholder.typicode.com/comments`;
    fetch(commentUrl)
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 20)));
}

const displayComment = (comments) => {
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = '';

    for (const comment of comments) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('p-4', 'bg-white', 'shadow-md', 'rounded-md', 'hover:bg-gray-100', 'cursor-pointer', 'transition', 'duration-300');
        newDiv.innerHTML = `
            <h4 class="font-bold text-lg mb-2">POST Id: ${comment.postId}</h4>
            <p><strong>Id:</strong> ${comment.id}</p>
            <p><strong>Name:</strong> ${comment.name}</p>
            <p><strong>Email:</strong> ${comment.email}</p>
            <p class="mt-2"><strong>Comment:</strong> ${comment.body}</p>
        `;

        // Use onclick to handle the click event
        newDiv.onclick = () => loadPostDetails(comment.postId);

        displayContainer.appendChild(newDiv);
    }
}

const loadPostDetails = (postId) => {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(postUrl)
        .then(res => res.json())
        .then(post => displayPostDetails(post))
        .catch(error => console.error('Error fetching post details:', error));
}

const displayPostDetails = (post) => {
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = ''; 

    const postDiv = document.createElement('div');
    postDiv.classList.add('p-6', 'bg-white', 'shadow-lg', 'rounded-md');
    postDiv.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Post Details</h2>
        <h4 class="font-bold text-lg">Post Id: ${post.id}</h4>
        <h4 class="font-bold text-lg">Title: ${post.title}</h4>
        <p class="mt-4">${post.body}</p>
    `;

    displayContainer.appendChild(postDiv);
}
