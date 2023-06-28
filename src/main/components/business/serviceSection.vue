<template>
    <div class="viewed mt-4" style="background-color: white">
        <div class="container" style="background-color: white">
            <div class="row" style="background-color: white">
                <div class="col" style="background-color: white">
                    <div class="viewed_title_container" style="margin-top: -10px">
                        <P class="title-one" style="margin:auto">
                            Our Services
                        </P>
                        <div class="pr-5 viewed_nav_container">
                            <div class="viewed_nav viewed_prev">
                                <i class="fas fa-chevron-left"></i>
                            </div>
                            <div class="viewed_nav viewed_next">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="viewed_slider_container" style="margin-top: -30px">
                        <!-- Recently Viewed Slider -->

                        <div class="owl-carousel owl-theme viewed_slider">

                            <!-- Recently Viewed Item -->
                            <div :key="service.id" :title="service.title" class="owl-item" v-for="service in services">
                                <div
                                    class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                                >
                                    <div class="viewed_image">
                                        <img :alt="`${service.title} thumbnail`" :src="service.thumbnail"/>
                                    </div>
                                    <div class="viewed_content text-center">
                                        <div class="viewed_price">
                                            {{service.amount | formatPrice}}
                                        </div>
                                        <div class="viewed_name">
                                            <a :href="service.url" class="truncate">{{service.title}}</a>
                                        </div>
                                    </div>
                                    <ul class="item_marks">
                                        <li class="item_mark item_new">new</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            services: {
                type: Array,
                required: true,
            },
        },
    };
</script>

<style lang="css" scoped>
    .viewed_item {
        margin: 0px 3px !important;
    }

    .title-one {
        font-size: 20px;
        padding-top: 10px;
        padding-left: 15px;
        /* box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); */
        /* border-style: solid;
              border-width: 1px; */
    }

    .viewed
    .container
    .row
    .viewed_title_container
    .viewed_slider_container
    .viewed_slider {
        background-color: white !important;
    }

    /* mobile */
</style>
