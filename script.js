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
        togglebtn()

        
    }   
    else{
        
        inpNewTask.val("")
    }


}
function togglebtn(){
    $('#btnReset').toggleClass("disabled",inpNewTask.val().trim()=="")
    $('#btnAdd').toggleClass("disabled",inpNewTask.val().trim()=="") 

}




inpNewTask.keypress((e)=>{
    if(e.which==13){
        adbtn()
    }
})

function clearDone(){
    $('#ulTasks .done').remove()
    toggleNbtn()
}


btnReset.click(()=>{
    inpNewTask.val("")
    togglebtn()
})

btnClean.click(clearDone)

btnSort.click(()=>{
    
    $('#ulTasks .done').appendTo(ulTasks)
})



inpNewTask.on('input',()=>{

    togglebtn()

})


ulTasks.click(()=>{

    toggleNbtn()
})

function toggleNbtn(){
    $('#btnClean').toggleClass("disabled",$('#ulTasks .done').length==0)
    $('#btnSort').toggleClass("disabled",$('#ulTasks .done').length==0)  
}

