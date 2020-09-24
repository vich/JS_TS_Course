function myAsyncGreater10Function(number) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (number > 10)
                    resolve('Yes!'); // Yay! Everything went well!
                else
                    reject('No!');
            }, 500);
        });
  }

  let five = myAsyncFunction(5)
            .then((msg) => console.log('5>10?  ' + msg))
            .catch((msg) => console.log('5>10?  ' + msg));

            
  let twenty = myAsyncFunction(20) 
            .then((msg) => console.log('20>10?  ' + msg))
            .catch((msg) => console.log('20>10?  ' + msg));