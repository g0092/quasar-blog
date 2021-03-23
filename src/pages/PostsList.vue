<template>
  <q-page padding>
    <h3 class="text-h3 text-center blog-title">Blog posts</h3>
    <div class="q-pa-md">
      <div class="row q-mt-md">
        <div class="col-12 col-md q-pr-md q-pl-md">
          <card-blog />
        </div>
        <div class="col-12 col-md q-pr-md q-pl-md">
          <card-blog />
        </div>
        <div class="col-12 col-md q-pr-md q-pl-md">
          <card-blog />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardBlog from '../components/CardBlog'
export default {
  name: 'PostsList',
  components: {
    'card-blog': CardBlog
  }
}
</script>

<style lang="scss" scoped>
$blog_title: "Vidaloka", serif;

.blog-title {
  font-family: $blog_title;
}
</style>
