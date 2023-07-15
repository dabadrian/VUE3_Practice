<template>
    <div class="container">
    <div v-if="isLoadingProduct">Loading...</div>
    <div v-else>

      <div class="row">
        <h3>{{ nombre }}</h3>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <img :src="imagen" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-sm-6 col-md-8">
          <h6>{{ descripcion }}</h6>
          <div class="p-3 mb-2 text-white" :style="itemStyle">
            Precio: {{ precio }} BOB
          </div>
          <h5>Color</h5>
          <div>
            <div v-for="color in colores" :key="color" class="color-box clic" :style="{ background: color }" @click="selectColor(color)"></div>
          </div>
          <h5>Cantidad</h5>
          <div class="quantity">
            <button @click="decreaseQuantity">-</button> <div>{{ quantity }}</div> <button @click="increaseQuantity">+</button>
          </div>
          <div class="buy-box">
            <button type="button" class="btn btn-primary" :disabled="!isBuyButtonEnabled" @click="comprar">Comprar</button>
          </div>
        </div>
      </div>
    </div>  
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import axios from 'axios';

  export default {
    props: {
      itemStyle: {
        type: Object,
        default: () => ({}),
      },
      productId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {        
        isLoadingProduct: true,
        id: '',
        nombre: '',
        descripcion: '',
        imagen: '',
        precio: '',
        colores: [],        
        quantity: 0,
        selectedColor: null,
        pedido: {
          id: null,
          cantidad: 1,
          color: null,
        },        
      };
    },
    computed: {
    selectedProductId() {
      return this.$store.state.selectedProductId;
    },
      isBuyButtonEnabled() {
        return this.quantity >= 1 && this.selectedColor !== null;
      }
    },
    watch: {
    selectedProductId: {
      immediate: true,
      handler() {
        this.fetchData();
      }
    }
  },
    created() {
      this.fetchData();
    },
    methods: {
      increaseQuantity() {
        this.quantity++;
      },
      decreaseQuantity() {
        if (this.quantity > 0) {
          this.quantity--;
        }
      },
      selectColor(color) {
      this.selectedColor = color;
      },
      comprar() {
        this.pedido.id = this.id;
        this.pedido.cantidad = this.quantity;
        this.pedido.color = this.selectedColor;
      
        alert(`ID del producto: ${this.pedido.id}\nCantidad: ${this.pedido.cantidad}\nColor seleccionado: ${this.pedido.color}`);
      },
      fetchData() {
      const apiUrl = process.env.VUE_APP_API;
      const id = this.productId;

      axios.get(`${apiUrl}/Productos/${id}`)
        .then(response => {
          const data = response.data;      
          this.id = data.id;
          this.nombre = data.nombre;
          this.descripcion = data.descripcion;
          this.imagen = data.imagen;
          this.precio = data.precio;
          this.colores = data.colores;
          this.isLoadingProduct = false;
          
        })
        .catch(error => {
          console.error(error);
          this.isLoadingProduct = false;
        });
      }, 
    }
  };
  </script>
  
  <style>
  /* Estilos del componente de producto */
  .color-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 7px;
    display: inline-block;
  }
  
  .clic {
    cursor: pointer;
  }
  
  .quantity button {
    border-radius: 50%;
    display: inline-block;
    width: 30px;
  }
  
  .quantity div {
    text-align: center;
    min-width: 30px;
    display: inline-block;
    font-weight: bold;
  }
  
  .buy-box {
    margin: 20px;
  }
  </style>