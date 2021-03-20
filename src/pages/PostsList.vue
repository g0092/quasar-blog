<template>
  <q-page padding>
    <h3 class="text-h3 text-center">Blog posts</h3>
   <div class="q-pa-md">
    <div class="row">
      <div class="col col-12 col-md">
        <CardBlog/>
      </div>
      <div class="col col-12 col-md">
        <CardBlog/>
      </div>
      <div class="col col-12 col-md">
        <CardBlog/>
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
    CardBlog
  }
}
</script>

<style scoped>
.row > div {
  padding: 0px 15px;
}
.row + .row {
  margin-top: 1rem;
  }
</style>
