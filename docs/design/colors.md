# 配色与可访问性

- 主色：#165DFF，含 50–900 色阶
- 辅助：#06B6D4（备选 #7C3AED）
- 中性色：灰阶 50–900
- 语义：成功、警告、错误、信息
- 明暗：基于 `data-theme` 切换变量

```css
:root { --background: #FFFFFF; }
[data-theme="dark"] { --background: #0B1220; }
```
