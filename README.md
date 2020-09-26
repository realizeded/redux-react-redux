# 项目介绍

<span style="font-size:17px;"> 
该项目主要是对redux、react-redux做一个深度了解,<br/>
去理解redux、react-redux底层所做的事情
</span>

<div style="height:50px;"></div>    
  
# 目录结构  

```code
redux 
    |
    |-- src
        |-- App.js
        |-- index.js
        |-- components
        |   |-- Show
        |       |-- index.js
        |
        |-- store
        |     |-- app.redux.js
        |
        |--lib      
            |-- LJReact-redux
            |   |-- src
            |       |-- connect.js
            |       |-- index.js
            |       |-- util.js
            |       |-- component
            |           |-- Provide
            |               |-- index.js
            |-- LJredux
            |   |-- src
            |       |-- redux.js
            |       |-- applyMiddleWare 
            |
            |-- redux-thunk
                |-- src
                    |-- redux.js
             

```
  
# 实现功能(api不变)
* 实现redux的核心功能,支持redux的大部分功能,支持整个redux的工作流程
* 实现react-redux的核心功能,实现Provide组件和connect函数
* 实现redux-thunk,封装异步逻辑
