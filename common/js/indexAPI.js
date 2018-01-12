class IndexAPI{
    constructor(){

    }
    login = param => {
        return new Promise((resolve,reject)=>{
            try{
                resolve(param);
            }catch (e){
                reject(e);
            }

        })

    }
}
module.exports = new IndexAPI();