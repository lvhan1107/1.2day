<template>
  <div class="first">
    <dl v-for='(item,index) in list'>
      <dt></dt>
      <dd><p>{{item.name}}</p><p>{{item.title}}</p></dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'first',
  data() {
    return {
      list:[]
    }
  },
  components: {
    
  },
  created() {
    axios.get('/getlist').then((res)=>{
      this.list=res.data
    })
  },
}
</script>
