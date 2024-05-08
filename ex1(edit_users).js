function btnClick(button) {
    var cardBody = button.closest(".card-body");
    var editName = cardBody.querySelector(".user");
    if (!editName) {
        console.log("Елемент не знайдено!");
        return;
    }
    console.log(editName);
    var name = prompt("Тут ви можете змінити ім'я користувача: ", editName.innerHTML);
    if (name !== null && name.trim() !== "") {
        editName.innerHTML = name.trim(); 
    } else {
        console.log("Операцію зміни імені скасовано.");
    }
}
