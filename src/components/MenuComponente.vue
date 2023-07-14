<template>
    <div class="menu">
      <ul>
        <li v-for="item in menuItems" :key="item.id">{{ item.label }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, label: 'Inicio' },
          { id: 2, label: 'Productos' },
          { id: 3, label: 'Acerca de' },
          { id: 4, label: 'Contacto' }
        ]
      };
    }
  };
  </script>
  
  <style>
  .menu {
    background-color: #f2f2f2;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
  </style>