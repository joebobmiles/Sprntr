import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

test("App should work", () => {
  const wrapper = shallowMount(App, { localVue });
  expect(wrapper.text()).toMatchInlineSnapshot(`
    "Home |
        About"
  `);
});
