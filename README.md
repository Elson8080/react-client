### 本地测试
> node version >= 10.12.0
npm run start

### 上线
````shell script
git checkout dev
npm run build_dev
git add .
git commit -m 'msg'
git push origin dev
npm run publish_test
````

### 上线 Test 环境
````shell script
git checkout test
npm run build_test
git add .
git commit -m 'msg'
git push origin test
npm run publish_test
````

### 上线 Prod 环境
```shell script
git checkout master
npm run build_prod
git add .
git commit -m 'msg'
git push origin master
npm run publish_prod
```