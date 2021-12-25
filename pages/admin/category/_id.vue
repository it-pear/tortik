<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/category">Категории</el-breadcrumb-item>
      <el-breadcrumb-item>{{category.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <!-- <h1>Вход</h1> -->

      <el-form-item label="Измените заголовок" prop="title">
        <el-input
          v-model.trim="controls.title"
        />
      </el-form-item>

      <div class="mb">
        <small class="mr">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
            {{ new Date(category.date).toLocaleString() }}
          </span>
        </small>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост | ${this.category.title}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const category = await store.dispatch('category/fetchAdminById', params.id)
    return {category}
  },
  data() {
    return {
      loading: false,
      controls: {
        title: ''
      },
      rules: {
        title: [
          { required: true, message: 'Заголовок не должен быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.controls.title = this.category.title
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            id: this.category._id
          }

          try {
            await this.$store.dispatch('category/update', formData)
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
  .page-wrap {
    max-width: 600px;
  }

  .mr {
    margin-right: 2rem;
  }
</style>
