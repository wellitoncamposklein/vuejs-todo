import Vue from 'vue'
import InputTask from 'src/components/InputTask'

describe('InputTask.vue', () => {
  //códigos de testes
  it('should render correct contents', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1)
  })
})
