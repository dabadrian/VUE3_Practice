<template>
  <footer :style="{ backgroundColor: footerColor }">
    <!-- Contenido del pie de página -->{{ msg }}
  </footer>
</template>

<script>
export default {
  name: 'PiePagina',
  props: {
    msg: String,
    footerColor: String
  }
};
</script>

<style>
.footer {
  text-align: center;
  padding: 30px 10px;
  margin-top: 50px;
  min-height: 100px;
}
</style>