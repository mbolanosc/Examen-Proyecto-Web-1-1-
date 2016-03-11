angular.module('localStorageServiceBank', ['LocalStorageModule'])
  .factory("bankStorage", function(localStorageService) {
   var ServiceArray = [];
  

  /**
   * [Storage description:
   * looks for 'infoArray' into localstorage]
   */
   var Storage = function (){
     if(localStorageService.get('todos')){
            return localStorageService.get('todos');
        }else{
            return [];
        }
    };
   
    var setingArray = function (array){
      localStorageService.set("todos", array);
    };
    
    /**
    * [setArray description: receives an array and returns another array]
    * @param {[array]} pinfoArray [description]
    */
    var setArray = function(array){
      ServiceArray = array;
    };
    
    /**
    * [getArray description]
    * @return {[array]} [description: returns the array that defines setArray(function)]
    */
    var getArray = function(){
      return ServiceArray;
    };
    
   return {
     storage: Storage,
     set: setingArray,
     setArray: setArray,
     getArray: getArray
    }
  }
);

