<template>
  <div>
    <page-header></page-header>
    <div class="container">
      <div class="row product-info">
        <div class="col-md-6" style="display: inline-block;">
          <div class="pdp-product-images">
            <div
              id="product-details-responsive-carousel"
              class="carousel slide"
              data-interval="false"
              data-ride="false"
              data-keyboard="false"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#product-details-responsive-carousel"
                  data-slide-to="0"
                  class="active"
                >
                  <img
                    id="mainProductImg"
                    alt="Comvita"
                    src="../../static/images/products/manuka.png"
                    class="ImageTester"
                  >
                </li>
              </ol>

              <a
                class="left carousel-control hide"
                href="#product-details-responsive-carousel"
                role="button"
                data-slide="prev"
              >
                <img src="../../static/images/products/manuka.png" alt class="ImageTester">
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="right carousel-control hide"
                href="#product-details-responsive-carousel"
                role="button"
                data-slide="next"
              >
                <img
                  src="/_assets/new_assets/img/icons/wide-arrow-right-orange.png"
                  alt
                  class="ImageTester"
                >
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="product-info">
            <h1
              class="product-name bold m-b-0-i hidden-xs"
            >Original Flavour 500ml - Fresh-Picked Olive Leaf Extract</h1>
            <h4 clas="product-description bold text-yellow hidden-xs">Great For Your Whole Family!</h4>
            <form id name action="#" method="post">
              <div class="span4 product-sidebar listDataItemsWrap" style="position: relative;">
                <p class="product-price bold">$ 40.50</p>
                <div class="hide">
                  <span class="scheduleFrequencyError">Please select order frequency</span>
                </div>
                <div class="product-properties container pdptabletContanienr">
                  <div class="row tabletControler">
                    <div class="col-sm-4 pdpselectBox">
                      <p class="comvita-select-label">Quantity:</p>
                    </div>
                    <div class="col-md-8 pdpselectBox">
                      <div class="product-option">
                        <div class="jq_numbertxt pdp">
                          <div class="jq_numbtn jq_minus Qn_numbtn">-</div>
                          <input
                            rel="false"
                            class="jq_numinput Qn_numinput addItemToList"
                            name="qty"
                            type="number"
                            value="1"
                          >
                          <div class="jq_numbtn jq_plus Qn_numbtn">+</div>
                        </div>

                        <input
                          type="hidden"
                          name="parentProdId"
                          class="_prodId addItemToRegis addItemToList"
                          value="prod790030"
                          data-change-store-submit="prodId"
                          data-change-store-errors="required"
                        >
                        <input
                          type="hidden"
                          name="prodId"
                          class="_prodId addItemToRegis productId addItemToList"
                          value="prod790030"
                          data-change-store-submit="prodId"
                          data-change-store-errors="required"
                        >
                        <input
                          type="hidden"
                          name="skuId"
                          value="OLA333"
                          class="addItemToRegis _skuId addItemToList changeStoreSkuId"
                          data-change-store-submit="skuId"
                          data-change-store-errors="required"
                        >
                        <input
                          type="hidden"
                          name="price"
                          value="$ 40.50"
                          class="addItemToList addItemToRegis"
                        >
                        <input
                          type="hidden"
                          class="addToCartSubmitData"
                          name="storeId"
                          value
                          data-change-store-storeid="storeId"
                        >
                        <input
                          type="hidden"
                          class="addToCartSubmitData"
                          name="bts"
                          value
                          data-change-store-storeid="bts"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row m-t-5">
                    <div class="col-sm-4 pdpselectBox">
                      <p class="comvita-select-label">Size:</p>
                    </div>
                    <div class="col-md-8 pdpselectBox">
                      <div class="product-option">
                        <div class="sizePicker">
                          <select
                            id="prodSelectSizeOpt"
                            class="prodSelectSizeOpt comvita-select hide"
                          >
                            <option selected="selected" value="OLA333" wishlistflag="false">500ml</option>
                          </select>
                          <div class="onlyChildCss">
                            <input
                              class="btn btn-comvita-outline sizeIndicator selected"
                              type="button"
                              value="500ml"
                              prodselect="OLA333"
                              wishlistflag="false"
                            >
                          </div>
                          <input
                            type="hidden"
                            name="prodSize"
                            class="_prodSize addItemToRegis addItemToList"
                            value="500ml"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inner-pad">
                  <div class="comvita-row">
                    <div
                      style="font-size: 16px"
                    >Always read the label. Use only as directed. If symptoms persist consult your healthcare practitioner.</div>
                  </div>
                </div>

                <div class="col-md-12 m-t-20 p-l-0-i" style="position: relative;">
                  <div class="comvita-error">
                    <ul class="error-append"></ul>
                  </div>
                  <input
                    id="cloneWaiting"
                    class="add-to-cart btn btn-comvita medium"
                    type="submit"
                    value="Add to Cart"
                    name="btnAddToCart"
                    style
                  >
                </div>

                <div class="col-md-12 m-t-20 p-l-0-i addToList">
                  <div id="rcs-alert-messages-wrapper" class="row-fluid"></div>
                  <input
                    id="btnAddToList"
                    type="button"
                    class="uppercase add-to-wishlist"
                    name="btnAddToList"
                    value="Add to Wishlist"
                    data-toggle="button"
                  >
                  <input type="hidden" id="updated_id_value" value="Added to Wishlist">
                  <input type="hidden" id="updated_id_value_addtoWishlist" value="Add to Wishlist">
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>


<script>
import PageHeader from "@/components/header";
import PageFooter from "@/components/footer";
export default {
  name: "Product Detail",
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
</style>
