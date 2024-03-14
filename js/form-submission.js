function postToGoogle() {
    var nameVar = $("#Name").val();
    var phoneVar = $("#Phone").val();
    var queryVar = $("#Message").val();
    var displayMsg = `Thank you for submitting your query, ${nameVar}!\nI will get back to you shortly.`;

    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGcPXJU9H-BNaqAmRgu_tba29qHG8IvhvQbAJy_AH4xp6UbA/formResponse",    
        data: {
            "entry.1385933446": nameVar,
            "entry.1009612250": phoneVar,
            "entry.853574267": queryVar
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
            $('#contact').trigger('reset');
            alert(displayMsg);
        },
        error: function (x, y, z) {
            $('#contact').trigger('reset');
            alert(displayMsg);
        }
    });
    return false;
}