<template>
  <div>
    <el-menu
    router
    :style="{height: '100%'}"
  >
  </el-menu>
    <el-table :data="posts" style="width: 100%">

      <el-table-column
        prop="_id"
        label="#"
      />
      <el-table-column
        prop="name"
        label="Имя"
      />
      <el-table-column
        prop="phone"
        label="Телефон"
      />
      <el-table-column
        prop="adres"
        label="Адрес"
      />
      <el-table-column
        prop="cartprice"
        label="Сумма"
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
    const posts = await store.dispatch('order/fetchAdmin')
    return {posts}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/order/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить Заказ?', 'Внимание!', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отменить',
        type: 'warning'
        })
        await this.$store.dispatch('order/remove', id)
        this.posts = this.posts.filter(p => p._id !== id)
        
        this.$message.success('Заказ удален')
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