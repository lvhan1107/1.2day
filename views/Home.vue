<template>
  <div class="home">
  <div class='main'><router-view/></div>
    <div class='foot'>
      <router-link v-for='(item,index) in navList' :to='item.title'>{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      navList:[
        {
          name:'消息',
          title:'/home/first'
        },
        {
          name:'我的',
          title:'/home/my'
        },
        {
          name:'空间',
          title:'/home/sky'
        }
      ]
    }
  },
  components: {
    
  }
}
</script>
