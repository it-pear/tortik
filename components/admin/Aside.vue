<template>
  <el-menu
    router
    :style="{height: '100%'}"
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Посты</span>
    </el-menu-item>

    <el-menu-item index="/admin/orders">
      <i class="el-icon-check"></i>
      <span>Заказы</span>
    </el-menu-item>

    <el-menu-item index="/admin/category">
      <i class="el-icon-finished"></i>
      <span>Категории</span>
    </el-menu-item>

    <el-menu-item index="/admin/user">
      <i class="el-icon-service"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-setting"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>