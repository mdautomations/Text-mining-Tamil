/*(function()
     {
      var storage = 
      {
       cookies  : null ,
       counter  : 0  ,
       cookieName : null ,
       cookieValue : null ,
       
       setCookie : function( name , value , days )
       {
        var date  = new Date();
        date.setDate( date.getDate()+days);
        value   = escape(value) + ((days==null) ? "" : "; expires="+date.toUTCString());
        document.cookie = name+'='+value ;
       },
       
       getCookie : function( name )
       {
        this.cookies = document.cookie.split(';');
        for( this.counter = 0 ; this.counter< this.cookies.length ; this.counter++)
        {
         this.cookieName  = this.cookies[this.counter].substr( 0 , this.cookies[this.counter].indexOf('='));
         this.cookieValue = this.cookies[this.counter].substr(this.cookies[this.counter].indexOf("=")+1);
         this.cookieName  = this.cookieName.replace(/^\s+|\s+$/g,"");
         if( this.cookieName == name )
         {
          return unescape(this.cookieValue);
         }
        }
        
        return null;
       },
       
       check  : function(name)
       {
        console.log('here')
        if( this.getCookie(name) )
        {
         console.log('The value is : '+this.getCookie(name));
         return name;
        }
        else
        {
         console.log('Looks like the cookie is unavailable');
        }
       }
      }
      
      var storeData = 
      {
        check  : function(name)
        {
         return storage.check(name);
        },
        
        set   : function(name,value,days)
        {
         storage.setCookie(name, value, days);
        }
      }
      
      window.csStorage = storeData;
        
     })();*/
//modified

      var storage = 
      {
       cookies  : null ,
       counter  : 0  ,
       cookieName : null ,
       cookieValue : null ,
   
       checkforCookie	:	function()
       {
    	   myval	=	document.cookie;
    	   console.log("thesession id is-->"+myval);
    	   try
			{
    		   if(myval != "")
   			{
   				 for(var i=0;i<myval.split(";").length;i++)
   	    		 {
   	    		   		cookval	=	myval.split(";")[i];
   	    		   		c_name=unescape(cookval);
   	    				c_name	=	cookval.split("=")[0];
   	    		   		console.log("tje c_names are-->"+c_name);
   	    		   		c_name= c_name.trim();
	    		   		if(c_name != "JSESSIONID" && c_name != "tabselectedvalue" ) 
	    				{
	    					console.log("in 1st if");
	    					if((c_name != "__utma" && c_name != "__utmc"  && c_name != "__utmz" ) )
	    						{
   	    		   					if(storage.validateEmail(c_name))
   	    		   					{
   	    		   						console.log("in 2nd if");
   	    		   						$('#checking').attr('checked','checked');
   	    		   						c_value	=	cookval.split("=")[1];
   										c_value= unescape(c_value);
   										document.getElementById('username').value	=	c_name;
   										document.getElementById('Password').value	=	c_value;
   										$('#login').trigger('click');
//   										break;
   	    		   					}
   	    		   				}
   	    		   		}
   	    		   		
   	    		 }
   				
   			}
			else
			{
				$('#checking').removeAttr('checked');
			}  
//			}
			}
			catch ( e)
			{
				console.log("an eception occuerd"+e);
			}
       },
       setCookie : function (c_name,value,exdays)
       {
        console.log("Inside the c_name::"+c_name+"value::"+value);
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
       },
       
       getCookie	:	function (obj)
       {
   		console.log("over here here"+obj.id);
   		c_id	=	obj.id;
   		c_name	=	document.getElementById(c_id).value ;
	   		if(c_name != "User Name")
	   		{
		        var c_value = document.cookie;
		        var c_start = c_value.indexOf(" " + c_name + "=");
		        if (c_start == -1)
		          {
		          c_start = c_value.indexOf(c_name + "=");
		          }
		        if (c_start == -1)
		          {
		          c_value = null;
		          }
		        else
		          {
		          c_start = c_value.indexOf("=", c_start) + 1;
		          var c_end = c_value.indexOf(";", c_start);
		          if (c_end == -1)
		          {
		        c_end = c_value.length;
		        }
		        c_value = unescape(c_value.substring(c_start,c_end));
		        }
		        document.getElementsByName('password')[0].value = c_value;
		        return c_value;
	   		}
        },
       check  : function(name)
       {
        if( this.getCookie(name) )
        {
         console.log('The value is : '+this.getCookie(name));
         return name;
        }
        else
        {
         console.log('Looks like the cookie is unavailable');
        }
       },
       
       validateEmail : function (sEmail) {
       	console.log("comes hger");
   	    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
   	
   	    if (filter.test(sEmail)) {	
   	        return true;	
   	    }	
   	    else {	
   	        return false;	
   	    }	
   	},       
      };
      var storeData = 
      {
        check  : function(name)
        {
        		c_name = name;
    	   		if(c_name != "User Name")
    	   		{
    		        var c_value = document.cookie;
    		        var c_start = c_value.indexOf(c_name+'_chatacc');
    		        if (c_start == -1)
    		          {
    		        	c_start = c_value.indexOf(c_name);
    		        	 if (c_start == -1)
       		          	{
    		        		 c_value = null;
       		          	}
    		          }
    		        else
	    		       {
	    		          c_start = c_value.indexOf("=", c_start) + 1;
	    		          var c_end = c_value.indexOf(";", c_start);
	    		          
	    		          if (c_end == -1)
	    		          {
	    		        	  c_end = c_value.length;
	    		          }
	    		          
	    		          c_value = unescape(c_value.substring(c_start,c_end));
	    		        }
    		        console.log("the c-value is----->"+c_value);
    		        return c_value;
    	   		}
        },
        set   : function(name,value,days)
        {
	         storage.setCookie(name+"_chatacc", value, days);
	         window.csStorage = storeData;
        },
     };
      window.csStorage = storeData;
//ends
var tab_cookie = {
	
		setSelectedTabInCookie			:	function(selectedtab)
		{
			document.cookie="tabselectedvalue" + "=" + selectedtab;
		},
		
		getSelectedTabFromCookie		:	function(c_name)
		{
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++)
			{
			  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			  x=x.replace(/^\s+|\s+$/g,"");
			  if (x==c_name)
			  {
				  return unescape(y);
			  }
			}
		},
		deleteCookie				:	function(name)
		{
			console.log("comes in delete");
			 var d = new Date();
			 document.cookie = name +'=; expires=' + d.toGMTString() + ";" + ";";
		},
};
var internationalization_lang = {
		setlangcookie			:	function(lang)
		{
			document.cookie="org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE" + "=" + lang;
		},
		
		getlangcookie		:	function()
		{
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++)
			{
			  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			  x=x.replace(/^\s+|\s+$/g,"");
			  if (x=='org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE')
			  {
				  console.info("the cookie name got is:::"+y);
				  return unescape(y);
			  }
			}
		},
		
		deleteCookie				:	function()
		{
			 var d = new Date();
			 document.cookie = 'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE' +'=; expires=' + d.toGMTString() + ";" + ";";
		},
};
var check	=	{
	
		checkIfCookieExists	:	function(name)
		{
			myval	=	document.cookie;
	    	   console.log("thesession id is-->"+myval);
	    	   try
				{
	    		   if(myval != "")
	   				{
	   				 for(var i=0;i<myval.split(";").length;i++)
	   	    		 {
	   	    		   		cookval	=	myval.split(";")[i];
	   	    		   		c_name=unescape(cookval);
	   	    				c_name	=	cookval.split("=")[0];
	   	    		   		console.log("tje c_names are-->"+c_name);
	   	    		   		c_name= c_name.trim();
		    		   		if(c_name != "JSESSIONID" && c_name != "tabselectedvalue" ) 
		    				{
		    					console.log("in 1st if");
		    					if((c_name != "__utma" && c_name != "__utmc"  && c_name != "__utmz" ) )
		    						{
	   	    		   					if(storage.validateEmail(c_name))
	   	    		   					{
	   	    		   						console.log("in 2nd if");
	   	    		   						if(c_name == name)
	   	    		   							{
	   	    		   								console.log("cookie exists");
	   	    		   								return true;
	   	    		   							}
	   	    		   						else
	   	    		   							{
	   	    		   								console.log("cookie is not present");
	   	    		   								return false;
	   	    		   							}
	   	    		   					}
	   	    		   				}
	   	    		   		}
	   	    		   		
	   	    		 }
	   				
	   				}
	    		   else
	    		   {
						console.log("no cookie in browser level");
						return false;
	    		   }  
				}
				catch ( e)
				{
					console.log("an eception occuerd"+e);
				}
		},
		
};