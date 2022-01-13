<template>
  <div class="page-wrap page-admin-post">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <!-- <h1>Вход</h1> -->

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          v-model.trim="controls.text"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-form-item label="Картинка" prop="text" class="el-form-item-image">
        <img :src='image' alt="">
        <el-button
          type="danger"
          round
          :loading="loading"
          @click="delImage"
        >
          Удалить картинку
        </el-button>
        <br>
        <el-upload
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
        <el-button
          type="warning"
          round
          :loading="loading"
          @click="uploudmage"
        >
          Обновить картинку
        </el-button>
      </el-form-item>
      <br>
      <div class="mb">
        <small class="mr">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
            {{ new Date(post.date).toLocaleString() }}
          </span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span> {{ post.views }} </span>
        </small>
      </div>
      <br>
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
      title: `Пост | ${this.post.title}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },
  data() {
    return {
      loading: false,
      post: [],
      image: null,
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
    this.controls.text = this.post.text
    this.image = this.post.imageUrl
  },
  methods: {
    handleImageChange(file) {
      this.image = file.raw 
    },
    uploudmage() {
      this.$refs.form.validate(async valid => {
        if (valid && typeof(this.image) === 'object') {
          this.loading = true
          const formData = {
            image: this.image,
            id: this.post._id
          }
          
          // console.log(post)
          try {
            await this.$store.dispatch('post/uploudImage', formData)
            const post = await this.$store.dispatch('post/fetchAdminById', formData.id)
            this.image = post.imageUrl
              
              // return this.image = post
            this.$message.success('картинка обновлена')
            this.loading = false
          } catch (e) {
            this.$message.warning('что то пошло не так, попробуйте позже')
            this.loading = false
          }
        }
      })   
    },
    delImage() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true
          
          const formData = {
            imageUrl: null,
            id: this.post._id
          }
          
          try {
            await this.$store.dispatch('post/updateImage', formData)
            
            this.$message.success('картинка удалена')
            this.loading = false
            this.image = null
          } catch (e) {
            this.$message.warning('что то пошло не так, попробуйте позже')
            this.loading = false
          }
          
        }
      })
    },
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true
          
          const formData = {
            text: this.controls.text,
            id: this.post._id
          }
          
          try {
            await this.$store.dispatch('post/update', formData)
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


<style lang="scss">
.page-admin-post {
  max-width: 600px;
  .mr {
    margin-right: 2rem;
  }

  .el-form-item-image,
  .el-form-item-image .el-form-item__content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      max-height: 100px;
    }
    button {
      margin-top: 14px;
    }
  }
}
  
</style>
