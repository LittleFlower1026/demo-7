<template>
  <div class="page has-navbar" v-nav="{ title: '新闻动态', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content text-center">
      <h2 class="padding">新闻动态</h2>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back('/')
      }
    }
  }
</script>
