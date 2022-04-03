<template>
  <el-row class="tac">
    <el-col :span="5">
      <el-menu
        default-active="2"
        class="el-menu-vertica t16"
        @open="handleOpen"
        @close="handleClose"
      >
        <div v-for="item in routes" :key="item.name">
          <el-menu-item :index="index+1" @click="toPage(item.name)">
            <el-icon><setting /></el-icon>
            <span>{{item.name}}</span>
          </el-menu-item>
          <!-- <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu> -->
        </div>
      </el-menu>
    </el-col>
    <el-col :span="19">
        <router-view />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import router, { routes } from '@/router'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const toPage = (name) => {
  console.log(name, '9999name')
  if (name == 'Home') {
    name = '/'
  }
  router.push(name)
}
</script>
<style lang="scss" scoped>
.el-menu-vertical {
  
}
</style>
