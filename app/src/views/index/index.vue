<template>
  <div class="home">
    <h5>This is Home Page</h5>
    <el-button @click="copyval">按钮</el-button>
  </div>  
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
function copy (text) {
  try {
    let el = document.createElement('input')
    el.style.opacity = '0'
    document.body.appendChild(el)
    el.value = text
    let editable = el.contentEditable
    let readOnly = el.readOnly
    el.contentEditable = true
    el.readOnly = false
    let range = document.createRange()
    range.selectNodeContents(el)
    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    el.setSelectionRange(0, 999999)
    el.contentEditable = editable
    el.readOnly = readOnly
    let flag = document.execCommand('copy')
    // el.blur()
    console.log('9',flag, text, el)
  } catch (e) {
  }
}
const copyval = async () => {
     copy('999999999999999999999999999')
}
onMounted(()=>{
  const inpt = document.createElement('input')
  inpt.value = 'djmhshdh'
  inpt.select()
  document.body.appendChild(inpt)
  document.execCommand
})
</script>
