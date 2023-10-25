<template>
  <div>
    <div class="product-preview">
      <div class="tabs-content">
        <!-- TAB-1 CONTENT -->
        <div id="tab-1-img" class="tab-content text-center displayed">
          <img class="img-fluid" :src="activeImage" :alt="product.title">
        </div>
      </div>
      <div class="tabs-nav">
        <div class="row">
          <div class="col-lg-12 text-center">
            <ul class="tabs-2 clearfix">
               <li
                v-for="image in product.images"
                :key="image"
                class="tab-link displayed"
                @click="showImage(image.filname)"
              >
                <img :src="`/${image.filname}`" :alt="product.title">
              </li>
            </ul>
          </div>
        </div>	
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'ProductGallery',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedImage: ''
    }
  },
  computed: {
    activeImage () {
      if (this.selectedImage) {
        return '/'+this.selectedImage
      } else if (this.product.imageUrl) {
        return this.product.imageUrl
      } else {
        return ''
      }
    }
  },
  methods: {
    showImage (img) {
      this.selectedImage = img
    }
  }
}
</script>

<style scoped lang="scss" scoped>
  .tab-content {
    img{
      max-height: 500px;
    }
  }
</style>
