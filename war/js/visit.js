$(document).ready(function()
{
	
				$.ajax({
						type	: 'POST', 
						url		: '/visit' ,
						data	: '',
						success	: function(data)
								  {
										$('#totals').html("Total Visitors : "+data);
								  }
			 			});
});

