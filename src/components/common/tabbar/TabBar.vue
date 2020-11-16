<template>
  <div>
     <div class="tab-bar">
      <slot>
        
      </slot>
     </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
.tab-bar{
  display: flex;
  background-color: #efefef;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  width: 100%;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);

}

</style>