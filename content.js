function createModal(videoId, cleanUrl) {
  // Create modal elements
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.zIndex = '10000';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  modal.style.borderRadius = '8px';
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.alignItems = 'center';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter filename';
  input.style.width = '100%';
  input.style.padding = '10px';
  input.style.marginBottom = '10px';
  input.style.boxSizing = 'border-box';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.style.padding = '10px';
  submitButton.style.marginBottom = '10px';
  submitButton.style.width = '100%';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.padding = '10px';
  closeButton.style.width = '100%';
  closeButton.style.marginBottom = '10px';

  const feedback = document.createElement('div');
  feedback.style.marginTop = '10px';
  feedback.style.fontSize = '14px';
  feedback.style.color = 'green';
  feedback.style.display = 'none';

  submitButton.addEventListener('click', () => {
    const filename = input.value;
    const textToCopy = `yt ${cleanUrl} --transcript | fabric --pattern extract_wisdom | save ${filename}_${videoId} -s -n`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard');
      feedback.textContent = `Copied to clipboard: ${textToCopy}`;
      feedback.style.display = 'block';
    }).catch(err => {
      console.error('Error copying text: ', err);
      feedback.textContent = 'Error copying text to clipboard.';
      feedback.style.color = 'red';
      feedback.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(input);
  modal.appendChild(submitButton);
  modal.appendChild(closeButton);
  modal.appendChild(feedback);
  document.body.appendChild(modal);
}

function extractVideoIdAndCleanUrl(url) {
  let videoId = '';
  let cleanUrl = '';
  const urlObj = new URL(url);

  if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
    if (urlObj.pathname === '/watch') {
      videoId = urlObj.searchParams.get('v');
      cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;
    } else if (urlObj.pathname.startsWith('/embed/')) {
      videoId = urlObj.pathname.split('/embed/')[1];
      cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;
    } else if (urlObj.pathname.startsWith('/v/')) {
      videoId = urlObj.pathname.split('/v/')[1];
      cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;
    } else if (urlObj.pathname.startsWith('/shorts/')) {
      videoId = urlObj.pathname.split('/shorts/')[1];
      cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }
  } else if (urlObj.hostname === 'youtu.be') {
    videoId = urlObj.pathname.slice(1);
    cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;
  }

  return { videoId, cleanUrl };
}

const { videoId, cleanUrl } = extractVideoIdAndCleanUrl(location.href);
if (videoId) {
  createModal(videoId, cleanUrl);
}