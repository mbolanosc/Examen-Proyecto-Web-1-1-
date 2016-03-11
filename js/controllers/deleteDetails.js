angular.module('DetailControllers', ['LocalStorageModule'])
/**
 * [takes an id from the url ]
 * @param  {[view]} $scope              [description]
 * @param  {[angularjs]} $routeParams        [description]
 * @param  {[service]} localStorageService [description]
 * @param  {[localstorage]} bankStorage)        
 *         {$scope.transcArray [array that takes everything from the local storage]
 * @return {[type]}
 */
	.controller('detailCtrl', function ($scope , $routeParams, $rootScope, localStorageService, bankStorage) {
    $scope.transcArray = bankStorage.getArray();
    $scope.whichItem = $routeParams.itemId;
    var key = $scope.whichItem;
     /**  
    * [deleteDetails takes an id and from that id the code know 
    * which transaccion delete]
    * @param  {[id]} key
    */
    $rootScope.delete = function(key){ 
        $scope.transcArray.splice(key,1);
        bankStorage.set($scope.transcArray);
        bankStorage.setArray($scope.transcArray);
    };
    
})

