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
    const inputs = document.querySelectorAll(".input")

    for(let i=0; i<inputs.length; i++){
        inputs[i].value=""
    }
}