<template>
  <div>
    123
    {{ post }}
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  async asyncData({ $axios }) {
      const post = await $axios.$get(`/api/getTestData`)
      return { post }
  }
}
</script>
