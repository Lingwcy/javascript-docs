import React from 'react'


// 1️⃣ 极简 FormItem：只把剩余 props 透传给 <div>
export function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="form-item"
      style={{ display: 'grid', gap: 8, border: '1px dashed #ccc', padding: 8 }}
      className={className}
      {...props}     
    />
  )
}

export function ItemTest({...props}){
    return (
        <div
        {...props}>
        </div>
    )
}

// 2️⃣ 使用
export function FormItemTestDemo() {
  return (
    <FormItem style={{ backgroundColor: '#fafafa' }}>
      <label>用户名：</label>
      <input placeholder="请输入用户名" />
      <button>提交</button>
    </FormItem>
  )
}
