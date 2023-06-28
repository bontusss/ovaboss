<template>
  <div class="parent">
    <section class="i">
      <p>Quantity</p>
      <div class="minusplusnumber">
        <div class="mpbtn minus" v-on:click="mpminus()">-</div>
        <div id="field_container">
          <input type="number" v-model="newValue" disabled />
        </div>
        <div class="mpbtn plus" v-on:click="mpplus()">+</div>
      </div>
    </section>
    <div class="i">
      <section class="color">
        <size-picker />
      </section>
    </div>
    <div class="size i">
      <color-picker />
    </div>
    <div class="social">
      <share />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 0,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    }
  },

  data() {
    return {
      newValue: 0
    };
  },

  methods: {
    getNotificationClass(notification) {
      return `alert alert-${notification.type}`;
    },
    mpplus: function() {
      if (this.max === undefined || this.newValue < this.max) {
        this.newValue = this.newValue + 1;
        this.$emit("input", this.newValue);
      }
    },
    mpminus: function() {
      if (this.newValue > this.min) {
        this.newValue = this.newValue - 1;
        this.$emit("input", this.newValue);
      }
    }
  },
  watch: {
    value: {
      handler: function(newVal, oldVal) {
        this.newValue = newVal;
      }
    }
  },
  created: function() {
    this.newValue = this.value;
  }
};
</script>
<style lang="css" scoped>
p {
  margin-bottom: -4px;
  font-weight: bold;
}
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: -1px;
}
.minusplusnumber {
  border: 1px solid silver;
  border-radius: 5px;
  background-color: #fff;
  margin: 3.5px 0px 0 0px;
  display: inline-block;
  user-select: none;
}
.minusplusnumber div {
  display: inline-block;
}
.minusplusnumber #field_container input {
  width: 50px;
  text-align: center;
  font-size: 15px;
  padding: 3px;
  border: none;
}
.minusplusnumber .mpbtn {
  padding: 3px 10px 3px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.minusplusnumber .mpbtn:hover {
  background-color: #ddd;
}
.minusplusnumber .mpbtn:active {
  background-color: #c5c5c5;
}
.i {
  border: 1px solid #f8f9fa;
  background-color: #f8f9fa;
}

.wish {
  font-weight: bold;
}

@media (min-width: 320px) and (max-width: 991px) {
  .parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }
  .minusplusnumber {
    margin-left: 0;
  }
}
</style>
