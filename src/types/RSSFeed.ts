export interface RSSFeed {
  items: RSSFeedItem[]
  feedUrl: string
  image: RSSFeedImage
  paginationLinks: RSSFeedPaginationLinks
  creator: string
  title: string
  description: string
  author: string
  generator: string
  link: string
  language: string
  copyright: string
  lastBuildDate: string
  itunes: RSSFeedItunes
}

export interface RSSFeedItem {
  creator: string
  title: string
  link: string
  pubDate: string
  enclosure: RSSFeedEnclosure
  "dc:creator": string
  content: string
  contentSnippet: string
  guid: string
  isoDate: string
  itunes: RSSFeedItemItunes
}

export interface RSSFeedEnclosure {
  url: string
  length: string
  type: string
}

export interface RSSFeedItemItunes {
  summary: string
  explicit: string
  duration: string
  image: string
  episode?: string
  episodeType?: string
}

export interface RSSFeedImage {
  link: string
  url: string
  title: string
}

export interface RSSFeedPaginationLinks {
  self: string
}

export interface RSSFeedItunes {
  owner: RSSFeedOwner
  image: string
  categories: string[]
  categoriesWithSubs: RSSFeedCategoriesWithSub[]
  author: string
  summary: string
  explicit: string
}

export interface RSSFeedOwner {
  name: string
  email: string
}

export interface RSSFeedCategoriesWithSub {
  name: string
  subs: RSSFeedSub[]
}

export interface RSSFeedSub {
  name: string
}