const skillListItems = document.querySelectorAll("#skills li");

skillListItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Muy buena skill, no?");
  });
});
