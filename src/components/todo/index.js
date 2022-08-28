import { db } from '@/firebase';
import { ref, set, onValue } from 'firebase/database';

export default {
  watch: {
    todo: {
      deep: true,
      handler(v) {
        set(ref(db, 'todo'), v);
      },
    },
  },

  data() {
    return {
      todo: {
        name: 'Список дел',
        items: [],
      },
    };
  },

  created() {
    this.registerWatchers();
  },

  methods: {
    add() {
      if (!this.todo.items) {
        this.todo.items = [];
      }
      this.todo.items.push({ check: false, name: null });
    },

    remove(idx) {
      this.todo.items.splice(idx, 1);
    },

    registerWatchers() {
      const todo = ref(db, 'todo');
      onValue(todo, (snapshot) => {
        this.todo = snapshot.val();
      });
    },
  },
};
