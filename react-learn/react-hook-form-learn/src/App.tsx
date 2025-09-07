import { FormItemTestDemo,ItemTest } from './components/FormItemTest'
import './App.css'
import { ContextTestEnv } from './components/ContextTest'
import { DebounceTest } from './components/DebounceTest'
import { DebounceTest2 } from './components/DebounceTest2'
function App() {
  return (
    <>
      <FormItemTestDemo/>
      <ItemTest>
        我们是
        <label>children</label>
        <DebounceTest/>
        <DebounceTest2/>
      </ItemTest>
      <ContextTestEnv/>
    </>
  )
}

export default App
