
$(() => {

  $(".devour-form").on("submit", function(event){
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val()
    var devoured = $(this).children(".burger_id").attr("data-devoured")
    console.log(devoured)
    devoured = devoured === "0" ? 1 : 0
    console.log(devoured)

    console.log(burger_id)
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + burger_id,
      data: {devoured:devoured}
    }).then(function(data){
      console.log(data)
      location.reload()
    })
  })

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newBurger = {
      name: $("#enter_text").val().trim(),
      devoured: 0
    };
  
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
