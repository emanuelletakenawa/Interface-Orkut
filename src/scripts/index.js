function handleModal(){
    const button = document.querySelector("#btnCadastrar")
    const buttonPassword = document.querySelector("#forgot")
    const modalContainer1 = document.querySelector("#modalCadastro")
    const modalContainer2 = document.querySelector("#modalPassword")

    button.addEventListener("click", function(){
        modalContainer1.showModal()
    })

    buttonPassword.addEventListener("click", function(){
        modalContainer2.showModal()
    })
    closeModal()
    
}
handleModal()


function closeModal(){
    const button = document.querySelectorAll("#closeModal")
    const modalContainer1 = document.querySelector("#modalCadastro")
    const modalContainer2 = document.querySelector("#modalPassword")

    for(let i=0; i<button.length; i++){
        button[i].addEventListener("click", function(){
            modalContainer1.close()
            modalContainer2.close()
        })
    }
}


let check = document.querySelector(".rememberPassword")
let imgCheck = document.querySelector("#imgCheck")
check.addEventListener("click", function(){
    imgCheck.classList.toggle("rememberPasswordCheckTrue")
})


function enter(){
    const inputEmail = document.querySelectorAll("#email")
    const inputPassword = document.querySelectorAll("#password")
    const inputName = document.querySelector("#name")

    for(let i=0; i<inputEmail.length; i++){
        inputEmail[i].value=""
    }

    for(i=0; i<inputPassword.length; i++){
        inputPassword[i].value=""
    }

    inputName.value=""
}