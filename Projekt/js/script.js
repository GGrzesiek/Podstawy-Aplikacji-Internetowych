document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Retrieve form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('description').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const category = document.getElementById('category').value;
    const date = new Date().toLocaleDateString();
    
    // Create comment data object
    const commentData = {
        username,
        email,
        comment,
        rating,
        category,
        date
    };
    
    // Retrieve comments from localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    // Add new comment to comments array
    comments.push(commentData);
    
    // Save comments to localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
    
    // Clear form fields
    document.getElementById('commentForm').reset();
    
    // Display comments
    displayComments();
});

function displayComments() {
/*
DisplayComments() function is responsible for displaying comments on a web page.
First, the function retrieves the container element where the comments will be displayed using the getElementById() method. 
It looks for an element with the id "commentsContainer" in the HTML document. 
This element will serve as a parent container for all the comments.

Next, the innerHTML property of the commentsContainer element is set to an empty string.
This ensures that any existing comments are cleared before displaying the new comments.
This is done by assigning an empty string to the innerHTML property, effectively removing all child elements from the container.

The function then retrieves the comments from the browser's local storage using the getItem() method of the localStorage object.
The comments are stored as a JSON string, so the JSON.parse() method is used to convert the JSON string back into an array of comment objects.
If there are no comments in the local storage, an empty array is assigned to the comments variable.

Next, the function iterates over each comment in the comments array using the forEach() method.
For each comment, a new div element is created using the createElement() method.
This div element represents an individual comment and will contain the comment's content.
Inside the commentDiv, various HTML elements are created and appended to it using the innerHTML property.
These elements include an image, a username, a date, a category, the comment text, and two buttons for editing and deleting the comment.
The content of these elements is populated with the corresponding properties of the comment object.

Finally, the commentDiv is appended as a child element to the commentsContainer using the appendChild() method.
This adds the comment to the web page, making it visible to the user.
Overall, the displayComments() function retrieves comments from local storage, creates HTML elements to represent each comment, and appends them to the web page.
This allows the comments to be displayed dynamically whenever the function is called.
*/
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';
    
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    comments.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment', 'marg25');
        
        commentDiv.innerHTML = `
            <img class="img_comm" alt="profilowe" src="img/user.png">
            <div class="comm_name">${comment.username} <span>- ${comment.date}</span></div>
            <div class="comm_category">Kategoria: ${comment.category}</div>
            <p class="text_cont com_top">${comment.comment}</p>
            <button class="edit-button" onclick="editComment(${index})">Edytuj</button>
            <button class="delete-button" onclick="deleteComment(${index})">Usuń</button>
        `;
        
        commentsContainer.appendChild(commentDiv);
    });
}

function editComment(index) {
/*
The editComment() function is responsible for populating the comment form with the data of the selected comment for editing.
The function takes an index parameter, which represents the index of the comment in the comments array.
This index is used to retrieve the corresponding comment object from the comments array stored in local storage.
*/
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments[index];
    
    document.getElementById('username').value = comment.username;
    document.getElementById('email').value = comment.email;
    document.getElementById('description').value = comment.comment;
    document.querySelector(`input[name="rating"][value="${comment.rating}"]`).checked = true;
    document.getElementById('category').value = comment.category;
    
    deleteComment(index);
}

function deleteComment(index) {
/*
The deleteComment() function is responsible for deleting a comment from the comments array stored in local storage.
The function takes an index parameter, which represents the index of the comment to be deleted.
The function retrieves the comments array from local storage using the getItem() method of the localStorage object.
The comments array is then parsed from a JSON string to a JavaScript array using the JSON.parse() method.
If there are no comments in local storage, an empty array is assigned to the comments variable.
*/
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments();
}

// Display comments after page load
window.onload = displayComments;
