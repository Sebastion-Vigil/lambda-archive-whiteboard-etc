/*
	This test is meant to evaluate your creativity with user interfaces. You are 
	encouraged to be as creative as possible with the aesthetics of the page.

	Create a roster page that displays a list of NFL players. Make the list sortable 
	by team and position, using elements of AngularJS.  Include a button that reverses 
  the sort direction, and a filter for the range of jersey numbers shown.
  
  Feel free to express yourself and your creative abilities on this test.
*/
(function(ng){
    var app = ng.module("angularApp", []);
    
    app.controller("TestCtrl", ["$scope", function($scope){
        
        $scope.players = [{
        	Id: 1,
          Name: "Cam Newton",
          Number: 1,
          Position: "QB",
          Team: "Carolina Panthers"
        },{
        	Id: 2,
          Name: "Luke Kuechly",
          Number: 59,
          Position: "MLB",
          Team: "Carolina Panthers"
        },{
        	Id: 3,
          Name: "Aaron Rodgers",
          Number: 12,
          Position: "QB",
          Team: "Green Bay Packers"
        },{
        	Id: 4,
          Name: "JJ Watt",
          Number: 99,
          Position: "DE",
          Team: "Houston Texans"
        },
        {
        	Id: 5,
          Name: "Josh Norman",
          Number: 24,
          Position: "CB",
          Team: "Washington Redskins"
        }
        ,{
        	Id: 6,
          Name: "Jordy Nelson",
          Number: 87,
          Position: "WR",
          Team: "Green Bay Packers"
        },
        {
        	Id: 7,
          Name: "Matt Ryan",
          Number: 2,
          Position: "QB",
          Team: "Atlanta Falcons"
        },
        {
        	Id: 8,
          Name: "Julio Jones",
          Number: 11,
          Position: "WR",
          Team: "Atlanta Falcons"
        },
        {
        	Id: 9,
          Name: "Devonta Freeman",
          Number: 24,
          Position: "RB",
          Team: "Atlanta Falcons"
        },
        {
        	Id: 10,
          Name: "Kelvin Benjamin",
          Number: 13,
          Position: "WR",
          Team: "Carolina Panthers"
        },
        {
        	Id: 11,
          Name: "Von Miller",
          Number: 58,
          Position: "OLB",
          Team: "Denver Broncos"
        },
        {
        	Id: 12,
          Name: "Thomas Davis",
          Number: 58,
          Position: "OLB",
          Team: "Carolina Panthers"
        },{
        	Id: 13,
          Name: "Drew Brees",
          Number: 9,
          Position: "QB",
          Team: "New Orleans Saints"
        },{
        	Id: 14,
          Name: "Tom Brady",
          Number: 12,
          Position: "QB",
          Team: "New England Patriots"
        },{
        	Id: 15,
          Name: "Rob Gronkowski",
          Number: 87,
          Position: "TE",
          Team: "New England Patriots"
        },{
        	Id: 16,
          Name: "Greg Olsen",
          Number: 88,
          Position: "TE",
          Team: "Carolina Panthers"
        },{
        	Id: 17,
          Name: "Leveon Bell",
          Number: 26,
          Position: "RB",
          Team: "Pittsburgh Steelers"
        },{
        	Id: 18,
          Name: "Antonio Brown",
          Number: 84,
          Position: "WR",
          Team: "Pittsburgh Steelers"
        },{
        	Id: 19,
          Name: "Dak Prescott",
          Number: 4,
          Position: "QB",
          Team: "Dallas Cowboys"
        },{
        	Id: 20,
          Name: "Ezekiel Elliot",
          Number: 21,
          Position: "RB",
          Team: "Dallas Cowboys"
        }
        ];
        $scope.title = "NFL Players";     
        //|////////////////////|/
        //|/put your code here/|/
        //V////////////////////V/
        $scope.helloWorld = function() {
          console.log("Hello World!");
        }
        
        
        
        //^////////////////////^/
        //|////////////////////|/
        //|////////////////////|/
        
        
    }]);
    
})(window.angular);
/*
When you are done, press the Update button at the top to save your work. Send us the link to your finished jsFiddle
*/