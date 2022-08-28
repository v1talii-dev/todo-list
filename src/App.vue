<template>
  <div class="wrapper">
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from './components/todo/TodoItem.vue';

export default {
  name: 'App',
  components: {
    TodoItem,
  },
};
</script>

<style>
body {
  background-color: #eee;
  margin: 0;
}

.wrapper {
  width: 100%;
  max-width: 600px;
  margin: 12px auto;
  padding: 12px;
  background-color: #fff;
}
</style>
