<template>
  <div>
    <term/>
    <v-btn @click="add()">add</v-btn>
  <editor v-for="i in editors" :key="i" :id="i" @close="closeEditor"/>
  {{editors}}
  </div>
</template>

<script>
import Editor from '~/components/Editor.vue'
import Term from '~/components/Terminal.vue'

export default {
  components: {
    Editor,
    Term
  },
  layout:"editor",
  data(){
    return{
      editors:[]
    }
  },
  mounted(){
    if(this.editors.length===0){
      this.editors.push(0)
    }
  },
  methods:{
    add(){
      this.editors.push(this.editors.slice(-1)[0]+1)
    },
    closeEditor(id){
      this.editors = this.editors.filter(n=>n!==id)
    }
  }
}
</script>
