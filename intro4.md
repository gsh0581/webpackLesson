Tree Shaking  只支持 Es Module 的引入方式 不支持require
tree shaking 只打包 引入的文件中导出的部分，production模式自动配置
添加
optimization:{
    usedExports:true
},
package.json中可添加忽略的文件  "sideEffects":["*.css"],

CodeSplitting
添加
  optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
对引入的库进行单独配置输出
代码分割，和webpack无关
webpack实现代码分割两种方式
1.同步代码：在webpack中配置optimization，
2.异步加载的代码，无需配置，自动分割

Chunk ：代码块

