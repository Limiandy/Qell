## Qell 基于 Vue 2.x + typescript 开发的所见即所得的富文本编辑器；具有轻量、可定制的特点

### Qell 采用分层设计模式，分为 核心层、插件层、界面层、数据层

- 核心层：为插件层的提供API支持，如 Range、Selection、domUtils
- 插件层：基于核心层API开发的独立的、封装的功能体
- 界面层：为插件层提供可供用户操作的界面
- 数据层：基于插件层与用户的输入，对用户输入的格式、内容进行整理，直接输出到后端API接口或者反馈给开发者进行进一步处理
