<template>
  <section>
    <ul 
      v-for="product in products" 
      :key="product.id"
    >
    <li>{{product.title}}</li>
    </ul>
    
  </section>
</template>

<script>
import ProductsListCard from './ProductListCard'


export default {
  name: "CommonProductsListPage",
  components: { ProductsListCard },
  data() {
    return {
      products: [],
      required: true,
    };
  },
  props: {
    loadProducts: {
      type: Function,
      required: true,
    }
  },
  async created() {
    this.products = await this.loadProducts();
  }
};
</script>
