const { editService } = require("../../controllers/services")

const deleteBtn = document.querySelectorAll('.del')
const service = document.querySelectorAll('span.not')
const servicesCompleted = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteService)
})

Array.from(service).forEach((el)=>{
    el.addEventListener('click', editService)
})


async function deleteService(){
    const serviceId = this.parentNode.dataset.id
    try{
        const response = await fetch('services/deleteService', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'serviceIdFromJSFile': serviceId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


async function editService(){
    const serviceId = this.parentNode.dataset.id
    try{
        const response = await fetch('services/editServices', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'serviceIdFromJSFile': serviceId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}