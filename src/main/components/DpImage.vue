<template>
  <div data-class="ProfileDpImageWrapper" :style="cssProps">
    {{ initials }}
    <img
      v-if="!initials.length"
      :src="imgsrc"
      :alt="alt"
      :title="profilePixTitle"
    />
  </div>
</template>

<script>
export default {
  name: "DpImage",
  props: {
    imgsrc: {
      type: String,
      default: "",
      required: false
    },
    alt: {
      type: String,
      default: "",
      required: false
    },
    title: {
      type: String,
      default: null,
      required: false
    },
    firstname: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      default: "",
      required: false
    },
    width: {
      type: String,
      default: "40px",
      required: false
    },
    height: {
      type: String,
      default: null,
      required: false
    },
    background: {
      type: String,
      default: "#222838",
      required: false
    },
    color: {
      type: String,
      default: "#FFF",
      required: false
    },
    radius: {
      type: String,
      default: "50%",
      required: false
    },
    textsize: {
      type: String,
      default: "1.5rem",
      required: false
    },
    placeholder: {
      type: String,
      default: null,
      required: false
    }
  },
  computed: {
    cssProps: function() {
      return {
        "--profile-dp-image-wrapper-width": this.width,
        "--profile-dp-image-wrapper-height": this.height || this.width,
        "--profile-dp-image-wrapper-background": this.background,
        "--profile-dp-image-wrapper-color": this.color,
        "--profile-dp-image-wrapper-radius": this.radius,
        "--profile-dp-image-wrapper-font-size": this.textsize
      };
    },
    initials: function() {
      return this.placeholder != null
        ? this.placeholder
        : this.imgsrc.length > 4
        ? ""
        : `${this.fName.charAt(0)}${this.lName.charAt(0)}`;
    },
    fName: function() {
      return typeof this.firstname == "undefined" ? "" : this.firstname;
    },
    lName: function() {
      return typeof this.lastname == "undefined" ? "" : this.lastname;
    },
    profilePixTitle: function() {
      return this.title || `${this.fName} ${this.lName} Display Picture`;
    }
  }
};
</script>

<style>
div[data-class="ProfileDpImageWrapper"] {
  width: var(--profile-dp-image-wrapper-width);
  height: var(--profile-dp-image-wrapper-height);
  line-height: var(--profile-dp-image-wrapper-height);
  background: var(--profile-dp-image-wrapper-background) !important;
  color: var(--profile-dp-image-wrapper-color) !important;
  border-radius: var(--profile-dp-image-wrapper-radius);
  font-size: var(--profile-dp-image-wrapper-font-size);
  text-align: center;
  display: inline-block;
  font-weight: bolder;
}
div[data-class="ProfileDpImageWrapper"] > img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: var(--profile-dp-image-wrapper-radius);
}
</style>
