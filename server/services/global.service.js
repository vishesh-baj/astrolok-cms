// this are serivices used by any admin or astologer or user api

class GlobalService {
    async checkThisApiIsAllowedOrNot(req,validateApi){
      if(req?.user?.role === validateApi){
        return true;

      }
      else{
        return false
      }
    }  
}

module.exports = GlobalService