
    var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};   

download('https://www.cryptocompare.com/media/19684/doge.png', 'icons/taskks12.png', function(){
  console.log('done');
});

    // Download to a directory and save with the original filename
    // const options = {
    //   url: "https://www.cryptocompare.com"+assets.Data[item].ImageUrl,
    //   dest: './public/logo/'+imageName                  // Save to /path/to/dest/image.jpg
    // }
      
    // download.image(options)
    //   .then(({ filename, image }) => {
    //     console.log('File saved to', filename)
    //   }).catch((err) => {
    //     throw err
    //   })                    

