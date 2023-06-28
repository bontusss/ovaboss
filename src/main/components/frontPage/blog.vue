<template>
  <div>
    <div class="container">
      <div class="reviews_title_container">
        <header class="reviews_title">latest news and update</header>
        <div class="reviews_all ml-auto">
          <a href="#">
            view all
            <span>news</span>
          </a>
        </div>
      </div>
      <main class="grid">
        <article v-for="blogpost in blogposts" :key="blogpost.id">
          <img :src="blogpost.img" alt="Sample photo" />
          <div class="text">
            <h4>{{ blogpost.title }}</h4>
            <p>{{ blogpost.excerpt }}</p>
            <a :href="blogpost.link" class="btn btn-block">Read More</a>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogposts: [
        {
          id: 1,
          img: "images/blog1.jpeg",
          excerpt:
            "Owning a business can be emotionally fulfilling and financialling enriching because of innovations.",
          title: "Five reason why you should join Ovaboss",
          link: ""
        },
        {
          id: 2,
          img: "images/blog2.jpg",
          excerpt:
            "Do you run a retail business that is doing well and your wondering how to expand sales globally?",
          title: "Benefits of using Ovaboss to grow your inland revenue",
          link: ""
        },
        {
          id: 3,
          img: "images/blog3.jpg",
          excerpt:
            "There is no doubt that we are living in an age of accelerating changes and innovations",
          title: "The 21st century business system",
          link: ""
        },
        {
          id: 4,
          img: "images/blog1.jpeg",
          excerpt:
            "There is no doubt that we are living in an age of accelerating changes and innovations",
          title: "Five reason why you should join Ovaboss",
          link: ""
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 10px;
  align-items: stretch;
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid > article img {
  max-width: 100%;
  width: 100%;
}

.grid .text {
  padding: 20px;
}

img {
  height: 200px;
}
</style>
