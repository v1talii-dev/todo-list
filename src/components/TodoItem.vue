<template>
  <div>
    <h2>{{ todo.name }}</h2>

    <div v-if="all" class="row row--inline">
      <span v-if="all">Выполнено: {{ completed }}/{{ all }}</span>
      <span
        v-if="all === completed"
        class="material-icons"
        :style="{ color: 'green' }"
      >
        check
      </span>
    </div>

    <div class="row">
      <input v-model="form.name" type="text" @keyup.enter="add(form)" />
      <button :disabled="!form.name" @click="add(form)">
        <span class="material-icons">add</span>
      </button>
    </div>

    <div v-for="(item, idx) of todo.items" class="row" :key="item.id">
      <div class="input-checkbox">
        <input
          type="checkbox"
          :checked="todo.items[idx].check"
          :id="`check-${idx}`"
          @change="(e) => onCheckItem(idx, e.target.checked)"
        />
        <label
          :for="`check-${idx}`"
          :class="{ checked: todo.items[idx].check }"
        >
          {{ todo.items[idx].name }}
        </label>
      </div>

      <button @click="remove(idx)">
        <span class="material-icons">clear</span>
      </button>
    </div>
  </div>
</template>
<script>
import { db } from '@/firebase';
import { ref, set, onValue } from 'firebase/database';

const DEFAULT_ITEM = {
  check: false,
  name: null,
};

export default {
  data() {
    return {
      form: { ...DEFAULT_ITEM },
      todo: {
        name: 'Список дел',
        items: [],
      },
    };
  },

  computed: {
    all() {
      return this.todo?.items?.length;
    },
    completed() {
      return this.todo?.items?.filter((el) => el.check).length;
    },
  },

  watch: {
    todo: {
      deep: true,
      handler() {
        this.setTodo();
      },
    },
  },

  created() {
    this.registerWatchers();
  },

  destroy() {
    this.unregisterWatchers();
  },

  methods: {
    registerWatchers() {
      const todo = ref(db, 'todo');
      onValue(todo, (snapshot) => {
        this.todo = snapshot.val();
      });

      window.addEventListener('online', this.syncTodo);
    },

    unregisterWatchers() {
      window.removeEventListener('online', this.syncTodo);
    },

    add(form) {
      if (!this.todo.items) {
        this.todo.items = [];
      }
      this.todo.items.unshift({
        ...form,
        id: +new Date(),
      });
      this.form = { ...DEFAULT_ITEM };
    },

    remove(idx) {
      this.todo.items.splice(idx, 1);
    },

    onCheckItem(idx, checked) {
      const items = [...this.todo.items];
      items[idx].check = checked;

      this.todo.items = items.sort((a, b) => Number(a.check) - Number(b.check));
    },

    syncTodo() {
      // TODO: реализовать синхронизацию данных
    },

    setTodo() {
      set(ref(db, 'todo'), this.todo);
    },
  },
};
</script>

<style scoped>
.row {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px 0;
}
.row--inline {
  justify-content: start;
}
.checked {
  text-decoration: line-through;
}
</style>
