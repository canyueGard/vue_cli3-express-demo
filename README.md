# vue-cli/3 + express 前后端一体项目

## 一.环境:
    1.node:v10.15.3
    2.npm:6.9.0
    
## 二.依赖:
    1.npm i -g express (4.16.0)
    3.npm i -g nodemon (1.18.10) (监听文件修改)
    2.npm i -g @vue/cli (3.5.5)
    4.npm i -g sequelize-gen (根据mysql生成modal的工具)
    5.npm i -g mysql (sequelize-gen的使用前需要绑定方言)
    
## 三.运行:
    1.前端: npm run dev
    2.前端打包: npm run build [打包后的代码在src/server/public-client, 需手动将index.html放入views文件夹中]
    3.后台: npm run server
    
## 其他说明:
    1.sequelize-gen使用(cmd): sequelize-gen -h "host" -d "dbname" -u "user" -x "password" -p "port" -e "mysql" -o "dirname"
    
