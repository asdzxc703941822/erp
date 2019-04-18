export default {
  namespaced: true,
  state: {
    dialogs: [], //当前所有打开的弹窗
    currentDialog: null //当前操作的弹窗
  },
  mutations: {
    addDialog(state, dialog) {
      state.dialogs.push(dialog);
    },
    removeDialog(state) {
      state.dialogs.pop();
    }
  },
  actions: {
    openDialog({ state, commit, dispatch }, dialog) {
      commit("addDialog", dialog);
    },
    closeDialog({ state, commit, dispatch }) {
      commit("removeDialog");
    }
  }
};
