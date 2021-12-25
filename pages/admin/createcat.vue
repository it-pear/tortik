<template>
  <div>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >

      <h1 class="mb">Создать новую категорию</h1>

      <el-form-item label="Введите название категории" prop="title">
        <el-input
          v-model="controls.title"
        />
      </el-form-item>

      <el-form-item label="Введите название slug (название категории на английском)" prop="slug">
        <el-input
          v-model="controls.slug"
          pattern="^[a-zA-Z]+$"
        />
      </el-form-item>

      <el-form-item label="Миниатюра для категории"><br>
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
      </el-form-item>
      

      <el-form-item>
        <el-button type="primary" native-type="submit" round :loading="loading">
          Создать категорию
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
      loading: false,
      controls: {
        title: '',
        slug: ''
      },
      rules: {
        title: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ],
        slug: [
          { required: true, message: 'Текст поста не может быть пустым', trigger: 'blur' }
        ]
      }
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
            slug: this.controls.slug,
            image: this.image
          }

          try {
            await this.$store.dispatch('category/create', formData)
            this.controls.title = ''
            this.controls.slug = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Категория создана')
          } catch (e) {} finally {
            this.loading = false
          }
          
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    }
  }
  
};
</script>

<style lang="scss" scoped>
  form {
    max-width: 600px;
  }
</style>