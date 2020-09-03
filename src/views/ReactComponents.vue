<template>
  <div class="react-components">
    <i-button type="primary">Hello</i-button>
    <i-select style="width:200px" @on-change="changeLayout">
        <i-option value="circle">圆形</i-option>
        <i-option value="concentric">同心圆</i-option>
        <i-option value="grid">网格</i-option>

    </i-select>
    <Demo class="neomap" :data="data" :layout="layout"/>
  </div>
</template>

<script>
import Demo from './Demo'
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
     data: {
            nodes: [
              ],
              edges: [
                
              ]
        },
      layout: {name: "circle",}
    }
  },
  components: {
    Demo,
  },
  mounted(){   //页面初始化方法
          axios.get('http://127.0.0.1:5000/neo4j').then(res=>{
          console.log(res.data)      
          this.data = res.data
        })
  },
  methods:{
    changeLayout(value){
      
      this.layout={
            name: value,   
   
          }
      console.log("Hello")
      console.log(value)
    }
  }
}
</script>
<style scoped>
.neomap {
  widows: 100%;
  height: 800px;
}
</style>>