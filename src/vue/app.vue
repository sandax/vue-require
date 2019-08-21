<template>
  <div>
    <div id="navbar"></div>
    <div id="content"></div>
    <div id="footer"></div>
  </div>
</template>



<script>
define(['Vue'], function(Vue){
  return new Vue({
    template: template,    
    data: {},
    created:function(){      
      require(['vue!vue/navbar'], function(c){
        c.$mount('#navbar');
      })
       require(['vue!vue/footer'], function(c){
        c.$mount('#footer');
      })
       require(['vue!vue/content'], function(c){
        c.$mount('#content');
      });
    }
  })
});
</script>

<style>

</style>