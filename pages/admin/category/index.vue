<template>
  <div>
    <el-menu
    router
    :style="{height: '100%'}"

  >
    <el-menu-item router index="/admin/createcat">
      <el-button type="success">Добавить категорию</el-button>
    </el-menu-item>
  </el-menu>
    <hr style="margin-top: 20px"><br>
    <el-table :data="categories" style="width: 100%">

      <el-table-column
        prop="title"
        label="Название"
      />
      <el-table-column
        prop="slug"
        label="slug"
      />
      <el-table-column label="Дата">
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
            {{ new Date(date).toLocaleString() }}
          </span>
        </template>
      </el-table-column>
      
      <el-table-column label="Действия">
        <template slot-scope="{row}">
          <el-tooltip effect="dark" content="Открыть Категорию" placement="top">
            <el-button 
              icon="el-icon-edit"
              type="primary"
              circle
              @click="open(row._id)"
            />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Удалить Категорию" placement="top">
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
    const categories = await store.dispatch('category/fetchAdmin')
    return {categories}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/category/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить категорию?', 'Внимание!', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отменить',
        type: 'warning'
        })
        await this.$store.dispatch('category/remove', id)
        this.categories = this.categories.filter(p => p._id !== id)
        
        this.$message.success('Категория удалена')
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