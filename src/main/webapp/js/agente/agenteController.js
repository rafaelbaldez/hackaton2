App.controller('AgenteCtrl', function($scope, AgenteService, $route,$routeParams,$location){
	$scope.agente = [];
	$scope.notFound = false;
	AgenteService.list().then(function(data){
		$scope.agente = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		AgenteService.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
	
	$scope.item = {};
	
	$scope.editar = function(item){
		$scope.item = item;
		$location.path('/editarAgente');
	}

	$scope.atualizar = function(item){
		AgenteService.update(item, item.idAgente).then(function(data){
				$location.path('/');
			});
	}
	
});