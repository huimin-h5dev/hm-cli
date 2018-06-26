#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');

program
    .version('1.0.0')
    .option('-i, init [name]', '初始化中商惠民前端项目')
    .parse(process.argv);
console.log(program.init)
if (program.init) {
    const spinner = ora('正在从github下载中商惠民前端项目模板').start();
    download('huimin-h5dev/hmfe-template', program.init, function (err) {
        if(!err){
            // 可以输出一些项目成功的信息
            console.info(chalk.blueBright('下载成功'));
        }else{
            // 可以输出一些项目失败的信息
            console.info(chalk.red('下载失败'));
        }
        spinner.stop();
    })
}