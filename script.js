let container2 = document.getElementById("container2")
let input = document.getElementById("input")
let addbtn = document.getElementById("addbtn")
let maindelebtn = document.getElementById("maindelebtn")





document.querySelector("#addbtn").addEventListener("click", () => {
    if (input.value) {
        let li = document.createElement("li")
        li.style.listStyle="none"
        let CHECKBOX = document.createElement("input")
        CHECKBOX.type = "checkbox"
        let b = document.createElement("b")
        b.innerText = input.value
        let editbtn = document.createElement("button")
        // editbtn.innerText = "edit"
        let editicon = document.createElement("i")
        editicon.classList.add("fa-solid", "fa-pen")
        editbtn.appendChild(editicon)
        let delbtn = document.createElement("button")
        // delbtn.innerText = "delete"
        let delicon = document.createElement("i")
        delicon.classList.add("fa-solid", "fa-trash")


        delbtn.appendChild(delicon)
        li.appendChild(CHECKBOX)
        li.appendChild(b)
        li.appendChild(editbtn)
        li.appendChild(delbtn)
        container2.appendChild(li)
        // console.log(li)



        delbtn.addEventListener('click', () => [
            li.remove()
        ])


        let input2 = document.createElement("input")
        input2.classList.add("input2")

        editbtn.addEventListener("click", () => {
            b.remove()
            li.appendChild(input2)
            input2.focus()
            li.appendChild(editbtn)
            li.appendChild(delbtn)
            let tick = document.createElement("i")
            tick.classList.add("fa-solid","fa-check")
            li.appendChild(tick)
            editbtn.remove()
            delbtn.remove()
            tick.addEventListener("click",() => {
                let updateinput = input2.value;
                li.textContent.updateinput
                input2.style.border="none"
                tick.remove()
                li.appendChild(editbtn)
                li.appendChild(delbtn)
            })
        })
        maindelebtn.addEventListener("click", () => {
            li.remove()




        })

        input.value = ""

    }

})



// document.getElementById("changetheme").addEventListener("click", () => {

//     document.body.classList.toggle("showdark")




// })

