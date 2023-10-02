

/*global chrome*/

let recorder = null;
let recordedChunks = [];
console.log('demmie');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  if (message.action === 'startRecording') {
    const tabId = message.tabId;
    console.log('helooooo');
    navigator.mediaDevices
      .getDisplayMedia({ audio: true, video: true })
      .then(stream => {
        recorder = new MediaRecorder(stream);
        recorder.start();
        recorder.ondataavailable = event => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };

        recorder.onstop = () => {
          stream.getTracks().forEach(track => {
            if (track.readyState === 'live') {
              track.stop();
            }
          });

          // Create a Blob from the recorded chunks
          const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });


            const uploadVideo = async formData => {
              try {
                const res = await fetch(
                  'https://recorder-api-3h2m.onrender.com/api/upload',
                  {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                );
                const data = await res.json();
                console.log(data);
              } catch (err) {
                console.log(err);
              }
            };
          // Generate a URL for the Blob
          const blobURL = URL.createObjectURL(recordedBlob);
          // binarryValue saves the binary
          let binaryValue;

          const blobToBase64 = async blobUrl => {
            try {
              const response = await fetch(blobUrl);
              const blobData = await response.blob();
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  if (reader.result) {
                    resolve(reader.result);

                    binaryValue = reader.result;
                    const formData = {
                      title: 'video',
                      recording: binaryValue,
                    };
                    uploadVideo(formData);
                  } else {
                    reject(new Error('Failed to convert blob to base64.'));
                  }
                };
                reader.onerror = reject;
                reader.readAsDataURL(blobData);
              });
            } catch (error) {
              console.error('Error fetching Blob data:', error);
              throw error; 
            }
          };
          blobToBase64(blobURL);
        };
      })
      .catch(error => {
        console.error('Error capturing media:', error);
      });
  } else if (message.action === 'stopRecording') {
    if (recorder && recorder.state === 'recording') {
      recorder.stop();
    }
  }
});
