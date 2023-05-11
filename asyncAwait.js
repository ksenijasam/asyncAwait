function promiseWith4000Timeout(correct = true) {
    return new Promise((resolve, reject) => {
        if(correct) {
          setTimeout(() => resolve('done4000'), 4000);

          return;
        }

        setTimeout(() => resolve('error'), 4000);
    });
}

function promiseWith5000Timeout() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('done5000'), 5000);
    });
}

function promiseWith9000Timeout() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('done9000'), 9000);
    });
}

async function testingAsyncCode() {
  try {
    console.log('prije')

    promiseWith9000Timeout().then((value) => {
      console.log(value);
    });
    
    let awaitedCode = await promiseWith4000Timeout(true);
    console.log(awaitedCode);
    let awaitedCode2 = await promiseWith5000Timeout();
    console.log(awaitedCode2);

    console.log('poslije');
  }
  catch(e){
    console.log(e);
  }
  
}

testingAsyncCode()
