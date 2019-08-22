define(function (require) {    
    require('bootstrap.min');require('css!assets/css/bootstrap.min');
    require('css!assets/css/main');
    var $ = require('jquery');
    var Vue = require('Vue');
    var vue = require('vuejs');
   
    var app ={
        init_vue:function(){                        
            require(['vue!vue/views/app'], function(theApp){                
                $( "body" ).append('<div id="app"></div>');                
                theApp.$mount('#app');
            });
            
        },
        init:function(){
            app.init_vue();
        }        
    };
    $(function(){
        app.init();        
    });
});
