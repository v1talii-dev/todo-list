<template>
  <div>
    <h2>{{ todo.name }}</h2>
    <div v-for="(item, idx) of todo.items" :key="idx">
      <input v-model="todo.items[idx].check" type="checkbox" />
      <input
        type="text"
        :value="todo.items[idx].name"
        @change="(e) => (todo.items[idx].name = e.target.value)"
      />
      <button @click="remove(idx)">🗑️</button>
    </div>
    <button @click="add">add</button>
  </div>
</template>
<script src="./index.js" />
