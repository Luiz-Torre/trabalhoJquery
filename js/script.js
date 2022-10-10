/// <reference path="../typings/globals/jquery/index.d.ts" />


function showToast() {
    $("#myToast").toast("show");

}

$(function(){
  $("#botao-enviar").click(function(event){
    event.preventDefault();
    let validaCampos = validaCamposFunction()
    if(validaCampos){
        event.preventDefault();
        $("#myAlert").css("display", "");
        setTimeout(function () {
            $("#form_contato").submit();
    
    
        }, 5000);
    }

  }
  )  
},
    $("#img_like").click(function(){
    let like = $("#img_like")
    let like_data = $("#like").data("like")
    let dislike_data = $("#dislike").data("dislike")

    $("#dislike").text(dislike_data)


    let dislike = $("#img_dislike")
    if(like.hasClass("far fa-thumbs-up")){
    $("#like").text(like_data+1)
    like.removeClass("far fa-thumbs-up")
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")
    like.addClass("fas fa-thumbs-up")
    }
    else{
    $("#like").text(like_data)
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")

    }



    }
    ),
    $("#img_dislike").click(function(){
    let like = $("#img_like")
    let like_data = $("#like").data("like")
    let dislike_data = $("#dislike").data("dislike")

    $("#like").text(like_data)
    $("#dislike").text(dislike_data+1)
    let dislike = $("#img_dislike")


    if(dislike.hasClass("far fa-thumbs-down")){
    $("#dislike").text(dislike_data+1)
    dislike.removeClass("far fa-thumbs-down")
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")
    dislike.addClass("fas fa-thumbs-down")
    }
    else{
    $("#dislike").text(dislike_data)
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")

    }
    }),
    $("#img_like2").click(function(){
    let like = $("#img_like2")
    let like_data = $("#like2").data("like")
    let dislike_data = $("#dislike2").data("dislike")

    $("#dislike2").text(dislike_data)


    let dislike = $("#img_dislike2")
    if(like.hasClass("far fa-thumbs-up")){
    $("#like2").text(like_data+1)
    like.removeClass("far fa-thumbs-up")
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")
    like.addClass("fas fa-thumbs-up")
    }
    else{
    $("#like2").text(like_data)
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")

    }
    }),
    $("#img_dislike2").click(function(){
    let like = $("#img_like2")
    let like_data = $("#like2").data("like")
    let dislike_data = $("#dislike2").data("dislike")

    $("#like2").text(like_data)
    $("#dislike2").text(dislike_data+1)
    let dislike = $("#img_dislike2")


    if(dislike.hasClass("far fa-thumbs-down")){
    $("#dislike2").text(dislike_data+1)
    dislike.removeClass("far fa-thumbs-down")
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")
    dislike.addClass("fas fa-thumbs-down")
    }
    else{
    $("#dislike2").text(dislike_data)
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")

    }
    }),

    $("#img_like3").click(function(){
    let like = $("#img_like3")
    let like_data = $("#like3").data("like")
    let dislike_data = $("#dislike3").data("dislike")

    $("#dislike3").text(dislike_data)


    let dislike = $("#img_dislike3")
    if(like.hasClass("far fa-thumbs-up")){
    $("#like3").text(like_data+1)
    like.removeClass("far fa-thumbs-up")
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")
    like.addClass("fas fa-thumbs-up")
    }
    else{
    $("#like3").text(like_data)
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")

    }
    }),
    $("#img_dislike3").click(function(){
    let like = $("#img_like3")
    let like_data = $("#like3").data("like")
    let dislike_data = $("#dislike3").data("dislike")

    $("#like3").text(like_data)
    $("#dislike3").text(dislike_data+1)
    let dislike = $("#img_dislike3")


    if(dislike.hasClass("far fa-thumbs-down")){
    $("#dislike3").text(dislike_data+1)
    dislike.removeClass("far fa-thumbs-down")
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")
    dislike.addClass("fas fa-thumbs-down")
    }
    else{
    $("#dislike3").text(dislike_data)
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")

    }
    }),

    $("#img_like4").click(function(){
    let like = $("#img_like4")
    let like_data = $("#like4").data("like")
    let dislike_data = $("#dislike4").data("dislike")

    $("#dislike4").text(dislike_data)


    let dislike = $("#img_dislike4")
    if(like.hasClass("far fa-thumbs-up")){
    $("#like4").text(like_data+1)
    like.removeClass("far fa-thumbs-up")
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")
    like.addClass("fas fa-thumbs-up")
    }
    else{
    $("#like4").text(like_data)
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")

    }
    }),
    $("#img_dislike4").click(function(){
    let like = $("#img_like4")
    let like_data = $("#like4").data("like")
    let dislike_data = $("#dislike4").data("dislike")

    $("#like4").text(like_data)
    $("#dislike4").text(dislike_data+1)
    let dislike = $("#img_dislike4")


    if(dislike.hasClass("far fa-thumbs-down")){
    $("#dislike4").text(dislike_data+1)
    dislike.removeClass("far fa-thumbs-down")
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")
    dislike.addClass("fas fa-thumbs-down")
    }
    else{
    $("#dislike4").text(dislike_data)
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")

    }
    }),
    $("#img_like5").click(function(){
    let like = $("#img_like5")
    let like_data = $("#like5").data("like")
    let dislike_data = $("#dislike5").data("dislike")

    $("#dislike5").text(dislike_data)


    let dislike = $("#img_dislike5")
    if(like.hasClass("far fa-thumbs-up")){
    $("#like5").text(like_data+1)
    like.removeClass("far fa-thumbs-up")
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")
    like.addClass("fas fa-thumbs-up")
    }
    else{
    $("#like5").text(like_data)
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")

    }
    }),
    $("#img_dislike5").click(function(){
    let like = $("#img_like5")
    let like_data = $("#like5").data("like")
    let dislike_data = $("#dislike5").data("dislike")

    $("#like5").text(like_data)
    $("#dislike5").text(dislike_data+1)
    let dislike = $("#img_dislike5")


    if(dislike.hasClass("far fa-thumbs-down")){
    $("#dislike5").text(dislike_data+1)
    dislike.removeClass("far fa-thumbs-down")
    like.removeClass("fas fa-thumbs-up")
    like.addClass("far fa-thumbs-up")
    dislike.addClass("fas fa-thumbs-down")
    }
    else{
    $("#dislike5").text(dislike_data)
    dislike.removeClass("fas fa-thumbs-down")
    dislike.addClass("far fa-thumbs-down")

    }
    }),
    $("#img_like6").click(function(){
    let like = $("#img_like6")
    let like_data = $("#like6").data("like")
    let dislike_data = $("#dislike6").data("dislike")

    $("#dislike6").text(dislike_data)


    let dislike = $("#img_dislike6")
    if(like.hasClass("far fa-thumbs-up")){
        $("#like6").text(like_data+1)
        like.removeClass("far fa-thumbs-up")
        dislike.removeClass("fas fa-thumbs-down")
        dislike.addClass("far fa-thumbs-down")
        like.addClass("fas fa-thumbs-up")
    }
    else{
        $("#like6").text(like_data)
        like.removeClass("fas fa-thumbs-up")
        like.addClass("far fa-thumbs-up")

    }
    }),
    $("#img_dislike6").click(function(){
        let like = $("#img_like6")
        let like_data = $("#like6").data("like")
        let dislike_data = $("#dislike6").data("dislike")

        $("#like6").text(like_data)
        $("#dislike6").text(dislike_data+1)
        let dislike = $("#img_dislike6")


        if(dislike.hasClass("far fa-thumbs-down")){
            $("#dislike6").text(dislike_data+1)
            dislike.removeClass("far fa-thumbs-down")
            like.removeClass("fas fa-thumbs-up")
            like.addClass("far fa-thumbs-up")
            dislike.addClass("fas fa-thumbs-down")
        }
        else{
            $("#dislike6").text(dislike_data)
            dislike.removeClass("fas fa-thumbs-down")
            dislike.addClass("far fa-thumbs-down")

        }
        }),
)

//Aqui eu valido o formulario da pagina de contatos
function validaCamposFunction(){
    let nome = $("#nome")
    let sobrenome = $("#sobrenome")
    let email = $("#email")
    let telefone = $("#telefone")
    let fullfeedback = $("#fullfeedback")
    let verifica = true;
    if(nome.val() == ''){
        nome.addClass("is-invalid")
        nome.removeClass("is-valid")
        verifica = false;

    }
    else{
        nome.addClass("is-valid")
        nome.removeClass("is-invalid")
    }
    if(sobrenome.val() == ''){
        sobrenome.addClass("is-invalid")
        sobrenome.removeClass("is-valid")
        verifica = false

    }
    else{
        sobrenome.addClass("is-valid")
        sobrenome.removeClass("is-invalid")
    }
    if(email.val() == ''){
        email.addClass("is-invalid")
        email.removeClass("is-valid")
        verifica = false

    }
    else{
        email.addClass("is-valid")
        email.removeClass("is-invalid")
    }

    if(telefone.val() == ''){
        telefone.addClass("is-invalid")
        telefone.removeClass("is-valid")
        verifica = false

    }
    else{
        telefone.addClass("is-valid")
        telefone.removeClass("is-invalid")
    }

    
    if(fullfeedback.val() == ''){
        fullfeedback.addClass("is-invalid")
        fullfeedback.removeClass("is-valid")
        verifica = false

    }
    else{
        fullfeedback.addClass("is-valid")
        fullfeedback.removeClass("is-invalid")
    }
    return verifica;
}
