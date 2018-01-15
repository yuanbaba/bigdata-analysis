class IndexAPI{
    constructor(){

    }
    /**
     *  登录
     *  param:username,pwd
     * */
    login = (param) =>{
        return new Promise((resolve,reject)=>{
            try{
                resolve(param);
            }catch(e){
                reject(e);
            }
        })
    }
}
module.exports = new IndexAPI();
