import { main } from './createElements';

const videoElement = document.createElement('video');
function addVideoForBackground() {
  videoElement.className = 'background-video';
  videoElement.setAttribute('src', './video/background-video.mp4');
  videoElement.setAttribute('autoplay', '');
  videoElement.setAttribute('muted', '');
  videoElement.setAttribute('loop', '');
  document.body.append(videoElement);
}
export { addVideoForBackground, videoElement };
