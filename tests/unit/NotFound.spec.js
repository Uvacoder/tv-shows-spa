// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import NotFound from '@/views/NotFound.vue'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('NotFound.vue', () => {
  const mountFunction = options => {
    return shallowMount(NotFound, {
      localVue,
      ...options,
    })
  }

  it('should have a component name', () => {
    const wrapper = mountFunction()

    expect(wrapper.name()).toMatch('NotFound')
  })
})
