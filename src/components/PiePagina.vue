<template>
    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
        companyName: 'Mi Empresa'
      };
    },
    computed: {
      copyright() {
        return `© ${this.year} ${this.companyName}`;
      }
    }
  };
  </script>
  
  <style>
  .footer {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
  }
  </style>