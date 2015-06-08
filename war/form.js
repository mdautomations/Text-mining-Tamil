/*************************************************************************
 * 
 * LoopTodo  CONFIDENTIAL
 * __________________
 * 
 *  Copyright (c) LoopTodo, 2012, 2013
 *  All Rights Reserved.
 * 
 * NOTICE:  Except where expressly excluded, all information contained herein is, and remains
 * the property of LoopTodo and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to LoopTodo
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from LoopTodo.
 */


var formManager = {

		loopListener: null,
		_loopKey: "",
		blobUrl : "",
		
		init: function() {
						
			this.loopListener = (typeof messageListener === "undefined") == true ? null : messageListener;
			
			if(this.loopListener != null)
				this.loopListener.listen("receiveData", function(event) {//alert("API")
					thelogging.info("event = " + JSON.stringify(event.data));
					$('#user_name').val(event.data.name);  
					$('#user_email').val(event.data.email);
					if(event.data.allowAnonymous == false)
					    $('#anon2,[for="anon2"]').hide();
					if(event.data.hideNameEmail == true) {
						$('.text_input, .name_email  label.placeholder').css("display","none");
						$('.text_input, .name_email  label.placeholder').hide();
					}
					if(event.data.message != undefined) {
						$('#form_desc').html(event.data.message);
					}
					
					if(event.data.browser) {
						$('.attach_screen_shot_span').hide();
						$('.feedback_attachment_span').hide();
					}
					
					if(event.data.allowScreenshot != undefined && event.data.allowScreenshot == false) {
						$('.attach_screen_shot_span').toggle();
					}
					
					if(event.data.hideCopyOfFeedback != undefined && event.data.hideCopyOfFeedback == true) {
						     $('.copy_of_feedback_span').hide();   			
					}
					
					if(event.data.hideAttachFile != undefined && event.data.hideAttachFile == true) {
						$('.feedback_attachment_span').toggle();
					}
					
					if(event.data.screenshot != undefined && event.data.screenshot != "" ) {
						$('#screenshot').attr('src',event.data.screenshot);
						$('#screenshot_src').val(event.data.screenshot);
					}
					
					if(event.data.customTaskInfo && event.data.customTaskInfo != undefined)
						$('#custom_task_info').val(JSON.stringify(event.data.customTaskInfo));
					
					var card_desc = "";
					
					if(event.data.customDescription && event.data.customDescription != undefined) {
						$.each(event.data.customDescription, function(key, value){
							card_desc += key + ": " + value + " , ";
						});
						$('#card_desc').val(card_desc);
					}
					// fix the jquery infieldlabel plug-in's inability to handle prepopulated data
					$('#user_name, #user_email, textarea').focus().blur();
					
					//added this in order to reduce the spaces when some components are missing from form - Malleswari
					if(event.data.hideNameEmail && event.data.hideNameEmail == true)
						document.getElementsByClassName("name_email")[0].style.height = "12px";
					
					if(true) { //if(event.data.tabs != undefined && event.data.tabs != null) {
						//alert("tabs override = " + event.data.tabs.toString());
						var tabsClasses = ['li.sugges','li.problem','li.ask_ques'];
						var placeholderText = [];
						var buttonTextArr = [];
						var tagArr = [];
						for(var i = 0; event.data.tabs != undefined && i < event.data.tabs.length; i++) {
						    $(tabsClasses[i]).html("<span></span>" + event.data.tabs[i].label);
						    placeholderText.push(event.data.tabs[i].desc);						    
						    buttonTextArr.push(event.data.tabs[i].buttonText);
						    tagArr.push(event.data.tabs[i].tag);
						    //alert(placeholderText[i])
						}				
						if(placeholderText[0] != undefined) {
							$("textarea").attr("placeholder", placeholderText[0]);					
							$("label[for='card_title']").html(placeholderText[0]);
						}
						if(buttonTextArr[0] != undefined)
							$('.submit_btn').val(buttonTextArr[0]);
						if(tagArr[0] != undefined) 
							$('#tag').val(tagArr[0]);
													
				 		$('.feedback_nav').find('li').click(function() {
				 			//alert(JSON.stringify(placeholderText));
				 			var placeholder = "";	 			
				 			var buttonText = "";
							$(this).removeClass('active');
							$(this).siblings().removeClass('active');
							$(this).addClass('active');
				 	 		if ($(this).hasClass('sugges')) {
				 	 			if(placeholderText[0] == undefined) {
				 	 				placeholder = "What's your suggestion?";
				 	 			} else {
				 	 				placeholder = placeholderText[0];
				 	 			}
				 	 			if(buttonTextArr[0] == undefined) {
				 	 				buttonText = 'Send Suggestion';
				 	 			} else {
				 	 				buttonText = buttonTextArr[0]; 
				 	 			}
				 	 			if(tagArr[0] == undefined) {
				 	 				tag = "suggestion";
				 	 			} else {
				 	 				tag = tagArr[0];
				 	 			}
				 	 			$('.submit_btn').val(buttonText);
								$('#tag').val(tag);
								if ($('textarea').val() == '') {
									$("textarea").attr("placeholder", placeholder);					
									$("label[for='card_title']").html(placeholder);
								}
				 			} else if ($(this).hasClass('problem')) {
				 				if(placeholderText[1] == undefined) {
				 					placeholder = "Please describe your problem...";
				 				} else {
				 					placeholder = placeholderText[1];
				 				}
				 	 			if(buttonTextArr[1] == undefined) {
				 	 				buttonText = 'Submit Problem';
				 	 			} else {
				 	 				buttonText = buttonTextArr[1]; 
				 	 			}
				 	 			if(tagArr[1] == undefined) {
				 	 				tag = "problem";
				 	 			} else {
				 	 				tag = tagArr[1];
				 	 			}
				 				$('.submit_btn').val(buttonText);
								$('#tag').val(tag);
								if ($('textarea').val() == '') {
									$("textarea").attr("placeholder", placeholder);
									$("label[for='card_title']").html(placeholder);
								}
							} else if ($(this).hasClass('ask_ques')) {
								if(placeholderText[2] == undefined) {
									placeholder = "Ask your question here...";
								} else {
									placeholder = placeholderText[2];
								}
				 	 			if(buttonTextArr[2] == undefined) { 
				 	 				buttonText = 'Send Question';
				 	 			} else {
				 	 				buttonText = buttonTextArr[2]; 
				 	 			}
				 	 			if(tagArr[2] == undefined) {
				 	 				tag = "question";
				 	 			} else {
				 	 				tag = tagArr[2];
				 	 			}
				 				$('.submit_btn').val(buttonText);
								$('#tag').val(tag);
								if ($('textarea').val() == '') {
									$("textarea, label[for='card_title']").attr("placeholder", placeholder);
									$("label[for='card_title']").html(placeholder);
								}
							}
							
				 		});
					}
				});
			
			var objEvents = {};
            //objEvents.analyticsProfileId = 'UA-10884090-1';
			objEvents.analyticsProfileId = 'UA-29953813-1';
            
            // store ga accountnumber
            loopEvents._init(objEvents);
			
			this._loopKey = this.gup("key");
			
			//get the key
			//alert(this.gupScript("key"));
			console.log("In FormManager object in form.js --->  "+this._loopKey);
			this.getLoop(this._loopKey);
			
			$(function() {
                
				// Bind the event.
				$(window).hashchange( function(){
				    // Alerts every time the hash changes!
				    //alert( location.hash );
//					if(window.location.hash == "#" || window.location.hash == "") {
//						$('#thank-you-wrapper').hide();
//						$('#wrapper').show();
//						$('form')[0].reset();
//						$('form > * > input, form > * > textarea').each(function() {
//							$(this).focus();
//						});
//					}
				});

				// Trigger the event (useful on page load).
				//$(window).hashchange();

			});
			
//			$.post('/forms/getBlobUploadUrl?type=feedback',function(obj) {
//				if (!obj.response) {
//					console.log('Error!','Unable To Upload File! Please Try Again!');
//					return;
//				}
//				//console.log(obj.blobUrl);
//				formManager.blobUrl = obj.blobUrl;
//			});
									
		},
		
		receiveMessage: function(event) {
		
			alert("data = " + event.data)
			
		},
		
		
		getData: function() {
			
			
		},
		
		receiveData: function(data) {
			alert(data);
		},
		
		getLoop: function(loopKey) {
			
			// get the data from the server to prepopulate			
			$.ajax({
				  url: "/loop/" + loopKey + "/?startIndex=0&count=1&bucket=inbox", //&t="+new Date().getTime(),
				  context: document.body,
				  success: function(data){ 
					  json = JSON.stringify(data);
					 // console.log("Data we got from the server for the loop form is :"+ json);
				      formManager.processData(data);
				  },
				  error: function(jqXHR, textStatus, errorThrown) {
					  if(window.location.hostname == "localhost") {
					//      alert("No Loop exists for the key = " + loopKey + ". Check to make sure the key value is correct.");
					  }
					  
					  console.error("No Loop exists for the key = " + loopKey + ". Check to make sure the key value is correct.");
					  
					  //$('textarea').prop("disabled",true);
					  $('button[type="button"]').remove();
					  $('textarea').val("Feedback disabled due to an error.");
					  $('.loop_title, [for="card_title"]').html("Feedback disabled due to an error.");
					  $('a').remove();
				  }
			});
//			
			
		},
		
		processData: function(data) {
		    
			if($('#user_tag').val() == null || $('#user_tag').val() == "") {
			    $('.loop_title').html(data.name);
		    } else {
		    	$('.loop_title').html("Feedback for " + $('#user_tag').val());
		    }
			
			$('#loopKey').val(formManager._loopKey);
			
			formManager.bindSubmitClickEvent();
			
			// bind click event to submit more feedback
			//$('#give_more_feedback').attr('href','/loop-form.html?key='+formManager._loopKey);
			$('#give_more_feedback').click(function(e) {
				e.preventDefault();
				$('#card_title').val(""); 
				$('#card_desc').val("");
				
				$('#screenshot_src').val($('#screenshot').attr('src'));
				//$('#feedback_attachment_id').val('');
				$('.counter').html("140");
				$('#feedback_type > option:first').attr("selected", "selected");
				
				$('#hide_desc').click();
				
				$('#card_desc').blur();
				$('#card_title').blur();
				$('#card_title').focus();
				
				
								
				window.location = "#";
				$('#thank-you-wrapper').fadeOut(250, 
						function() { 
					        $('#wrapper').fadeIn(250);
							$('#generate_ticket').fadeIn(100, function() {
							      $('#view_feedback_wrapper').hide();							      
							  });
					    });
				
				$('#feedback_attachment_id').val('');
//				$.post('/forms/getBlobUploadUrl?type=feedback',function(obj) {
//					if (!obj.response) {
//						console.log('Error!','Unable To Upload File! Please Try Again!');
//						return;
//					}
//					//console.log(obj.blobUrl);
//					formManager.blobUrl = obj.blobUrl;
//				});
				
			});
					

		},
		
		gup: function( name )
		{
	        //alert("gup:: window.location.pathname = " + window.location.pathname);
		    //alert("gup:: window.location.href = " + window.location.href);
		    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		    var regexS = "[\\?&]"+name+"=([^&#]*)";
		    var regex = new RegExp( regexS );
		    var results = regex.exec( window.location.href );
		    if( results == null ) {
		        return "";
		    } else {
		        return results[1];
		    }
		},
		
		bindSubmitClickEvent: function() {
			
			// used by user-feedback-form only
			$('input#submit_btn').click(function() {
				if($('#card_title').val() != "") {
					
			        //formManager.validateForm();
					
					//if any inputs on the page have the class 'needsfilled' the form will not submit
					if ($(":input").hasClass("needsfilled")) {
						return false;
					} else {
						//return true;
						
						//formManager.submitFeedback($('#loop_form').serializeArray());
						formManager.submitFeedback();
					}
					
					$('#unspecified').click();
					
//				    formManager.submitFeedback($('#loop_form').serializeArray());
				} else {
					$('#card_title').addClass("needsfilled");
				}
			    
			});
		},
		
		validateForm: function() { 		
			alert("is this used?")
			if ($('.anon_chkbox').is(':checked')){ 
				required = ["feedback_box", "card_title"];
				$('.text_input').removeClass('needsfilled').val("");
			    $('#user_name').val("");
			    $('#user_email').val("");
			} else {
				required = ["user_name", "user_email", "card_title"];
				var email = $("#user_email");
				if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
					email.addClass("needsfilled");
				} else {
					
					email.removeClass("needsfilled");
				}
			}
			
			for (i=0;i<required.length;i++) {
				
				var input = $('#'+required[i]);
				thelogging.info("input = " + input.attr("id"));
				if ((input.val() == "")) {
					input.addClass("needsfilled");
				} else {
					input.removeClass("needsfilled");
				}
			}
	    },
		
		submitFeedback: function() {
			
			if(!$('.attach_screen_shot_chkbox').is(':checked'))
				$('#screenshot_src').val('');
				
			//console.log("Screenshot :: "+$('#screenshot_src').val());
			
			
			var fileAttachment = $("#feedback_attachment_id");
			if (fileAttachment && fileAttachment[0].files && (!fileAttachment.val() || fileAttachment[0].files.length <= 0)) {
				console.log("No file selected..!")
				var dataString = $('#loop_form').serializeArray();
				formManager.submitFeedbackWithoutAttachment(dataString);
			}
			else if(fileAttachment && !fileAttachment[0].files) {
				console.log("No file selected..!")
				var dataString = $('#loop_form').serializeArray();
				formManager.submitFeedbackWithoutAttachment(dataString);
			}
			else{
				console.log("File has selected");
				$.post('/forms/getBlobUploadUrl?type=feedback',function(obj) {
					if (!obj.response) {
						console.log('Error!','Unable To Upload File! Please Try Again!');
						return;
					}
					//console.log(obj.blobUrl);
					formManager.blobUrl = obj.blobUrl;
					var param = new FormData($("#loop_form")[0]);
					formManager.submitFeedbackWithAttachment(param);
				});
			}
		},
		
		 
		submitFeedbackWithoutAttachment : function(dataString){
			
			console.log("size : "+dataString[0].value.length);
			if(dataString[0].name === "card_title")
				dataString[0].value = dataString[0].value.match('\r\n') ? formManager.replaceAll(dataString[0].value, '\r\n', '\n'):  dataString[0].value;
			console.log("size2 : "+dataString[0].value.length);
			//console.log(dataString);
			// submit the feedback 
				$.ajax({
					  url: "/forms/process/?json="+true+"&t="+new Date().getTime(),
					  type: "POST",
					  cache : false,
	                  data: dataString,	
					  context: document.body,
					  success: function(data){ 
					   //formManager.processData(data);
						  //alert(JSON.stringify(data));					  
						  $('#view_feedback_online').attr("href","/card/"+data+"/");
						  $('#view_feedback_online').attr("target","_blank");
						  $('#generate_ticket').fadeOut(100, function() {
						      $('#view_feedback_wrapper').fadeIn(200);
						  });
					  },
					  error: function(jqXHR, textStatus, errorThrown) {
						  if(window.location.hostname == "localhost") {
							  alert("Error submitting the form :: " + textStatus + " : " + errorThrown);						  
						  }
						  console.error("Error submitting the form :: " + textStatus + " : " + errorThrown);
					  }
				});
		
		$('#view_feedback_wrapper').hide();
		formManager.loadThankYouPage();
		
		},
		
		submitFeedbackWithAttachment : function(data){
			window.test = data;	
			console.log(data);
			try{
				$.ajax({
					url : formManager.blobUrl,
					type : 'POST',
					cache : false,
					data : data,
					processData : false,
					contentType : false,
					context : document.body,
					success : function(data) {
						console.log("Success!!!");
						 $('#view_feedback_online').attr("href","/card/"+data+"/");
						  $('#view_feedback_online').attr("target","_blank");
						  $('#generate_ticket').fadeOut(100, function() {
						      $('#view_feedback_wrapper').fadeIn(200);
						  });
					},
					error: function(jqXHR, textStatus, errorThrown) {
						  if(window.location.hostname == "localhost") {
							  alert("Error submitting the form :: " + textStatus + " : " + errorThrown);						  
						  }
						  console.error("Error submitting the form :: " + textStatus + " : " + errorThrown);
						  //formManager.submitFeedbackWithoutAttachment($('#loop_form').serializeArray());
					 }
				});
			}
			catch(e)
			{
				console.log("Problem Uploading the file because  "+e.message);
				formManager.submitFeedbackWithoutAttachment($('#loop_form').serializeArray());
			}
			$('#view_feedback_wrapper').hide();
			formManager.loadThankYouPage();
		},
		
		replaceAll	:	function(str, fromChr, toChr){
			if(str == null){
				str = "";
			}
			while(str.indexOf(fromChr) != -1){
				str = str.replace(fromChr, toChr);
			}
			return str;
		},
		
		loadThankYouPage: function() {
			window.location = "#loop-thanks.html";
			$('#wrapper').hide();
			$('#thank-you-wrapper').fadeIn(500);
		}
			
		
};

$(document).ready(function() {
    formManager.init();

    formManager.submitFeedback = (function(legacyFn) {  
        
		/** arguments for original fn **/
		return function() { 
	    	// original function pass in as parameter
			legacyFn.apply(this, arguments);
	    	    		    	
		    loopEvents.recordAction({
	            "category": $('#loop_title').html(),
	            "action":"loopFormSubmitted",
	            "label":"loopFormUser"
	        });
	    };
	})(formManager.submitFeedback);

});