<template>
  <div class="wrapper">
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',
  components: {
    TodoItem,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.material-icons {
  color: #444;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: #eee;
  margin: 0;
}

.wrapper {
  width: 100%;
  max-width: 300px;
  margin: 12px auto;
  padding: 12px;
  background-color: #fff;
}

button {
  margin: 4px;
  height: 24px;
  line-height: 24px;
  padding: 0 6px;
  border: none;
  background-color: #eee;
  border-radius: 5px;
}

input[type='text'] {
  height: 18px;
  line-height: 18px;
  width: 100%;
}

.input-checkbox {
  width: 100%;
}
.input-checkbox input[type='checkbox'] {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.input-checkbox input[type='checkbox'] + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  width: 100%;
}
.input-checkbox input[type='checkbox'] + label::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.input-checkbox input[type='checkbox']:checked + label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
