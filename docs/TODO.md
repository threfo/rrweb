# TODO

## rrweb

1、插件功能改造

- [ ] 1.1 content 增加监听（是否需要注入 rrweb.js 文件）
  - [ ] 动态插入 script tag

2、rrwebjs 内容：
[x] 2.1 ci/cd
[ ] 2.2 indexedDB 管理，每个域名内单独管理录制数据

- [ ] 按 events 的 length，splitLength来拆分
- [ ] 用户自主选择开始和结束时间上报（主动上报下次再做）
- [ ] 清理旧数据规则indexedDB 的大小超过 n 后按maxMins，清理数据旧数据，每次插入数据的时候做判断
- [ ] indexedDB 数据结构 日期，域名，链接，title,events，events的开始时间， events的结束时间 type PageRecord

- [ ] 自动上传，在cdn 定义一个json文件，当需要某个用户自动上报时，在这个文件内更新，json的数据结构 { userId, endTime }, 心跳检测这个json是否有当前用户的id，有就上传endTime之前的数据，上传完后企业微信通知，上传后的地址
      上报的数据结构
      type UploadRecordArr = {
      host: string
      pages: {
      path: string
      title: string
      events: rrwebEvents[]
      }[]
      }[]

```ts
type StartRecord = () => StopRecord // 自递归， 按 events 的 length，splitLength来拆分
type InsetToIndexedDb = (data: PageRecord) => Promise<void>
type CheckIndexedDb = () => void
type CheckUpload = () => void // 启动心跳
type UploadAllRecord = () => Promise<void>
type GetRecordByUrl = () => Promise<UploadRecordArr>
```

page 维护人员播放回放的界面

- [ ] 针对维护人员播放回放的界面，有一个input，放一个地址，请求对应的数据。
      界面 左边 host ，点击host 后 二级tab， 点击tab 后 播放器加载 events
