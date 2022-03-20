const descriptionCheck=(desc)=>{

    if(desc.length>10 && desc.length<255){
        return true
    }else{
        return false
    }

}

module.exports=descriptionCheck