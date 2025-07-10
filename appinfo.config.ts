import { Translate } from 'i18n-pro'

export const regions: Region[] = ['cn', 'hk', 'mo', 'tw', 'us', 'tr']

/**
 * 注意：这里默认写的是中文，做了多语言支持，以中文为key
 */
export const getRegionNameMap = (tProp?: Translate) => {
  const t = tProp || (global as any).t
  return {
    cn: t('中国大陆'),
    hk: t('中国香港'),
    mo: t('中国澳门'),
    tw: t('中国台湾'),
    us: t('美国'),
    tr: t('土耳其'),
  }
}

/**
 * 注意：这里的 value 值是从浏览器打开应用详情页时，对应的 `App 内购买项目` 的标题
 * 文本内容一定要对得上，不然获取不到应用的内购信息
 */
export const regionInAppPurchasesTextMap: Record<Region, string> = {
  cn: 'App 内购买项目',
  hk: 'App 內購買項目',
  mo: 'App 內購買項目',
  tw: 'App 內購買',
  us: 'In-App Purchases',
  tr: `In-App Purchases`,
}

/**
 * 注意：这里暂时规划是只有中文和英文
 */
export const regionLanguageCodeMap: Record<Region, string> = {
  cn: 'zh-CN',
  hk: 'zh-CN',
  mo: 'zh-CN',
  tw: 'zh-CN',
  us: 'en',
  tr: 'en',
}

/**
 * 国家或地区对应的时区，用途是计算日期分类时，不同时区可以按其当地的时区归类
 * 值需要遵循 https://www.iana.org/time-zones 中的取值
 */
export const regionTimezoneMap: Record<Region, string> = {
  cn: 'Asia/Shanghai',
  hk: 'Asia/Hong_Kong',
  mo: 'Asia/Macau',
  tw: 'Asia/Taipei',
  us: 'America/New_York',
  tr: 'Europe/Istanbul',
}

/**
 * 注意：新添加的应用写在最上面
 * Note: Newly added applications should be written at the top
 *
 * id 是应用的 ID
 * name 是应用名称，可以是多种类型
 * name 为 string 类型表示该应用在所有地区都是同一个名称
 * name 为 Partial<Record<Record, string>> 类型表示不同国家或地区的应用名称都不一样
 * name 为 [string, Partial<Record<Record, string>>] 类型表示多个地区的应用名称都相同，其他地区可能有不同的名称
 * 正常的话，中英文不一样就中英文各写一个就可以；这里的名称只有写代码的能看到
 */
export const latestAppConfig: AppConfig[] = [
  {
    id: 1067198688,
    name: '彩云天气pro',
    addType: 'manual',
    allowNotification: true,
  },
  { id: 505367096,
    name: '世界迷雾',
    addType: 'manual',
    allowNotification: true,
   },
]

/**
 * 合并多个分组的应用
 */
export const appConfig: AppConfig[] = [
  ...latestAppConfig, // 最新
]
