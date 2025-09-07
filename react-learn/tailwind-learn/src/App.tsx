import { useEffect } from 'react'
import { useTheme } from './store'

export default function App() {
  const { mode, toggle } = useTheme()

  useEffect(() => {
    // 先清空旧 class
    document.documentElement.classList.remove('light', 'dark', 'sakura')
    // 再加新 class
    document.documentElement.classList.add(mode)
  }, [mode])

  const label = { light: '☀️ Light', dark: '🌙 Dark', sakura: '🌸 Sakura' }

  return (
    <div className="p-8 flex flex-col items-center gap-6">
      <button
        onClick={toggle}
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground shadow"
      >
        {label[mode]}
      </button>

      <div className="max-w-sm w-full p-6 rounded-lg shadow-lg bg-bg border border-text/10">
        <h1 className="text-xl font-bold mb-2">Tailwind 4.x 三主题示例</h1>
        <p className="text-sm">
          当前主题：{label[mode]}。刷新页面也会保持选择。
        </p>
      </div>
    </div>
  )
}