<script setup>
import MainSlider from '../components/frontPage/mainSlider.vue'
import Characteristics from '../components/frontPage/characteristics.vue'
import MainBestSlider from '../components/frontPage/mainBestSeller.vue'
import PictureAdvert from '../components/frontPage/pictureAdvert.vue'
import NewArrivals from '../components/frontPage/newArrivals.vue'
import PopularCategory from '../components/frontPage/popularCategory.vue'
import WeeklyDeals from '../components/frontPage/dealsOfTheWeek.vue'
import BusinessCategory from '../components/frontPage/businessCategory.vue'
import Viewed from '../components/frontPage/recentViewed.vue'
import PictureAdvertTwo from '../components/frontPage/pictureAdvertTwo.vue'
import Blog from '../components/frontPage/blog.vue'
import AboutUs from '../components/frontPage/aboutSection.vue'

const categories = []
</script>

<template>
  <div class="super-container">
    <MainSlider />
    <Characteristics />
    <MainBestSlider />
    <PictureAdvert />
    <NewArrivals />
    <PopularCategory />
    <WeeklyDeals />
    <BusinessCategory />
    <Viewed />
    <PictureAdvertTwo />
    <Blog />
    <AboutUs />
  </div>
</template>

<style></style>
