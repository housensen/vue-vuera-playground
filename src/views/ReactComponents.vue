<template>
  <div class="react-components">
    <h1>This is a react components page</h1>
    <Demo/>
  </div>
</template>

<script>
import Demo from './Demo'
export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    Demo
  }
}
</script>
