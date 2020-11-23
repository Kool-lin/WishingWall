# WishingWall
vue+nodejs+mysql实现许愿墙
## 目录说明：
（1）wish为游客模块许愿墙展示
（2）wish-admin为后台管理模块前端
（3）wish-admin-api为后台管理模块后端接口
## 项目描述
• 采用技术：
游客模块 Node.js+Express+art-template+MySQL
管理员模块 Node.js+Express+Vue.js+MySQL
• 项目实现：
项目为内容展示和内容管理型网站，分为前台展示和后台管理两大核心功能。
许愿墙主页面上的愿望便笺是 JS 动态渲染出来的，先将数据渲染到页面上#container 元素中的一个
data-list 属性上，然后用 JS 获取后再进行渲染, controller 模块通过定义一个 async 任务让 async 自
动控制流程实现将前端表单数据插入到数据库和从数据库获取数据。后台管理系统严格采用前后端分离
的模式进行设计实现，前端通过 AJAX 发送 HTTP 请求到后端编写好的 API 接口，后端处理请求，封
装好数据，将数据以 JSON 格式返回前端，前端再通过 JS 将数据渲染到页面上，实现过程中包含
token 验证，SQL 对数据的 crud 操作，路由请求处理方法的实现等技术点。
