function showAlert(event, form) {
    event.preventDefault();
    $("#myAlert").css("display", "");
    setTimeout(function () {
        form.submit();


    }, 5000);


}

function showToast() {
    $("#myToast").toast("show");

}