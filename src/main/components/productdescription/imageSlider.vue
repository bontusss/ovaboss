<template>
  <div class="container">
    <div class="image-viewer">
      <div class="main-image" v-for="data in data" :key="data.id">
        <img :src="data.images" alt />
      </div>
      <div class="secondary-images">
        <div class="secondary-image">
          <ul>
            <li v-for="image in data.images" :key="image.id">
              <img :src="image" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lightbox" id="lightbox">
      <img src="http://placehold.it/650x650" />
      <div class="lightbox-controls">
        <div class="lightbox-controls-close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="lightbox-controls-previous">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div class="lightbox-controls-next">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      baseUrl: location.origin,
      data: {}
      // images: [],
      // image: {}
    };
  },

  mounted() {
    axios
      .get(
        "https://ovaboss.dev.i.ng/api/v1/products/apple-apple-iphone-x-58-3gb-ram-64gb-rom-12mp-12mp-7mp-smartphone-white"
      )
      .then(response => {
        this.data = response.data;
        console.log(data);
      });

    class ImageViewer {
      constructor(selector) {
        this.selector = selector;
        $(this.secondaryImages).click(() => this.setMainImage(event));
        $(this.mainImage).click(() => this.showLightbox(event));
        $(this.lightboxClose).click(() => this.hideLightbox(event));
      }

      get secondaryImageSelector() {
        return ".secondary-image";
      }

      get mainImageSelector() {
        return ".main-image";
      }

      get lightboxImageSelector() {
        return ".lightbox";
      }

      get lightboxClose() {
        return ".lightbox-controls-close";
      }

      get secondaryImages() {
        var secondaryImages = $(this.selector)
          .find(this.secondaryImageSelector)
          .find("img");
        return secondaryImages;
      }

      get mainImage() {
        var mainImage = $(this.selector).find(this.mainImageSelector);
        return mainImage;
      }

      get lightboxImage() {
        var lightboxImage = $(this.lightboxImageSelector);
        return lightboxImage;
      }

      setLightboxImage(event) {
        var src = this.getEventSrc(event);
        this.setSrc(this.lightboxImage, src);
      }

      setMainImage(event) {
        var src = this.getEventSrc(event);
        this.setSrc(this.mainImage, src);
      }

      //
      // getSrc(node) {
      //   var image = $(node).find('img')
      // }

      setSrc(node, src) {
        var image = $(node).find("img")[0];
        image.src = src;
      }

      getEventSrc(event) {
        return event.target.src;
      }

      showLightbox(event) {
        this.setLightboxImage(event);
        $(this.lightboxImageSelector).addClass("show");
      }

      hideLightbox() {
        $(this.lightboxImageSelector).removeClass("show");
      }
    }

    new ImageViewer(".image-viewer");
  }
};
</script>

<style lang="css" scoped>
.image-viewer {
  /* margin: 25px; */
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.image-viewer .main-image {
  width: 100%;
  height: 400px;
  align-self: center;
  text-align: center;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.image-viewer .main-image img {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.image-viewer .secondary-images {
  align-self: center;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.image-viewer .secondary-images .secondary-image {
  padding: 6.25px;
  height: 50px;
}

.image-viewer .secondary-images .secondary-image img {
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
}

.lightbox {
  -webkit-transition: all 0.5s 0s ease-in-out;
  transition: all 0.5s 0s ease-in-out;
  position: fixed;
  top: -100%;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgba(208, 205, 147, 0.9);
  z-index: 501;
  opacity: 0;
}

.lightbox img {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 0%;
  max-height: 0%;
}

.lightbox .lightbox-controls {
  position: relative;
  height: 100vh;
}

.lightbox .lightbox-controls .lightbox-control,
.lightbox .lightbox-controls .lightbox-controls-close,
.lightbox .lightbox-controls .lightbox-controls-previous,
.lightbox .lightbox-controls .lightbox-controls-next,
.lightbox.show .lightbox-controls .lightbox-controls-previous,
.lightbox.show .lightbox-controls .lightbox-controls-next {
  height: 70px;
  width: 70px;
  position: absolute;
  z-index: 502;
  background: rgba(177, 172, 76, 0.9);
  color: white;
  font-size: 3em;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}

.lightbox .lightbox-controls .lightbox-controls-close {
  position: absolute;
  top: 12%;
  right: 0%;
}

.lightbox .lightbox-controls .lightbox-controls-previous {
  position: absolute;
  top: 50%;
  left: -20%;
  -webkit-transition: all 0.5s 0s ease-in-out;
  transition: all 0.5s 0s ease-in-out;
}

.lightbox .lightbox-controls .lightbox-controls-next {
  position: absolute;
  top: 50%;
  right: -20%;
  -webkit-transition: all 0.5s 0s ease-in-out;
  transition: all 0.5s 0s ease-in-out;
}

.lightbox.show {
  -webkit-transition: all 0.5s 0s ease-in-out;
  transition: all 0.5s 0s ease-in-out;
  top: 0%;
  bottom: 0%;
  opacity: 1;
}

.lightbox.show img {
  -webkit-transition: all 0.5s 0.5s ease-in-out;
  transition: all 0.5s 0.5s ease-in-out;
  max-width: 100%;
  max-height: 100%;
}

.lightbox.show .lightbox-controls .lightbox-controls-previous {
  position: absolute;
  top: 50%;
  left: 0%;
  -webkit-transition: all 0.5s 0.75s ease-in-out;
  transition: all 0.5s 0.75s ease-in-out;
}

.lightbox.show .lightbox-controls .lightbox-controls-next {
  position: absolute;
  top: 50%;
  right: 0%;
  -webkit-transition: all 0.5s 0.75s ease-in-out;
  transition: all 0.5s 0.75s ease-in-out;
}
</style>
