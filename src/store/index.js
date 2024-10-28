import { createStore } from 'vuex';
import auth from '@/modul/auth';
import user from '@/modul/user';

const store = createStore({
  modules: {
    auth,
    user
  },
});

export default store;
