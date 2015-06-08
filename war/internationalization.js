var internationalization ={
	
		msgStore : {
				
		},
		
		language : '',
		
		getData : function()
		{
			var url = document.URL;
			var n=url.split("lang=");
			var lang = null;
			var n1 = n[1];
			
			if(typeof(n1) != undefined && typeof(n1) != 'undefined')
			{
				lang = n1.substr(0, 3);
			}
			else
			{
				lang = "null";
			}
			
			if(lang == 'null')
			{
				var cookie_lang = internationalization_lang.getlangcookie();
				console.info("inside the if loop");
				console.info("The value fron the cookie:::"+cookie_lang);
				if(cookie_lang != null && cookie_lang != "" && typeof(cookie_lang) != "undefined" )
				{
					lang = cookie_lang
				}
				else
				{
					lang ="en";
				}
				
			}
			console.info("the lang:::"+lang);
			
			internationalization.msgStore = "";
			$.get("/locale/"+lang+".json", function(data) 
			{ 
				console.info("JSON Data: " + data.loading);
				
				if(data != null && typeof(data.loading) != undefined)
				{
					var pData = jQuery.parseJSON(data);
					if(pData != null)
					{
						if( typeof(pData.loading) != undefined && typeof(pData.loading) != 'undefined')
						internationalization.msgStore = pData;
					}
					else
					{
						internationalization.msgStore = data;
					}
					
				}
			
				if(typeof(internationalization_lang) != undefined && internationalization_lang.getlangcookie() != null && internationalization_lang.getlangcookie() != "")
				{
					internationalization.language = internationalization_lang.getlangcookie();
				}
				else
				{
					internationalization.language = lang;
				}
				console.info("msgStore.data::"+internationalization.msgStore.loading);
				console.info("internationalization.language :::"+internationalization.language );
				//console.info("value in cookie::"+internationalization_lang.getlangcookie('lang'));

			});
			
		},
};