const testFolder = './data'    // 실행하는 위치 기준 경로
const fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});