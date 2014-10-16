angular.module('SubmCtrl', [])
.factory('posts', [
  function(){
  var postfact = {
    posts: [
      {
        title:'Example Title',
        question:'Questions go here!',
        description:'Description (describe the question in detail).',
        votes:0
      }
      
    ]
    };
  return postfact;
  }
])
.controller('SubmController', function($scope,posts) {
  
  $scope.posts = posts.posts;
  
  $scope.addPost = function(){
  if($scope.title === '') { 
    alert("You must enter a title!");
    return;
  }
    
  $scope.posts.push({
    title: $scope.title,
    question: $scope.question,
    description: $scope.description,
    votes: 0,
  });
  $scope.title = '';
  $scope.question = '';
  $scope.description = '';
  $scope.votes = 0;
}
  
  $scope.incrementUpvotes = function(post){
    post.votes += 1;
  }
  $scope.incrementDownvotes = function(post){
    post.votes -= 1;
  }
  
})
.controller('mainController', function($scope) {

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) {
				alert('our form is amazing');
			}

		};
});