<template>
  <div>
    <el-menu
    router
    :style="{height: '100%'}"
  >
    <el-menu-item router index="/admin/create">
      <el-button type="success">Добавить пост</el-button>
    </el-menu-item>
  </el-menu>
    <hr style="margin-top: 20px"><br>
    <el-table :data="posts" style="width: 100%">

      <el-table-column
        prop="title"
        label="Название"
      />
      <el-table-column
        prop="category"
        label="Категория"
      />
      <el-table-column label="Дата">
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
            {{ new Date(date).toLocaleString() }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="Просмотры">
        <template slot-scope="{row: {views}}">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">
            {{ views }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="Комментарии">
        <template slot-scope="{row: {comments}}">
          <i class="el-icon-message"></i>
          <span style="margin-left: 10px">
            {{ comments.length }}
          </span>
        </template>
      </el-table-column>
      
      <el-table-column label="Действия">
        <template slot-scope="{row}">
          <el-tooltip effect="dark" content="Открыть пост" placement="top">
            <el-button 
              icon="el-icon-edit"
              type="primary"
              circle
              @click="open(row._id)"
            />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Удалить пост" placement="top">
            <el-button
              icon="el-icon-delete"
              type="danger"
              circle
              @click="remove(row._id)"
            />
          </el-tooltip>
          
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin')
    return {posts}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отменить',
        type: 'warning'
        })
        await this.$store.dispatch('post/remove', id)
        this.posts = this.posts.filter(p => p._id !== id)
        
        this.$message.success('Пост удален')
      } catch (e) {

      }
    }
  }
};
</script>


<style scoped>
  .el-menu-item:focus, .el-menu-item:hover {
    background-color: rgba(0,0,0,0);
  }
</style>