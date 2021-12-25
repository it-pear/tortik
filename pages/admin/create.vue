<template>
  <div>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >

      <h1 class="mb">Создать новое блюдо</h1>

      <el-form-item label="Введите название блюда" prop="title">
        <el-input
          v-model="controls.title"
        />
      </el-form-item>

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          v-model="controls.text"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-button class="mb" type="success" plain @click="previewDialog = true">Предпросмотр</el-button>

      <el-form-item label="Введите цену в рублях (только число)" prop="price">
        <el-input
          v-model="controls.price"
          resize="none"
          pattern="^[0-9]+$"
        />
      </el-form-item>

      <el-form-item label="Выберите категорию" prop="category">
        <el-select v-model="controls.category" placeholder="Выберите категорию">
          <el-option
            v-for="item in categories"
            :key="item.category"
            :label="item.title"
            :value="item._id"
          >
          </el-option>
          
        </el-select>
      </el-form-item>

      <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
        <div :key="controls.text">
          <vue-markdown>{{controls.text}}</vue-markdown> 
        </div>
      </el-dialog>

      <el-upload
        class="mb"
        drag
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleImageChange"  
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
        <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
      </el-upload>

      <el-form-item>
        <el-button type="primary" native-type="submit" round :loading="loading">
          Создать пост
        </el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>


export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      image: null,
      previewDialog : false,
      loading: false,
      controls: {
        title: '',
        text: '',
        price: '',
        category: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ],
        title: [
          { required: true, message: 'Текст поста не может быть пустым', trigger: 'blur' }
        ],
        price: [
          { required: true, message: 'Поле цены продукта не может быть пустым', trigger: 'blur' }
        ],
        category: [
          { required: true, message: 'Поле категории не должно быть пустым', trigger: 'change' }
        ],
      }
    }
  },
  computed: {
    categoryname() {
      if (! this.controls.category) {
        return 'Нет значения';
      }
      const value = this.controls.category
      const selectedOption = this.categories.find(item => item._id == value)
      return selectedOption.title
    }
  },
  methods: {
    handleImageChange(file, fileLiset) {
      this.image = file.raw
    },
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true
          
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            price: this.controls.price,
            category: this.controls.category,
            categoryname: this.categoryname,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.controls.price = ''
            this.controls.category = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Пост создан')
          } catch (e) {} finally {
            this.loading = false
          }
          
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    }
  },
  async asyncData({store}) {
    const categories = await store.dispatch('category/fetch')
    return {categories}
  }
};
</script>

<style lang="scss" scoped>
  form {
    max-width: 600px;
  }
</style>