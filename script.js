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
        
        inpNewTask.val("")
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
    togglebtn(ulTasks.children().length)
    $('#ulTasks .done').appendTo(ulTasks)
})



inpNewTask.on('input',()=>{
    togglebtn(ulTasks.children().length)
    if(inpNewTask.val().trim()==""){
        $('#btnReset').toggleClass("disabled",true)
        $('#btnAdd').toggleClass("disabled",true)

    }
    else{
        $('#btnReset').toggleClass("disabled",false)
        $('#btnAdd').toggleClass("disabled",false)
    }

})

function togglebtn(e){
    if(e){

    }
    else{
       btnClean.prop("disabled",false)
       btnSort.prop("disabled",false)
    }
}

ulTasks.click(()=>{
    if($('#ulTasks .done').length==0){
        $('#btnClean').toggleClass("disabled",true)
        $('#btnSort').toggleClass("disabled",true)   

    }
    else{
        $('#btnClean').toggleClass("disabled",false)
        $('#btnSort').toggleClass("disabled",false) 
    }
})