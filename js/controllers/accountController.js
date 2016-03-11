//localStorage.clear();

angular.module('accountControllers', [])
/**
 * [takes the $scopes from the view and puts them into de array of newAccount]
 * @param  {[$scope-angular view]} $scope             
 * @param  {[service]} localStorageService 
 * @param  {[array]} bankStorage)       
 *  { $scope.accountArray  
 */
  .controller('newaccountctrl', function ($scope , localStorageService, bankStorage) {
    $scope.accountArray = bankStorage.storage();
    bankStorage.setArray($scope.accountArray);
  
    $scope.createAccount = function() {
      if($scope.newAccountForm.$valid){
       $scope.accountArray.push({
               textName:$scope.txtname,
               textTypeaccount:$scope.txtypeacount,
               textCurrency:$scope.txtcurrency,
               textTotalMoney:$scope.txtTotalMoney,
            });
            $scope.txtname = "";
            $scope.txtypeacount = "";
            $scope.txtcurrency = "";
            $scope.txtTotalMoney=null;

            bankStorage.set($scope.accountArray);
            bankStorage.setArray($scope.accountArray);
      }
    };
});