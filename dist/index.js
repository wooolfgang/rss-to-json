module.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var n=i(1),r=i(2),u=i(3);e.exports={load:function(e,t){var i=this;u.get(e,{headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.75",accept:"text/html,application/xhtml+xml"}}).then((function(e){new r.Parser({trim:!1,normalize:!0,mergeAttrs:!0}).parseString(e.data,(function(e,n){e?(console.log(e),t(e,null)):t(null,i.parser(n))}))})).catch((function(e){console.log(e),t(e,null)}))},parser:function(e){var t=e.rss.channel,i={items:[]};return n.isArray(e.rss.channel)&&(t=e.rss.channel[0]),t.title&&(i.title=t.title[0]),t.description&&(i.description=t.description[0]),t.link&&(i.url=t.link[0]),t.image&&(i.image=t.image[0].url),!i.image&&t["itunes:image"]&&(i.image=t["itunes:image"][0].href),i.image=i.image&&Array.isArray(i.image)?i.image[0]:"",t.item&&(n.isArray(t.item)||(t.item=[t.item]),t.item.forEach((function(e){var t={};t.title=n.isNullOrUndefined(e.title)?"":e.title[0],t.description=n.isNullOrUndefined(e.description)?"":e.description[0],t.url=t.link=n.isNullOrUndefined(e.link)?"":e.link[0],e.image&&(t.image=e.image),e.guid&&(t.guid=e.guid[0]),e.category&&(t.category=e.category[0]),e["dc:creator"]&&(t.dc_creator=e["dc:creator"][0]),e.pubDate&&(t.pubDate=e.pubDate[0]),e["atom:updated"]&&(t.atom_updated=e["atom:updated"][0]),e["content:encoded"]&&(t.content_encoded=e["content:encoded"][0]),e["itunes:subtitle"]&&(t.itunes_subtitle=e["itunes:subtitle"][0]),e["itunes:summary"]&&(t.itunes_summary=e["itunes:summary"][0]),e["itunes:author"]&&(t.itunes_author=e["itunes:author"][0]),e["itunes:explicit"]&&(t.itunes_explicit=e["itunes:explicit"][0]),e["itunes:duration"]&&(t.itunes_duration=e["itunes:duration"][0]),e["itunes:season"]&&(t.itunes_season=e["itunes:season"][0]),e["itunes:episode"]&&(t.itunes_episode=e["itunes:episode"][0]),e["itunes:episodeType"]&&(t.itunes_episodeType=e["itunes:episodeType"][0]),e.pubDate&&(t.created=Date.parse(e.pubDate[0])),e["media:content"]&&(t.media=e.media||{},t.media.content=e["media:content"]),e["media:thumbnail"]&&(t.media=e.media||{},t.media.thumbnail=e["media:thumbnail"]),e.enclosure&&(t.enclosures=[],n.isArray(e.enclosure)||(e.enclosure=[e.enclosure]),e.enclosure.forEach((function(e){var i={};for(var n in e)i[n]=e[n][0];t.enclosures.push(i)}))),i.items.push(t)}))),i},read:function(e,t){return this.load(e,t)}}},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("xml2js")},function(e,t){e.exports=require("axios")}]);