const rows = document.querySelectorAll("#ratingsTable tr");

rows.forEach((row) => {
  const averageCell = row.querySelector("td:nth-child(7)");
  if (averageCell) {
    const average = parseFloat(averageCell.innerText);
    if (average < 3) {
      averageCell.classList.add("red");
    } else if (average < 4) {
      averageCell.classList.add("yellow");
    } else {
      averageCell.classList.add("green");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const userCell = document.querySelector(".user");
  const modal = document.getElementById("modal");
  const modalUsername = document.getElementById("modal-username");
  const fiveRating = document.getElementById("fiveRating");
  const fourRating = document.getElementById("fourRating");

  const closeModal = document.getElementsByClassName("close")[0];

  userCell.addEventListener("click", function () {
    const username = userCell.textContent;
    const ratingInfo = userCell.parentNode.querySelectorAll("td:not(.user)");

    modalUsername.innerText = "Логин : " + username;
    fiveRating.innerText ="+" 
    fourRating.innerText="+"
       
  

    modal.style.display = "block";
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
