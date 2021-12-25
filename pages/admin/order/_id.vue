<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/orders">Заказ</el-breadcrumb-item>
      <el-breadcrumb-item>{{order._id}}</el-breadcrumb-item>
    </el-breadcrumb>
    <ul>
      <li><b>Номер заказа</b>{{order._id}}</li>
      <li><b>Имя</b>{{order.name}}</li>
      <li><b>Телефон</b>{{order.phone}}</li>
      <li><b>Адрес</b>{{order.adres}}</li>
      <li><b>Сумма заказа</b>{{order.cartprice}} рублей</li>
    </ul>
    <br>
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Изображение</th>
          <th scope="col">Название</th>
          <th scope="col">Количество</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="post in order.posts"
          :key="post.key"
        >
          <td class="product-name">
            <div class="cart-product-desc">
              <small class="h5-sm">{{ post._id }}</small>
            </div>
          </td>
          <td data-label="Изображение" class="product-name">
            <div class="cart-product-img">
              <img :src="`${post.imageUrl}`" alt="cart-preview">
            </div>
          </td>
          <td data-label="Название" class="product-name">            
            <div class="cart-product-desc">
              <h5 class="h5-sm">{{ post.title }}</h5>
            </div>
          </td>
          <td data-label="Количество" class="product-qty">
            <div class="cart-list-item__qty-block">
              <span class="cart-list-item__qty-count">{{ post.count }}</span>
            </div>
          </td>
          <td data-label="Цена" class="product-price">
            <h5 class="h5-md">{{ post.totalprice }} ₽</h5>
          </td>
        </tr>

      </tbody>
    </table>
    <br>  
    <div class="mb">
        <small class="mr">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">
            Дата заказа . 
            {{ new Date(order.date).toLocaleString() }}
            </span>
        </small>
        <!-- <small>
            <i class="el-icon-view"></i>
            <span> {{ order.views }} </span>
        </small> -->
    </div>
  </div>
</template>


<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Заказ | ${this.order._id}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const order = await store.dispatch('order/fetchById', params.id)
    await store.dispatch('order/addView', order)
    return {
      order: {...order, views: ++order.views}
    }
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.controls.text = this.order.text
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.order._id
          }

          try {
            await this.$store.dispatch('order/update', formData)
            this.$message.success('Пост обновлен')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
          
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
  ul {
    max-width: 600px;
    padding: 15px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    margin-bottom: 15px;
    li {
      font-size: 22px;
      b {
        font-weight: 600;
        margin-right: 20px;
      }
    }
  }
  .mr {
    margin-right: 2rem;
  }
</style>
