import Vue from "vue";
import { ToastPlugin, ModalPlugin } from "bootstrap-vue";
import VueCompositionAPI from "@vue/composition-api";
import authController from "@/router/auth_controller";
import router from "./router";
import CommonMixins from "@/mixins/commonmixins";
import store from "./store";
import App from "./App.vue";

import lodash from "lodash";
Vue.use(lodash);

// Global Components
import "./global-components";

// 3rd party plugins
import "@/libs/portal-vue";
import "@/libs/toastification";
import "@/libs/vue-mixins";
import "@/libs/vue-lodash";
import "@/libs/vee-validation";
import "@/libs/vue-select";
import "@/libs/sweet-alerts";

// BSV Plugin Registration
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

// Composition API
Vue.use(VueCompositionAPI);

// import core styles
require("@core/scss/core.scss");

// Vuesax Component Framework
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

// import assets styles
require("@/assets/scss/style.scss");

Vue.config.productionTip = false;

Vue.mixin(CommonMixins);

authController.init(router, store);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
