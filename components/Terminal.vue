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
<v-card id="terminal">
<vue-command/>
</v-card>
</Moveable>
</template>

<script>
import VueCommand from 'vue-command'
import 'vue-command/dist/vue-command.css'
export default {
components: {
    VueCommand
},
props:{
   term:''
},
data () {
   return {
      moveable: {
         draggable: true,
         throttleDrag: 0,
         resizable: false,
         throttleResize: 1,
         keepRatio: false,
         scalable: true,
         throttleScale: 0,
         rotatable: true,
         throttleRotate: 0
      }
   }
},
mounted(){
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
  }
}
</script>
<style>
   #terminal{
      height: 332px;
      width: 300px;
      border: aqua solid;
   }
   .moveable{
      position: absolute;
      height: 332px;
      width: 300px;
   }
   .term {
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
    }

    .term-std {
      min-height: 300px;
      max-height: 300px;
      overflow-y: scroll;
    }
</style>
