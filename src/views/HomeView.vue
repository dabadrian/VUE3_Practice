<template>
  <div class="home">
    {{selectedProductId}}
    <Menu :marca="configuracionPagina.marca" v-bind:menus="configuracionPagina.menus" :menuColor="configuracionPagina.menuColor" />    
    <Producto :itemStyle="configuracionPagina.precioEstilos" :productId="selectedProductId"/>
    <TarjetaProducto :noProductId="selectedProductId" @update-selected-product="updateSelectedProduct"/>
    <PiePagina msg="Drones App 2023" :footerColor="configuracionPagina.footerColor"/>    
  </div>
</template>

<script>
// @ is an alias to /src
import PiePagina from '@/components/PiePagina.vue'
import Menu from '@/components/Menu.vue'
import Producto from '@/components/Producto.vue'
import TarjetaProducto from '@/components/TarjetaProducto.vue'

export default {
  name: 'HomeView',
  components: {
    Producto,
    TarjetaProducto,
    PiePagina,
    Menu
  },
  data() {
    return {
      configuracionPagina: {
        marca: "MegaDron",
        menuColor: "lightblue",
        footerColor: "slategrey",
        precioEstilos: {
          background: 'orangered', 
          color: 'white',
          'font-weight': 'bold',
        },
        menus: [
          {
            etiqueta: "Inicio",
            url: "#"
          },
          {
            etiqueta: "Tienda",
            url: "#"
          }
        ]
      },

      selectedProductId: 1,      
    }
  },
  computed: {
    
    selectedProductId() {
      return this.$store.state.selectedProductoId;
    }
    
  },
  methods: {
    
    updateSelectedProduct(id) {
      this.$store.commit('setSelectedProductoId', id);      
    }
    
  }  
}
</script>
