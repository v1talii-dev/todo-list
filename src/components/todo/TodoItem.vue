<template>
  <div>
    <h2>{{ todo.name }}</h2>
    <div v-for="(item, idx) of todo.items" :key="idx">
      <input v-model="todo.items[idx].check" type="checkbox" />
      <input v-model="todo.items[idx].name" type="text" />
      <button @click="remove(idx)">🗑️</button>
    </div>
    <button @click="add">add</button>
  </div>
</template>
<script src="./index.js" />
