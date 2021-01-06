var fs = require('fs')
/* 使用平台特定的分隔符把全部给定的path片段连接到一起,并规范化生成的路径,
 返回:<string>*/
var join = require('path').join;

/**
 * Gets the blv url.
 *
 * @param      {string}  biliCacheUrl  The bili cache url
 * @return     {Array}   The blv url.
 */
exports.getBlvUrl = (biliCacheUrl) => {
    console.log('biliCacheUrl: ' + biliCacheUrl)
    let videosArr = [];
    var urlArr = [];

    function findJsonFile(path) {
        // 返回一个包含指定目录下所有文件名称的数组对象
        let files = fs.readdirSync(path);
        files.forEach(function(item, index) {
            let fPath = join(path, item);
            // 返回一个stat数组对象
            let stat = fs.statSync(fPath);

            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }

            if (stat.isFile() === true) {
                videosArr.push(fPath);
            }
        });
    }

    findJsonFile(biliCacheUrl);

    urlArr = this.getMatchBlvUrls(videosArr)
    return urlArr;
}

/**
 * Gets the match blv urls.
 *
 * @param      {<type>}  videoNamesArr  The video names arr
 * @return     {Array}   The match blv urls.
 */
exports.getMatchBlvUrls = (videoNamesArr) => {
    console.log('该目录下的文件列表:\n')
    console.log(videoNamesArr)

    var resultsArray = [];

    var expression = '/*blv';
    var videoType = 'blv';
    var regExpOfPath = new RegExp(expression);

    var expression2 = '/*video.m4s';
    var videoType2 = 'video.m4s';
    var regExpOfPath2 = new RegExp(expression2);

    for (let i in videoNamesArr) {
        if (regExpOfPath.test(videoNamesArr[i])) {
            console.log('\n64line-符合条件的视频文件:');
            console.log(videoNamesArr[i] + '\n');

            let videoLen = videoNamesArr[i].lastIndexOf(videoType) + videoType.length;
            if (videoLen == videoNamesArr[i].length) {
                console.log(videoNamesArr[i]);
                resultsArray.push(videoNamesArr[i]);
            }

        } else if (regExpOfPath2.test(videoNamesArr[i])) {
            console.log('\n71line-符合条件的视频文件:');
            console.log(videoNamesArr[i] + '\n');

            let videoLen = videoNamesArr[i].lastIndexOf(videoType2) + videoType2.length;
            if (videoLen == videoNamesArr[i].length) {
                console.log(videoNamesArr[i]);
                resultsArray.push(videoNamesArr[i]);
            }

        }

    }
    console.log(resultsArray)
    return resultsArray;
}