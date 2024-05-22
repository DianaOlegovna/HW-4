

//TASK-3
$(document).ready(function() {
    // Отримати список користувачів з ендпоінту
    $.get("http://jsonplaceholder.typicode.com/users", function(data) {
        // Пройтися по кожному користувачеві
        $.each(data, function(index, user) {
            // Додати посилання на користувача до списку
            $("#userList").append(`<li><a href="user-details.html?id=${user.id}">${user.id} - ${user.name}</a></li>`);
        });
    });
});

