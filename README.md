# swagger-ui-enhancer

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## 目录
- [简介](#简介)
- [特性](#特性)
- [安装](#安装)
- [使用方法](#使用方法)
- [贡献](#贡献)
- [许可证](#许可证)

## 简介

一个用户脚本（油猴脚本），用于为 Swagger UI 接口文档添加辅助功能，如修改Base URL、一键复制请求信息、参数和后端定义的Model等，以提高开发人员的工作效率。

## 特性

- **自定义Base URL**: 在页面上动态更改API的Base URL。
- **便捷的复制选项**: 一键复制完整的请求信息、请求参数以及后端定义的Model结构。
- **易用性强**: 无需修改Swagger UI源代码即可扩展其功能。

## 安装

1. 安装用户脚本管理器，例如[Tampermonkey](https://www.tampermonkey.net/) 或 [Greasemonkey](https://www.greasespot.net/).
2. 点击 [这里](./dist/swagger-ui-enhancer.user.js) 安装此用户脚本。
3. 访问包含Swagger UI的网页，脚本将自动运行并应用增强功能。

## 使用方法

- **修改Base URL**: 打开Swagger UI页面后，找到我们新增的输入框，输入新的Base URL并按回车键确认。
- **复制请求信息/参数/Model**: 在Swagger UI中选择一个API端点，然后点击对应的“复制”按钮来获取所需信息。

## 贡献

欢迎任何开发者贡献代码或提出改进建议！请遵循以下步骤：

1. Fork 本仓库。
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送至分支 (`git push origin feature/AmazingFeature`)
5. 发起Pull Request

## 许可证

本项目采用MIT许可证，详情参见 [LICENSE](./LICENSE) 文件。