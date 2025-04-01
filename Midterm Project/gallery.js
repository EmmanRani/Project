function toggleLike(heartElement) {
    let heartImage = heartElement.querySelector("img");

    if (heartImage.src.includes("heart.png")) {
        heartImage.src = "images/heart-filled.png";
        heartImage.style.filter = "drop-shadow(0 0 10px red)";
    } else {
        heartImage.src = "images/heart.png";
        heartImage.style.filter = "none";
    }
}

function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Please enter a comment before posting!");
        return;
    }

    let commentsList = button.parentElement.querySelector(".comments-list");
    let newComment = document.createElement("li");
    newComment.textContent = commentText;

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = " ❌";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.color = "red";
    deleteBtn.onclick = function () {
        newComment.remove();
    };

    newComment.appendChild(deleteBtn);
    commentsList.appendChild(newComment);

    commentInput.value = "";
}


document.addEventListener("DOMContentLoaded", function () {
    let commentInputs = document.querySelectorAll(".comment-input");

    commentInputs.forEach((input) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                addComment(this.nextElementSibling);
            }
        });
    });
});

