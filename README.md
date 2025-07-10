<div align="center">
  <p style="font-size: 18px;">开源的 App Store 折扣信息助手，基于 GitHub Actions 实现，支持 RSS，Telegram 和 钉钉 通知</p>
  <p style="font-size: 18px;">此版本在原版基础上删除了自动获取排行榜应用的功能，仅针对目标应用追踪。</p>

</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [特性](#特性)<br/>
  [赞助商](#赞助商)<br/>
  [如何订阅](#如何订阅)<br/>
  &emsp;&emsp;[RSS](#rss)<br/>
  &emsp;&emsp;[Telegram](#telegram)<br/>
  &emsp;&emsp;[钉钉](#钉钉)<br/>
  [运行机制及流程](#运行机制及流程)<br/>
  [相关文档](#相关文档)<br/>
  [Star History](#star-history)<br/>
  [License](#license)<br/>

</details>


# 愿景
成为 `App Store` 用户信赖的省钱助手，让更多人都能以优惠的价格购买到自己喜欢的应用
# 特性

* 支持任意 `国家或地区` 的 `App Store` （理论上🤔）
* 可追踪 `应用本体` 及 `App 内购买项目` 价格
* 多种订阅方式
   * RSS
   * Telegram
   * 钉钉
* 自动根据付费排行榜更新跟踪应用
* 开源免费，欢迎贡献




# 如何订阅

> 友情提示:  
> 通过 `RSS` 和 `Telegram` 订阅需要科学上网才能有好的体验，[了解如何科学上网](https://github.com/eyelly-wu/vpn)
    
## RSS

|编码|国家或地区|RSS 源|
|:-|:-|:-|
|cn|Mainland China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/cn.xml|
|hk|Hong Kong, China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/hk.xml|
|mo|Macao, China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/mo.xml|
|tw|Taiwan, China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/tw.xml|
|us|United States|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/us.xml|
|tr|Türkiye|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/tr.xml|

## Telegram
点击 [![telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram "telegram")](https://t.me/appstore_discounts "telegram-channel") 订阅
## 钉钉
点击 [![dingtalk](https://img.alicdn.com/imgextra/i3/O1CN01WMvMRG1ks3Ixc9x1v_!!6000000004738-55-tps-32-32.svg "dingtalk")](https://qr.dingtalk.com/action/joingroup?code=v1,k1,o9TXTPxGRNhCmrTUa4cHymeJCIcRiimCsH4FqEnbEWU=&_dt_no_comment=1&origin=11 "dingtalk") 订阅

# 运行机制及流程
本项目基于 `GitHub Actions` 定时任务（每 `60` 分钟）自动执行以下流程：
1. 获取付费排行榜应用信息
2. 更新跟踪应用列表
3. 获取应用最新价格信息
   1. 通过 [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 获取应用详细信息和 `应用本体` 的价格
   2. 解析应用详情链接获取 `App 内购买项目` 的价格（由 [Scrapeless](https://www.scrapeless.com/en "Scrapeless - Effortless Web Scraping Toolkit for Business and Developers") 提供数据抓取能力）
4. 读取已存储价格信息
5. 计算折扣信息
6. 更新最新价格信息
7. 更新 `RSS` 文件
8. 推送通知到 `Telegram` 
9. 推送通知到 `钉钉` 
10. 更新 `README.md` 及相关文档
11. 提交 `Git` 更新

如有折扣，订阅用户将收到推送
# 相关文档

* [❤️ 当前追踪的 `国家或地区` 和对应的应用列表](https://github.com/tamakyi/appstore-discounts/blob/main/docs/dist/FOCUS_zh-CN.md)
* [🤝 如何参与贡献](https://github.com/tamakyi/appstore-discounts/blob/main/docs/dist/CONTRIBUTION_GUIDELINES_zh-CN.md)



# License
[MIT](./LICENSE)

Copyright (c) 2024-present Eyelly Wu