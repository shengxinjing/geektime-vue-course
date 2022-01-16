



import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    let title = ref('')
    let todos = ref([{ title: '学习 Vue 3', done: true }, { title: '睡觉', done: false }]);
    function addTodo() {
      todos.value.push({
        title: title.value
      })
      title.value = ''
    }
    return () => <div>
      <input type="text" vModel={title.value} />
      <button onClick={addTodo}>click</button>
      <ul>
        {
          todos.value.length ? todos.value.map(todo => {
            return <li>{todo.title}</li>
          }) : <li>no data</li>
        }
      </ul>
    </div>
  }
})


export const Button = (props, { slots }) => <button {...props}>slots.default()</button>
export const Input = (props) => <input {...props} />
export const Timeline = (props) => {
  const timeline = [
    <div class="start">8.21 开始职业</div>,
    <div class="online">10.18 专栏上线</div>
  ]
  if (props.reverse) {
    timeline.reverse()
  }
  return <div>{timeline}</div>
}


