import Vue from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
Vue.use(Toast);

export default {
  toast: function toast(massage, type) {
    Vue.$toast(massage, {
      type: type
    });
  }
};
