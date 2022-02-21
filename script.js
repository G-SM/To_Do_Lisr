let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')
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




btnClear.click(()=>{
    inpNewTask.val("")
})