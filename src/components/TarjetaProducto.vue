<template>
    <div class="container">
      <div class="row">
        <h4>Productos relacionados</h4>
      </div>
      <div class="row">
        <div class="col" v-for="producto in productosFiltrados" :key="producto.id" >
          <div class="card" style="width: 18rem;" @click="selectProduct(producto.id)">
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <img :src="producto.imagen" alt="" class="img-fluid">
              <p class="card-text">{{ producto.descripcion }}</p>
              <div class="producto-relacionado-precio">Precio: {{ producto.precio }} BOB</div>
              <div>
                <div v-for="color in producto.colores" :key="color" class="color-box" :style="{ background: color }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import axios from 'axios';

  export default {
    props: {
      noProductId: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        productos: []
      };
    },

    created() {
      this.fetchProductos();
    },

    computed: {
    productosFiltrados() {
      return this.productos.filter(producto => producto.id !== this.noProductId);
    },
  },

    methods: {

      fetchProductos() {
      const apiUrl = process.env.VUE_APP_API;

      axios.get(`${apiUrl}/Productos`)
        .then(response => {
          this.productos = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    selectProduct(id) {
      this.$emit('update-selected-product', id);
    }
  }
  };
  </script>
  
  <style>
  /* Estilos del componente del catálogo */
  .producto-relacionado-precio {
    background: orangered;
    color: white;
    text-align: center;
    padding: 10px;
  }
  

  </style>