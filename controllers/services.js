const Service = require('../models/Service')

module.exports = {
    getServices: async (req,res)=>{
        console.log(req.user)
        try{
            const services = await Service.find({userId:req.user.id})
            const servicesCompleted = await Service.countDocuments({userId:req.user.id,completed: true})
            res.render('services.ejs', {services: services, left: servicesCompleted, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createService: async (req, res)=>{
        try{
            await Service.create({service: req.body.service, completed: true, userId: req.user.id})
            console.log('Servicelapp inskickad!')
            res.redirect('/services')
        }catch(err){
            console.log(err)
        }
    },
    editService: async (req, res)=>{
        try{
            await Service.findOneAndUpdate({_id:req.body.serviceIdFromJSFile},{
                completed: true
            })
            console.log('Edited service')
            res.json('Edited service')
        }catch(err){
            console.log(err)
        }
    },
    deleteService: async (req, res)=>{
        console.log(req.body.serviceIdFromJSFile)
        try{
            await Service.findOneAndDelete({_id:req.body.serviceIdFromJSFile})
            console.log('Deleted Service')
            res.json('Deleted Service')
        }catch(err){
            console.log(err)
        }
    }
}    