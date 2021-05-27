<template>
  <div class="search-area">
    <div v-if="enableIcon" class="full-size">
      <div class="centralize">
        <div class="input-area with-image">
          <div class="image-area" />
          <div class="text-area">
            <input class="input-value-area" type="text" name="text" :placeholder="placeholder" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="full-size">
      <div class="centralize">
        <div class="input-area-not-image">
          <div class="centralize">
            <input class="input-value-area" type="text" name="text" :placeholder="placeholder"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      icon: Boolean,
      placeholder: String,
    },
    computed: {
      enableIcon () {
        if(this.icon){
          return true;
        }
        return false;
      }
    },
  }
</script>

<style scoped>
  .full-size {
    height: 100%;
    width: 100%;
  }
  .search-area {
    height: 100%;
    width: 100%;
  }
  .input-area {
    height: auto;
    width: 300px;
    border: 1px solid #e5e5e5;
    background: white;
  }
  .input-area-not-image {
    height: 52.8px;
    width: 100%;
    padding: 5px;
    border: 1px solid #e5e5e5;
    background: white;
  }
  .centralize {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .with-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-area {
    width: 20%;
    height: 50px;
    background: url('https://images.lojanike.com.br/site/ni/icones/search.svg') 50% no-repeat;
  }
  .text-area {
    width: 80%;
  }
  .input-value-area {
    padding: 2%;
    margin: 2%;
    width: 92%;
    border: unset;
    outline: none;
  }
</style>
