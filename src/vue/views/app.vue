<template>
  <div>
    <navbar :menu_items="menu_items" :navbar_brand="navbar_brand"></navbar>    
    <div id="content"></div>
    <page_footer></page_footer>
  </div>
</template>



<script>
define(function (require) {   
  var Vue = require('Vue');
  var config = require('json!app/config.json');

  return new Vue({
    template: template,    
    data: config,
    created:function(){      

       require(['vue!vue/views/content'], function(c){
        c.$mount('#content');
      });
    }
  })
});
</script>

<style>

</style>