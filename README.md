### 搭建一个企业级脚手架探索

企业级脚手架搭建的探索实践。

### 脚手架的三个组成部分

* 全局命令包, 提供 `install`、`init`、`start`、`build` 等命令; [cli-tpl](https://github.com/imaoda/cli-tpl)
* 模板插件包(单独抽离可以做到同步最新包到业务); [gen-tpl](https://github.com/imaoda/gen-tpl)
* 构建插件包(webpack 的配置, 单独配置及做到了可单独暴露给用户的功能); [build-tpl](https://github.com/imaoda/build-tpl)

### 相关资料

* [雪砚的分享](https://github.com/yamcer/dui-cli-examples);
* [【手把手】15分钟搭一个企业级脚手架](https://juejin.im/post/5d650613f265da03951a0364#comment): 着重推荐这篇文章, 后续脚手架可以按照这篇文章的思路来;