// This is a JavaScript file

 ons.bootstrap()
      .controller('AppController', function($scope) {
          
         // ons.notification.alert('Hello, world');
         
         
          	$scope.show = function(){

      			ons.notification.alert('Hello, world');
      		}
              
            $scope.chat = function(titles){

      			 myNavigator.pushPage('chat.html',{data: {title: titles}});
      		}
              
             
            $scope.login = function(Users){
                
                /*
                
                    if(Users==undefined){
                        ons.notification.alert("ກະລຸນາປ້ອນລະຫັດ");
                    }
                    else if(Users.username == "admin" && Users.password == "12345"){
                        myNavigator.pushPage('Main.html', {data: {title: 'ສົນທະນາ'}});
                            //  ons.notification.alert('Hello, world');
                    }
                    else{
                        ons.notification.alert('ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ');
                    }
                   */
                     myNavigator.pushPage('Main.html');
                
            }
              
            $scope.getPhoto = function(){
                
                 navigator.camera.getPicture(onSuccess, onFail, 
                  { quality: 50,destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM });
                  
                        
                    }  
                
              
                      

      })
       .controller('MainController', function() {
           
              // ons.notification.alert('Hello, world');
           
           
           
            });
      
      
      
    ons.ready(function() {
        console.log("Onsen UI is ready!");
    });
    
   

       

      function onSuccess (imageURI) {
        var largeImage = document.getElementById ('picture');
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
         document.getElementById("picture1").style.display = "none";
      
      }
      
      function onFail (message) {
          alert('An error occured: ' + message);
      }
