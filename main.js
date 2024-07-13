document.getElementById('startWorker').addEventListener('click', () => {
    // validate browser support
    if (window.Worker) {
        // create new instance of Worker
        const myWorker = new Worker('worker.js');

        // send message to Worker
        myWorker.postMessage('Start calculation');

        // listen for messages sent from Worker
        myWorker.onmessage = function(e) {
            document.getElementById('result').innerText = 'Result: ' + e.data;
        };

        // listen for Worker errors
        myWorker.onerror = function(error) {
            console.error('Worker error: ', error.message);
        };
    } else {
        console.log('Web Workers are not supported in your browser.');
    }
});
