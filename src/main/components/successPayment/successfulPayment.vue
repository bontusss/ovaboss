<template>
  <div>
    <section class="parent">
      <i class="far fa-check-circle"></i>
      <div class="right">
        <p class="warning">Payment Successful</p>
        <p class="sub-title">
          Your payment has been processed! Details of transactions are included
          below
        </p>
      </div>
      <hr />
      <div class="catg">
        <p>
          <b>Amount</b>
        </p>
        <p>
          <b>$12,000.00</b>
        </p>
      </div>
      <div class="catg">
        <p>Order ID</p>
        <p>234657679</p>
      </div>
      <div class="catg">
        <p>Payment Type</p>
        <p>Net Banking</p>
      </div>
      <div class="catg">
        <p>Transaction Time</p>
        <p>11 Nov 2019 - 03:40:50</p>
      </div>
    </section>
    <section class="actions">
      <button class="btn btn-danger">Print Reciept</button>
      <button class="btn btn-info ml-5">
        <a href="index.html">Back To Home</a>
      </button>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.parent {
  margin-top: 7%;
  background-color: #f8f9fa;
  width: 600px;
  height: 330px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
}

a {
  text-decoration: none;
  color: white;
}

.warning {
  font-size: 18px;
  color: rgb(16, 190, 69);
}

.sub-title {
  margin-top: -20px;
  font-size: 12px;
}

.far {
  font-size: 50px;
  color: rgb(16, 190, 69);
  margin-right: 10px;
}

.right {
  display: inline-block;
  padding-left: 5px;
}

.inline-block {
  display: inline-block;
}
.catg {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.actions {
  margin-left: 35%;
  margin-top: 20px;
}

@media (min-width: 320px) and (max-width: 991px) {
  .parent {
    width: 100%;
    margin-top: 140px;
    padding: 20px;
  }
  .sub-title {
    font-size: 10px;
  }
  .actions {
    margin-left: 5%;
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    color: white !important;
  }
}
</style>
