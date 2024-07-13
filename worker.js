// worker.js
onmessage = function(e) {
    console.log('Message received from main script');
    if (e.data === 'Start calculation') {
        // listen for messages sent from main script
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }

        // send result back to main script
        postMessage(result);
    }
};
