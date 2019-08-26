<template>
  <div>
    <navbar></navbar>
    <div id="navbar"></div>
    <div id="content"></div>
    <div id="footer"></div>    
  </div>
</template>



<script>
define(function (require) {   
  var Vue = require('Vue');
  

  return new Vue({
    template: template,    
    data: {},
    created:function(){      
      require(['vue!vue/views/navbar'], function(c){
        c.$mount('#navbar');
      })
       require(['vue!vue/views/footer'], function(c){
        c.$mount('#footer');
      })
       require(['vue!vue/views/content'], function(c){
        c.$mount('#content');
      });
    }
  })
});
</script>

<style>

</style>