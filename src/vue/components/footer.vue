<template>
  <div class="footer">&copy;&nbsp; Sandax 2019</div>
</template>

<script>
define(['Vue'], function(Vue){
  return Vue.component('page_footer',{
    template: template,    
    data: function(){ return {}}
  })
});
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(51, 48, 48);
  color: white;
  text-align: right;
  padding-right: 10px;
  

}

</style>