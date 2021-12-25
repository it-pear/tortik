<template>
  <div id="product-page" class="page-hero-section division">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="hero-txt text-center white-color">
            <!-- Breadcrumb -->
            <div id="breadcrumb">
              <div class="row">
                <div class="col">
                  <div class="breadcrumb-nav">
                    <nav aria-label="панировочные сухари">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <nuxt-link to="/"
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit"
                                >Меню</font
                              ></font
                            >
                          </nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          <font style="vertical-align: inherit"><font style="vertical-align: inherit">{{category}}{{product.title}}</font></font>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h2 class="h2-xl">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >{{category}}{{product.title}}</font
                ></font>
            </h2>
          </div>
        </div>
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </div>
</template>

<script>
export default {
  props: {
    category: String,
    product: Object
  }
}
</script>

<style lang="scss" scoped>
  .page-hero-section{
    position: relative;
  }
  .page-hero-section:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
  }
</style>