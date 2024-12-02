app.controller('ExpressionController', function($scope) {
    $scope.bgColor = "white";
});
app.controller('CustomController', function($scope) {
    $scope.message = "Hello from CustomController!";
});
app.run(function($rootScope) {
    $rootScope.globalMessage = "This is a global message.";
});

app.controller('ScopeExampleController', function($scope) {
    $scope.localMessage = "This is a local message.";
});
