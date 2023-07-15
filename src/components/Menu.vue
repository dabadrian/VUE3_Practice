<template>
  <nav class="navbar navbar-expand-lg " :style="{ backgroundColor: menuColor }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ marca }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li v-for="item in menus" :key="item.etiqueta" class="nav-item">
                    <a class="nav-link" :href="item.url">{{ item.etiqueta }}</a>
                  </li>
                </ul>
            </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    marca: String,
    menus: Array,
    menuColor: String
  }
};
</script>

<style>
/* Estilos del componente de menú */
</style>
