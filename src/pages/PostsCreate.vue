<template>
  <q-page padding>
    <h3 class="text-h3 text-center">Add a New Post</h3>
    <div class="new">
      <form>
        <input v-model="newTitle" placeholder="title" required/>
        <input v-model="newAuthor" placeholder="author name" required/>
        <input v-model="newEmail" type="email" placeholder="email" required/>
        <label for="date">Date:</label>
        <input type="date" placeholder="email"/>
        <select v-model="newCategory" required>
        <option disabled value="">Add a new category</option>
        <option>category</option>
        <option>category</option>
        <option>category</option>
        <option>category</option>
      </select>
      <textarea v-model="newDescription" placeholder="description" required/>
        <button type="submit">Add New Blog Post</button>
      </form>
    </div>
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
  name: 'PostsCreate',
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
