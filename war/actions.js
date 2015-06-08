var helo;
var base64s =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var need = new Array();
$(document).ready(function()
{
	$('#loader').hide();
	$('#browse').hide();
	$('.jumbotron').hide();
	$("#brows").click(function()
	{
		$('#browse').trigger('click');
	});
	
	$(".form-control").click(function() 
	{
		$('.jumbotron').html(" ");
		$('.form-control').css('background-color','rgb(255, 255, 255)');
		$('.jumbotron').hide();
		$('#loader').show();
	});
	$("#analyse").click(function() 
	{
		var enteredText = $('.form-control').val();
		if(enteredText.length!=0)
		{
			
			analyze();
		}
		else
		{
			$('.form-control').css('background-color','rgb(170, 170, 170)');
			$('#loader').hide();
		}
	});
	$("#posanalyse").click(function() 
			{
				var enteredText = $('.form-control').val();
				if(enteredText.length!=0)
				{
					posanalyze();
				}
				else
				{
					$('.form-control').css('background-color','rgb(170, 170, 170)');
					$('#loader').hide();
				}
			});
	$("#namedentity").click(function() 
			{
				var enteredText = $('.form-control').val();
				if(enteredText.length!=0)
				{
					namedentity();
				}
				else
				{
					$('.form-control').css('background-color','rgb(170, 170, 170)');
					$('#loader').hide();
				}
			});
			
});
function uploadCompanyLogo(companyLogElement)
{
	var imageObject	 		 =		new Object();

	if (companyLogElement.files && companyLogElement.files[0])
	{
	var reader 					= 		new FileReader();
	reader.onload = function (e)
	{	
			var 	himageObject	 					=	e.target.result;
				console.log("imageObjec ::t"+himageObject);
				$('#textfile').val(himageObject);
		  }
//		reader.readAsDataURL(companyLogElement.files[0]);
		reader.readAsText(companyLogElement.files[0], "UTF-8");
	}
	else
	{
		console.info("No files Chosen");
	}
}
function posanalyze()
{
	var textsplit= new Array();
	var trees = new Array();
	var build = "";
	var matchingelement = "";
	textsplit = $('.form-control').val().trim().split(" ");
	for(var eachword=0; eachword<textsplit.length; eachword++)
	{
		var id = textsplit[eachword];
		var lastChar = id.substr(id.length - 3); 
		console.log("id::"+ id)
		console.log(lastChar);
		if(lastChar=="வள்")
		{
			console.log("1");
			 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Subject</a> </p';
	 		 $('.jumbotron').append(build+'<br/>');
	 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
	 		$('.jumbotron').append('<hr>');
		}
		 if(lastChar=="ில்")
		{
			 console.log("2");
			 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Object</a> </p';
	 		 $('.jumbotron').append(build+'<br/>');
	 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
	 		$('.jumbotron').append('<hr>');
		}
		 if((lastChar=="ாள்") || (lastChar=="யது") || (lastChar=="வது") || (lastChar=="டது") || (lastChar=="்து") || (lastChar=="து.") || (lastChar=="்!") || (lastChar=="பது") ||(lastChar=="டன் "))
		{
			 console.log("3");
			 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Verb</a> </p';
	 		 $('.jumbotron').append(build+'<br/>');
	 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
	 		$('.jumbotron').append('<hr>');
		}
		 if((lastChar=="ன்") || (lastChar=="னை") ||(lastChar=="ான்") ||(lastChar=="வர்") || (lastChar=="ன்.") || (lastChar=="வளை") || (lastChar=="ள்."))
		{
			 console.log("4");
			 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Subject</a> </p';
	 		 $('.jumbotron').append(build+'<br/>');
	 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
	 		$('.jumbotron').append('<hr>');
		}
	}
	$('#loader').hide();
	$('.jumbotron').show();
}
function namedentity()
{
	var textsplit= new Array();
	var trees = new Array();
	
	var build = "";
	var matchingelement = "";
	textsplit = $('.form-control').val().trim().split(" ");
	for(var eachword=0; eachword<textsplit.length; eachword++)
	{
		var id = textsplit[eachword];
		var lastChar = id.substr(id.length - 4); 
		console.log("id::"+ id)
		console.log(lastChar);
		need.push(lastChar);
		 if(
			(lastChar=="ாமன்") ||
		   (lastChar=="தான்") || 
		   (lastChar=="மன்.") || 
		   (lastChar=="அவன்") || 
		   (lastChar=="ான்") || 
		   (lastChar=="ாமன்.") || 
		   (lastChar=="ான்.") || 
		   (lastChar=="அவனை") ||
		   (lastChar=="அவர் ") ||
		   (lastChar=="ார்.")||
		   (lastChar=="")||
		   (lastChar=="ிவர் ")||
		   (lastChar=="றான்")||
		   (lastChar=="ாமா!")||
		   (lastChar=="ரின் ")||
		   (lastChar=="தான் ")||
		   (lastChar=="வர். ")||
		   (lastChar=="றார்")||
		   (lastChar=="ாமனோ")||
		   (lastChar=="டார்")||
		   (lastChar=="ான்.")||
		   (lastChar=="றார்")||
		   (lastChar=="ாரனை")
		   )
		{
			 if(textsplit[eachword].length>0)
				 {
				 console.log("3");
				 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Male Gender</a> </p';
		 		 $('.jumbotron').append(build+'<br/>');
		 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
		 		$('.jumbotron').append('<hr>');
				 }
			
		}
		 else if(
				 (lastChar=="வாள்") || 
				 (lastChar=="தாய்") ||
				 (lastChar=="அவளை") ||
				 (lastChar=="தாயே") || 
				 (lastChar=="றாள்.") || 
				 (lastChar=="வளை") ||
				 (lastChar=="அவள்.") ||
				 (lastChar=="ள்.") )
		{
			 if(textsplit[eachword].length>0)
			 {
				 console.log("4");
				 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Female Gender</a> </p';
		 		 $('.jumbotron').append(build+'<br/>');
		 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
		 		$('.jumbotron').append('<hr>');
			 }
		}
	}
	$('#loader').hide();
	$('.jumbotron').show();
}
function analyze()
{
	var textsplit= new Array();
	var trees = new Array();
	var build = "";
	var matchingelement = "";
	textsplit = $('.form-control').val().trim().split(" ");
	
	for(var eachword=0; eachword<textsplit.length; eachword++)
	{
		var character=textsplit[eachword].trim().substring(0,3);
		var printed = false;
		for(var k=0; k<textsplit.length; k++)
		{
			if(k!=eachword && textsplit[eachword].trim().length!=0)
			{
				if(textsplit[k].indexOf(character)!=-1)
			    {
					if (trees.indexOf(textsplit[k]) > -1) 
					{
						
					} 
					else
					{
						trees.push(textsplit[k]);
						if(!printed)
						{
							 build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+textsplit[eachword]+'</a> </p';
					 		 $('.jumbotron').append(build+'<br/>');
					 		 matchingelement = " { ";
					 		 $('.jumbotron').append(matchingelement);
					 		 printed = true;
						}
						 $('.jumbotron').append(textsplit[k]+" , ");
					}
			    }
			}
		}
		if(printed)
		{
			matchingelement=" } ";
			 $('.jumbotron').append(matchingelement+"<br/><br/>");
		}
	}
	$('#loader').hide();
	$('.jumbotron').show();
	if($('.jumbotron').text().trim().length == 0)
	{
		 $('.jumbotron').append("No results found");
	}
}
		