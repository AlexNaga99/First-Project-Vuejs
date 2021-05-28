<template>
  <div class="side-bar">
    <div  class="logo-bar">
      <a href="http://localhost:8080"><img src="../assets/nike.png" width="70" height="70" /></a>
    </div>
    <div class="menu-bar">
      <div class="menu-area">
        <div v-for="(option, index) in menu_options" v-bind:key="option.name" class="centralize menu-item" @mouseover="onShow(index)" @mouseleave="onHidden(index)"> 
          <router-link :to="{ name: 'Shop', params: { category: option.path, title: option.name } }"><p class="menu-item-text">{{option.name}}</p></router-link>
        </div>
      </div>
    </div>
    <div class="search-bar">
      <Search placeholder="Oque você procura?" icon @keypress.enter="search()"/>
    </div>
  </div>
  <div v-for="(item, index) in menu_options" v-bind:key="item.name">
    <transition name="fade">
      <div v-if="menu_sub_options(index)" class="sub-menu-area full-width" @mouseover="onShow(index)" @mouseleave="onHidden(index)">
        <div class="full-width-sub-menu">
          <div class="sub-menu-box">
            <div v-for="subitem in item.submenu" v-bind:key="subitem.name">
              <router-link :to="{ name: 'Shop', params: { category: subitem.path, title: subitem.name } }"><p class="submenu-item-text">{{subitem.name}}</p></router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <NewsBar class="news-bar" />
  <router-view/>
</template>

<script>
import Search from './Search.vue';
import NewsBar from './News-bar.vue';

export default {
  name: 'Header',
  components: {
    Search,
    NewsBar
  },
  props: {
    // msg: String
  },
  data(){
    return {
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      menu_options: [
        {
          name: 'Lançamentos',
          path: 'releases',
          submenu: [
            {
            name: 'Calçados',
            path: 'releases-footwear',
            },
            {
            name: 'Roupa',
            path: 'releases-clothing',
            },
            {
            name: 'Acessório',
            path: 'releases-accessory',
            }
          ]
        },
        {
          name: 'Feminino',
          path: 'feminine',
          submenu: []
        },
        {
          name: 'Masculino',
          path: 'masculine',
          submenu: [
            {
            name: 'Masculino',
            path: 'masculine-teste',
            }
          ]
        },
        {
          name: 'Infantil',
          path: 'childish',
          submenu: [
            {
            name: 'Infantil',
            path: 'childish-teste',
            }
          ]
        },
        {
          name: 'SNKRS',
          path: 'snkrs',
          submenu: [
            {
            name: 'SNKRS',
            path: 'snkrs-teste',
            }
          ]
        },
        {
          name: 'Ofertas',
          path: 'offers',
          submenu: [
            {
            name: 'Ofertas',
            path: 'offers-teste',
            }
          ]
        },
      ],
    }
  },
  methods: {
    search(){
      console.log("Deu certo");
    },
    onShow(index) {
      if(index == 0){
        this.show0 = true;
      } else if(index == 1){
        this.show1 = true;
      } else if(index == 2){
        this.show2 = true;
      } else if(index == 3){
        this.show3 = true;
      } else if(index == 4){
        this.show4 = true;
      } else if(index == 5){
        this.show5 = true;
      }
    },
    onHidden(index) {
      if(index == 0){
        this.show0 = false;
      } else if(index == 1){
        this.show1 = false;
      } else if(index == 2){
        this.show2 = false;
      } else if(index == 3){
        this.show3 = false;
      } else if(index == 4){
        this.show4 = false;
      } else if(index == 5){
        this.show5 = false;
      }
    },
    menu_sub_options(index) {
      if(index == 0 && this.show0 && this.menu_options[0].submenu[0]){
        return true;
      } else if(index == 1 && this.show1 && this.menu_options[1].submenu[0]){
        return true;
      } else if(index == 2 && this.show2 && this.menu_options[2].submenu[0]){
        return true;
      } else if(index == 3 && this.show3 && this.menu_options[3].submenu[0]){
        return true;
      } else if(index == 4 && this.show4 && this.menu_options[4].submenu[0]){
        return true;
      } else if(index == 5 && this.show5 && this.menu_options[5].submenu[0]){
        return true;
      }
      return false;
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  .news-bar {
    padding-top: 75.68px;
  }
  .side-bar {
    justify-content: space-between;
    height: 75.68px;
    display: flex;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
    position: fixed;
    width: 100%;
    z-index: 9;
  }
  .search-bar {
    width: 12%;
    margin-right: 2%;
  }
  .logo-bar {
    width: 12%;
  }
  .menu-bar {
    width: 65%;
  }
  .menu-area {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .menu-item {
    border-bottom: 2px solid white;
  }
  .menu-item:hover {
    cursor: pointer;
    border-bottom: 2px solid #111;
  }
  .menu-item-text {
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #111;
    font-family: NikeTG,HelveticaNeue,Helvetica,Arial,sans-serif;
  }
  .submenu-item-text {
    padding: 2px;
    color: #111;
    font-family: NikeTG,HelveticaNeue,Helvetica,Arial,sans-serif;
  }
  .submenu-item-text:hover {
    color: #808080;
  }
  .sub-menu-area {
    padding-top: 120px;
    padding-bottom: 44.32px;
    position: fixed;
    display: block;
    overflow: auto;
    background: white;
    border-bottom: 1px solid #e5e5e5;
    min-height: auto;
    z-index: 8;
  }
  .full-width-sub-menu {
    width: 100%;
    min-height: auto;
    display: flex;
    justify-content: center;
  }
  .sub-menu-box {
    min-width: 10%;
    height: auto;
    border-left: 1px solid #e5e5e5;
  }
</style>
