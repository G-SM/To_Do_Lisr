let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnClean = $('#btnClean')
let btnSort = $("#btnSort")

btnAdd.click(adbtn)
function adbtn() {

    if(inpNewTask.val().trim()!==""){

        let listItem = $('<li>',{
            'class':'list-group-item',
            text: inpNewTask.val()
        })
        listItem.click((event)=>{
            
            $(event.target).toggleClass("done")
        })
    
        ulTasks.append(listItem)
        inpNewTask.val("")
        $('#btnReset').toggleClass("disabled",true)
        $('#btnAdd').toggleClass("disabled",true)        
    }   
    else{
        

    }


}




inpNewTask.keypress((e)=>{
    if(e.which==13){
        adbtn()
    }
})

function clearDone(){
    $('#ulTasks .done').remove()
}


btnReset.click(()=>{
    inpNewTask.val("")
    $('#btnReset').toggleClass("disabled",true)
    $('#btnAdd').toggleClass("disabled",true)
})

btnClean.click(clearDone)

btnSort.click(()=>{
    $('#ulTasks .done').appendTo(ulTasks)
})

function toggleResetBtn(enabled){
    if(enabled){
        btnReset.prop('disabled',false)
    }
    else{
        btnReset.prop('disabled',true)
    }
}
inpNewTask.on('input',()=>{
    if(inpNewTask.val().trim()==""){
        $('#btnReset').toggleClass("disabled",true)
        $('#btnAdd').toggleClass("disabled",true)

    }
    else{
        $('#btnReset').toggleClass("disabled",false)
        $('#btnAdd').toggleClass("disabled",false)
    }

})