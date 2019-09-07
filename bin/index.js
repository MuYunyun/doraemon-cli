const fs = require('fs')
const chalk = require('chalk')
const resolveFrom = require('resolve-from').silent
const requireFrom = require('import-from').silent
const mkdirp = require('mkdirp') // 跨平台
const path = require('path')
const inquirer = require('inquirer')
// 用于执行一个「模板插件包」
const yoemanEnv = require('yeoman-environment').createEnv()
const pkg = require('../package.json')
const execSync = require('child_process').execSync
const homeDir = require('osenv').home() // 跨平台
const tplDir = path.resolve(homeDir, 'maoda')
const Utils = require('../utils')

class M extends Utils {
  constructor() {
    super()
    this.bindTools()
    this.checkTplDir()
    this.checkCommand()
  }
  bindTools() {
    this.chalk = chalk
    this.resolveFrom = resolveFrom
    this.requireFrom = requireFrom
    this.dir = {
      home: homeDir,
      tpl: tplDir,
      cwd: process.cwd(),
    }
    this.yoemanEnv = yoemanEnv
    this.inquirer = inquirer
  }
  checkTplDir() {
    mkdirp(this.dir.tpl)
    const pkgFile = path.resolve(this.dir.tpl, 'package.json')
    if (!fs.existsSync(pkgFile)) {
      fs.writeFileSync(pkgFile, JSON.stringify({ name: '_', description: '_', repository: '_', license: 'MIT' }))
    }
  }
  // 校验是否为最新版本的逻辑
  checkCliUpdate() {
    const pkgName = pkg.name
    const version = pkg.version
    const ltsVersion = execSync(`npm view ${pkgName} version --registry=https://registry.npm.taobao.org`) + '' // 返回 buffer 转 string
    const ltsVersion = execSync(`npm view doraemon-cli version --registry=https://registry.npm.taobao.org`) + '' // 返回 buffer 转 string
    if (ltsVersion.trim() !== version) this.console(`cli 版本过旧，建议执行 npm i -g ${pkgName}@latest 升级 cli： ${version} -> ${ltsVersion} `)
  }
  checkCommand() {
    const cmdDirName = 'script'
    const cmdArr = fs.readdirSync(path.resolve(__dirname, cmdDirName)).map(item => item.split('.')[0])
    if (!cmdArr.includes(process.argv[2])) throw new Error(`${process.argv[2]} 是无效命令`)
    const cmd = require(path.resolve(__dirname, cmdDirName, process.argv[2]))
    this.checkCliUpdate()
    cmd.call(this) // script 里的命令函数可读取 this 实例
  }
  console(data, color = 'yellow') {
    const fn = chalk[color] || chalk.yellow
    console.log(fn(data))
  }
}

module.exports = new M()