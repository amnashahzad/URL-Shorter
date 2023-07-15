function getVideoInfo() {
    var videoUrl = document.getElementById('https://www.youtube.com/watch?v=lnuao4Z14hM').value;
  
    // Make a request to fetch video information from the server-side component
    // The server-side component should handle parsing the video URL and extracting the necessary video information
  
    // Example server-side endpoint: '/videoinfo'
    var endpoint = 'https://www.youtube.com/watch?v=lnuao4Z14hM' + encodeURIComponent(videoUrl);
  
    // Send a GET request to the server-side component
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        // Display the video information in the UI
        document.getElementById('videoTitle').textContent = data.title;
        document.getElementById('videoDuration').textContent = 'Duration: ' + data.duration;
        document.getElementById('videoThumbnail').src = data.thumbnail;
        document.getElementById('videoInfoContainer').style.display = 'block';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  