<template>
   <Moveable
      class="moveable"
      v-bind="moveable"
      @drag="handleDrag"
      @resize="handleResize"
      @scale="handleScale"
      @rotate="handleRotate"
      @warp="handleWarp"

   >
   <v-card class="editor">
      <v-system-bar color="grey darken-3" dense>
         Editor
         <v-spacer/>
         <v-icon @click="$emit('close', id)">mdi-close-circle</v-icon>
         <v-icon @click="changeStatus"
         >mdi-arrow-expand-all</v-icon>
      </v-system-bar>
      <div :id="'editor'+id" :style="{height:'276px'}"></div>
   </v-card>
   </Moveable>
</template>

<script>

export default {
props:{
   id:''
},
data () {
   return {
      moveable: {
         draggable: false,
         throttleDrag: 0,
         resizable: false,
         throttleResize: 1,
         keepRatio: false,
         scalable: false,
         throttleScale: 0,
         rotatable: false,
         throttleRotate: 0
      }
   }
},
mounted(){
   const editor = ace.edit("editor"+this.id);
   editor.setTheme("ace/theme/tomorrow_night_bright");
   editor.session.setMode("ace/mode/php");
   editor.setOptions({
      enableLiveAutocompletion:true,
      enableSnippets: true,
      enableBasicAutocompletion: true,
   });
   this.editor = editor;
   },
  methods: {
    handleDrag ({ target, left, top }) {
      console.log('onDrag left, top', left, top)
      target.style.left = `${left}px`
      target.style.top = `${top}px`
    },
    handleResize ({
      target, width, height, delta
    }) {
      console.log('onResize', width, height)
      delta[0] && (target.style.width = `${width}px`)
      delta[1] && (target.style.height = `${height}px`)
    },
    handleScale ({ target, transform, scale }) {
      console.log('onScale scale', scale)
      target.style.transform = transform
    },
    handleRotate ({ target, dist, transform }) {
      console.log('onRotate', dist)
      target.style.transform = transform
    },
    handleWarp ({ target, transform }) {
      console.log('onWarp', target)
      target.style.transform = transform
    },
    changeStatus(){
      if(this.moveable.draggable){
         this.movStyle=""
      }else{
         this.movStyle="border:none;"
      }
      this.moveable.draggable=!this.moveable.draggable;
      this.moveable.scalable=!this.moveable.scalable;
      this.moveable.rotatable=!this.moveable.rotatable;
    }
  }
}
</script>
<style>
.moveable{
   position: absolute;
   height: 300px;
   width: 300px;
}
.editor{
   position:absolute;
   height: 300px;
   width: 300px;
}
</style>
