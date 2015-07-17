$(document).ready(function() {
	$('#getUsers').on('click', function(e) {
		e.preventDefault();
		return $.ajax({
			method: 'GET', //what kind of request (method)
			url: 'http://reqr.es/api/users?page=1', //the URL
			success: function(res) { //what to do on a successful request
				console.log(res);
				insertData(res.data); //call the insertData function with the data we received; now when click GET current users button you should see them populate in the DOM
			}
		})
	});

	$('#addUser').on('click', function(e) {
		e.preventDefault();
		var userName = $('#name').val(); //capture value of input forms using .val()
		var userJob = $('#job').val();
		return $.ajax({ 			//return ajax POST request
			method: 'POST',
			url: 'http://reqr.es/api/users',
			data: {name: userName, job: userJob}, //data lets you pass specific info to the API via your request (which is useful b/c when making a POST request you are posting something to the API); also helpful when trying to find specific user data you can do something like pass in the users' ID
			success: function(res) {
				$('#recentUser').html(
					'<li>' +
						'name: ' + res.name +
					'</li>' +
					'<li>' +
						'job: ' + res.job +
					'</li>' +
					'<li>' +
						'id: ' + res.id +
					'</li>' +
					'<li>' +
						'created at: ' + res.createdAt +
					'</li>'
				)
			}
		})
	});
});

// Function will take data, parses it's valuable info, and writes it to the DOM; takes the data, iterates through it with a loop and writes it into the DOM
var insertData = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		$('#userInfo' + (i + 1)).html('<div>' +
			'User Info:' +
			'<li>' +
			'First name: ' + arr[i].first_name +
			'</li>' +
			'<li>' +
			'Last name: ' + arr[i].last_name +
			'</li>' +
			'<hr>' +
			'</div>'
		)
	}
}