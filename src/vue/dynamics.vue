<template>
  <div>
    <p>It is dynamically loaded vue file</p>
    <p>Created at: {{date}}</p>
  </div>
</template>
<script>
define(['Vue'], function(Vue){
  return new Vue({
    template: template,    
    created: function(){
      for (var k of [
        {
          name:'date',
          value:new Date()
        }
      ]) this[k.name] = k.value;      
    }
  })
})
</script>