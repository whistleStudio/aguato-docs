# 简介

<span style="color: var(--secondary-color)">阿瓜物联 (Aguato)</span> 是由<a href="https://www.whistlestudio.cn" target="_blank">whistle</a>开发的一款集物联服务端和客户端搭建、可视化图表展演的物联网调试工具。

其操作界面由`本地客户端管理`、`项目管理`和`可视化图表面板管理`构成。

## 本地客户端管理

自定义本地物联服务许可的客户端集群 - 客户端名称(alias), 客户端ID(clientID), 密码(password)

## 项目管理

支持自定义多个连接本地物联服务或远程物联服务的项目；独立订阅/发布主题；界面`UI`采用聊天对话框形式，信息展示更加简洁直观；消息记录本地化存储。

## 可视化图表面板管理

集成多种图表组件，并根据物联网发布/订阅模式进行分类；图表组件可自由拖拽、调整大小及部分样式；支持亮/暗两种主题模式；画布背景可调。图表根据项目独立进行管理，其布局及组件属性本地化存储，便于二次操作。

<video src="/images/20250701_211242.mp4" controls></video>

<style lang="scss" scoped>
  video {
    max-width: 800px;
  }
  @media (max-width: 1200px) {
    video {
      max-width: calc(100vw - 350px);
    }
  }
  @media (max-width: 719px) {
    video {
      max-width: calc(100vw - 50px);
    }
  }
</style>