<template>
  <div>
    <div class="container">
      <div class="shopping-cart">
        <div class="column-labels">
          <label class="product-image">Image</label>
          <label class="product-details"></label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>
        <!-- template that displays the product on the cart -->
        <div class="product" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img :src="product.image" />
          </div>
          <div class="product-details">
            <div class="product-title">
              <p class="product-title">{{ product.name }}</p>
            </div>
            <p class="product-description">{{ product.details }}</p>
          </div>
          <div class="product-price">{{ product.price }}</div>
          <div class="product-quantity">
            <input type="number" value="1" min="1" />
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>
          <div class="product-line-price">{{ product.price }}</div>
        </div>
        <!-- section that calculate the tax, shipping an total amount payable -->
        <div class="totals">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">71.97</div>
          </div>
          <div class="totals-item">
            <label>Tax (5%)</label>
            <div class="totals-value" id="cart-tax">3.60</div>
          </div>
          <div class="totals-item">
            <label>Shipping</label>
            <div class="totals-value" id="cart-shipping">15.00</div>
          </div>
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">90.57</div>
          </div>
        </div>

        <a class="btn" href="paymentsuccess.html">Checkout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          image: "./images/adv_2.png",
          name: "Wireless Mouse Pad",
          details:
            "Mouse pad of the spec is without a wire, it works with a sensor",
          price: 2000
        },
        {
          id: 2,
          image: "./images/adv_3.png",
          name: "Modern Infra Music Speakers",
          details:
            "Mouse pad of the spec is without a wire, it works with a sensor",
          price: 7000
        }
      ]
    };
  },
  mounted() {
    /* Set rates + misc */
    var taxRate = 0.05;
    var shippingRate = 15.0;
    var fadeTime = 300;

    /* Assign actions */
    $(".product-quantity input").change(function() {
      updateQuantity(this);
    });

    $(".product-removal button").click(function() {
      removeItem(this);
    });

    /* Recalculate cart */
    function recalculateCart() {
      var subtotal = 0;

      /* Sum up row totals */
      $(".product").each(function() {
        subtotal += parseFloat(
          $(this)
            .children(".product-line-price")
            .text()
        );
      });

      /* Calculate totals */
      var tax = subtotal * taxRate;
      var shipping = subtotal > 0 ? shippingRate : 0;
      var total = subtotal + tax + shipping;

      /* Update totals display */
      $(".totals-value").fadeOut(fadeTime, function() {
        $("#cart-subtotal").html(subtotal.toFixed(2));
        $("#cart-tax").html(tax.toFixed(2));
        $("#cart-shipping").html(shipping.toFixed(2));
        $("#cart-total").html(total.toFixed(2));
        if (total == 0) {
          $(".checkout").fadeOut(fadeTime);
        } else {
          $(".checkout").fadeIn(fadeTime);
        }
        $(".totals-value").fadeIn(fadeTime);
      });
    }

    /* Update quantity */
    function updateQuantity(quantityInput) {
      /* Calculate line price */
      var productRow = $(quantityInput)
        .parent()
        .parent();
      var price = parseFloat(productRow.children(".product-price").text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;

      /* Update line price display and recalc cart totals */
      productRow.children(".product-line-price").each(function() {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
    }

    /* Remove item from cart */
    function removeItem(removeButton) {
      /* Remove row from DOM and recalc cart total */
      var productRow = $(removeButton)
        .parent()
        .parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
  }
};
</script>

<style lang="css" scoped>
.column-labels {
  display: grid;
  grid-template-columns: 1fr 2fr repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #f8f9fa;
  color: #fff;
}

.product {
  display: grid;
  grid-template-columns: 1fr 2fr repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
/* Apply clearfix in a few places */
/* Apply dollar signs */
.product .product-price:before,
.product .product-line-price:before,
.totals-value:before {
  content: "$";
}

/* Body/Header stuff */

label {
  color: #000;
  padding-top: 6px;
}

.shopping-cart {
  margin-top: 20px;
  /* border-style: solid;
  border-width: 1px; */
}

/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-top: 20px;
}
.product .product-image {
}
.product .product-image img {
  width: 100px;
}
.product .product-details .product-title {
  margin-left: auto;
  margin-right: auto;
  margin-right: 20px;
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
}

.product-title {
  color: black;
  font-weight: bold;
  font-size: 20px;
}
.product .product-details .product-description {
  margin: 5px 20px 5px 0;
  line-height: 1.4em;
}
.product .product-quantity input {
  width: 40px;
}
.product .remove-product {
  border: 0;
  padding: 4px 8px;
  background-color: #c66;
  color: #fff;
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
  font-size: 12px;
  border-radius: 3px;
}
.product .remove-product:hover {
  background-color: #a44;
}

/* Make adjustments for tablet */
@media (min-width: 320px) and (max-width: 991px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }

  .column-labels {
    cartdescdisplay: none;
  }

  .product-image {
    float: right;
    width: auto;
  }
  .product-image img {
    margin: 0 0 10px 10px;
  }

  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }

  .product-price {
    clear: both;
    width: 70px;
  }

  .product-quantity {
    width: 100px;
  }
  .product-quantity input {
    margin-left: 20px;
  }

  .product-quantity:before {
    content: "x";
  }

  .product-removal {
    width: auto;
  }

  .product-line-price {
    float: right;
    width: 70px;
  }
}
/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  .product-removal {
    float: right;
  }

  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }

  .product .product-line-price:before {
    content: "Item Total: $";
  }

  .totals .totals-item label {
    width: 60%;
  }
  .totals .totals-item .totals-value {
    width: 40%;
  }
}
</style>
