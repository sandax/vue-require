<template>  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{navbar_brand}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-for="item in my_menu" class="nav-item" v-bind:class="{ active: item.active,dropdown:item.dropdown }">
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
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>
</template>

<script>
define(['Vue'], function(Vue){
  return new Vue({
    template: template,    
    data: {
     navbar_brand: 'Brand',
     my_menu: [
        {
          name:'Page 1',
          url :'',
          dropdown:[
            { 
                name:'SubPage 1',
                url :'/ala',
            },
            { 
                name:'SubPage 2',
                url :'/ala',
            }

          ]          
        },
        {
          name:'Page2',
          url :'/alaz',
          active:true,
        },
        {
          name:'Page 4',
          url :'',
          dropdown:[
            { 
                name:'SubPage 1',
                url :'/ala',
            },
            { 
                name:'SubPage 2',
                url :'/ala',
            },
            { 
                name:'SubPage 21',
                url :'/ala',
            },
            { 
                name:'SubPage 2222',
                url :'/ala',
            },
            { 
                name:'SubPage 21111',
                url :'/ala',
            },
            { 
                name:'SubPage 211',
                url :'/ala',
            },
            { 
                name:'SubPage 2111',
                url :'/ala',
            }

          ]          
        },
        {
          name:'Page3',
          url :'/alaz',
          disabled:true,
        }
      ]


    }
  })
});



</script>

<style>

</style>