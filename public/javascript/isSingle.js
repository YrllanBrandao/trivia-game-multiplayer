const isSingle = (online, userId)=>{
    const register = online.find(element => element.id === userId);

    if(register !== undefined && register !== null)
    {
        const index = online.indexOf(register);
        //index starting in 1 with increment
        const isSingle = (index+1) % 2 === 0 ? false : true;

        console.log(isSingle)
        return isSingle
    }
    
}


module.exports = isSingle