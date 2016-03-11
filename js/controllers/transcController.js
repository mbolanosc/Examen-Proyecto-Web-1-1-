//localStorage.clear();
angular.module('transcControllers', [])

/**
 * [description]
 * @param  {[type]} $scope              [description]
 * @param  {[type]} localStorageService [description]
 * @param  {[type]} bankStorage)        {               $scope.transcArray [description]
 * @return {[type]}                     [description]
 */
  .controller('transctrl', function ($scope , localStorageService, bankStorage) {
    $scope.transcArray = bankStorage.storage();
    bankStorage.setArray($scope.transcArray);
    $scope.addtransc = function() {
      if($scope.TranscForm.$valid){
       $scope.transcArray.push({
               textDate:$scope.txtdate,
               textAmount:$scope.txtAmount,
               textMethod:$scope.txtMethod,
               textDetail:$scope.txtDetail,
            });
            $scope.txtdate = "";
            $scope.txtAmount = "";
            $scope.txtMethod= "";
            $scope.txtDetail = "";
        
            bankStorage.set($scope.transcArray);
            bankStorage.setArray($scope.transcArray);
      }
    };
});
