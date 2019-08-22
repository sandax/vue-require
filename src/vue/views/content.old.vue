<template>
  <div>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        v-on:enlarge-text="onEnlargeText"
      ></blog-post>
    </div>
  </div>
</template>

<script>
define(function (require) {   
  var Vue = require('Vue');
  require('vue!vue/components/test');

  Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text', 0.1)">
          Enlarge text
        </button>
        <button v-on:click="$emit('enlarge-text', -0.1)">
          Enlarge text2
        </button>        
        <div v-html="post.content"></div>
      </div>
    `
  })

  
  return new Vue({
    template: template,
    data: {
      postFontSize: 1,
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    },
    methods: {
      onEnlargeText: function (enlargeAmount) {
        this.postFontSize += enlargeAmount
      }
    }
  })
      
});
</script>

<style>

</style>
