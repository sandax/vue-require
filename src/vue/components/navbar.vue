<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"> <img :src="navbar_brand" width="100px"></img></a>
    <button class="navbar-toggler"
     type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
       aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-for="item in menu_items" class="nav-item"
        v-bind:class="{ active: item.active,dropdown:item.dropdown }">
          <a class="nav-link"
          :href="'#'+item.url"
          :id="'menu_item_'+item.name"
          :data-toggle="item.dropdown ? 'dropdown' : 'false'"
          :aria-haspopup="item.dropdown ? 'true' : 'false'"       
          :class="{disabled:item.disabled,'dropdown-toggle':item.dropdown}"
          >{{item.name}} <span class="sr-only">(current)</span></a>
          <div class="dropdown-menu"
          v-if="item.dropdown"
          :aria-labelledby="'menu_item_'+item.name"
          >
            <a v-for="subitem in item.dropdown" class="dropdown-item"
            :href="'#'+subitem.url"
            >{{subitem.name}}</a>
          </div>
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2"
        type="search"
        placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success
        my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
</nav>
</template>
<script>
define(['Vue'], function(Vue){
  return Vue.component('navbar',{
    template: template,
    created: function () {    
      //console.log(JSON.stringify(this.my_menu) );
    },    
    props:{
      menu_items:Array,
      navbar_brand:String
    }
  })
});
</script>
<style>
</style>