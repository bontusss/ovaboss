<template>
  <div>
    <div class="container">
      <section class="caption">
        <i class="fas fa-truck"></i>
        <p class="la">Delivery / Pickup Options</p>
      </section>
      <section class="main">
        <div class="parent">
          <div class="delivery">
            <div class="top">
              <p>Deliver to me</p>
              <button
                style="display:inline"
                class="btn btn-dark d-inline-block"
              >
                Specify delivery address
              </button>
            </div>
            <hr />

            <div class="form-group">
              <label for="exampleFormControlTextarea1"
                >Type in your preferred delivery address</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="pickup">
            <div class="top">
              <p>Pickup from a store</p>
              <button
                style="display:inline"
                class="btn btn-dark d-inline-block"
              >
                Select pickup location
              </button>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.container {
  margin-top: 100px;
}

.la {
  display: inline-block;
  padding-left: 30px;
  color: black;
}
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 120px;
  grid-row-gap: 0px;
}

.top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: 20px;
}

.delivery {
  width: 500px;
  height: 300px;
  border: 1px solid #eee;
}

.pickup {
  width: 500px;
  height: 300px;
  border: 1px solid #eee;
}

textarea {
  background-color: #f8f9fa;
  outline-color: gold;
  border: none;
}

textarea:focus {
}
</style>
