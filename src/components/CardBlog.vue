<template>
  <div>
    <div class="cards">
  <div class="card">
    <img class="card__image" src="https://images.unsplash.com/photo-1465239436466-fd877a9153ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fHR1cnF1b2lzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
    <div class="card__content">
        <h2 class="text-h2">{{ title }}</h2>
      <p class="card__description">
        {{ description }}<a class="card__link" href="">Ver mais</a>
      </p>
    </div>
    <div class="card__info">
      <div>
        <span>Por: {{ author }}</span><br>
            <span>{{ email }}</span><br>
            <span>{{ date }}</span><br>
            <span class="card__category">{{ category }}</span>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  title: 'CardBlog',
  data () {
    return {
      image: '',
      title: 'This is a card title!',
      email: 'human@mail.com',
      date: 'day/month/year',
      author: 'A human wrote this',
      category: 'Category',
      description: 'Cat ipsum dolor sit amet, rub butt on table yet under the bed my cat stared at me he was sipping his tea, too or pet my belly, you know you want to; seize the hand and shred it!. Lick yarn hanging out of own butt purr purr purr until owner pets why owner not pet me hiss scratch meow, lie in the sink all day Gate keepers of hell. Meow all night run around the house at 4 in the morning stand with legs in litter box, but poop outside, for chew foot sugar, my siamese, stalks me (in a good way), day and night for cat playing a fiddle in hey diddle diddle?.'
    }
  }

}
</script>

<style lang="scss" scoped>
$font_paragraph: 'Montserrat', sans-serif;
$font_title: 'Vidaloka', serif;
$color_link: #2ea78e;
$border_style: 1px solid #949191;

.cards {
    margin: 0 auto;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    gap: 20px;
    padding-top: 30px;
}

.cards * {
    box-sizing: border-box;
}

.card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-top: $border_style;
    border-right: $border_style;
    border-left: $border_style;
}

.card__content {
    line-height: 1.5;
    font-size: 0.9em;
    padding: 15px;
    background: #fafafa;
    border-right: $border_style;
    border-left: $border_style;
}

.card__content p{
  font-family: $font_paragraph;
}

.card__content h2{
    font-family: $font_title;
    text-align: center;
    font-size: 3em;
    margin: 15px;
}

.card__content > p:first-of-type {
    margin-top: 0;
}

.card__content > p:last-of-type {
    margin-bottom: 0;
}

.card__info {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #949191;
    background: #eeeeee;
    font-size: 0.8em;
    border-bottom: $border_style;
    border-right: $border_style;
    border-left: $border_style;
}

.card__info i {
    font-size: 0.9em;
    margin-right: 8px;
}

.card__link {
    color: $color_link;
    text-decoration: none;
}

.card__link:hover {
    text-decoration: underline;
}

.card__category {
  border: 1px solid #000;
  background: black;
  color: white;
  float: left;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 13px;
}
</style>
