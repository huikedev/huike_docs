---
title: 响应数据结构 
order: 1 
toc: menu
---

## 数据结构

无论是正常返回还是异常返回，系统返回的`json`的数据结构都会一致，具体数据结构示例如下：

```json
{
  "success": true,
  "showType": 0,
  "errorCode": 0,
  "errorMessage": "欢迎使用huikedev!",
  "data": {
    "version": "0.0.5",
    "author": "liuqiandev <310227477@qq.com>",
    "doc_site": "https:\/\/huike.dev"
  },
  "debug": {
    "base": {
      "request_time": "2021-02-23 23:24:19",
      "runtime": "0.020033 s",
      "request_method": "GET",
      "mem_cost": "704.13 KB",
      "file_load": 123
    },
    "db": {
      "queries": 0,
      "reqs": "49.92 req\/s"
    },
    "cache": {
      "reads": 0,
      "writes": 0
    }
  }
}
```

具体的类型如下：

```typescript

export interface AppResponseType<DataType = unknown> {
  success: boolean;
  data?: DataType | any;
  errorCode?: number;
  errorMessage?: string|null; // message display to user
  showType?: number;
  trace?: any; 
  debug?: any;
}

```

### success

- 类型: `boolean`
- 默认值：`true`
- 详细：正常返回为`true`，异常返回为`false`，对应的是后端的`code`是否等于0

### data

- 类型: `any`
- 默认值：`null`
- 详细：请求对应的逻辑数据

### errorCode

- 类型: `integer`
- 默认值：`0`
- 详细：异常情况下的错误码

### errorMessage

- 类型: `string`
- 默认值：`null`
- 详细：语义提示，正常和异常都有可能返回

### showType

- 类型: `integer`
- 默认值：`0`
- 详细：前端反馈组件的显示类型，对应后端的`NoticeType`

### trace

- 类型: `array`
- 默认值：`undefined`
- 详细：异常情况下的Trace信息，Debug模式下开启

### debug

- 类型: `object`
- 默认值：`undefined`
- 详细：debug模式下的debug信息
