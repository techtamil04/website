const HowToVideoData = [
  {
    id: '10',
    type: 'தொழில்நுட்பம்',
    title: '[TAMIL] SCREEN MIRRORING IOS/ANDROID TO PC - 100% இலவசம்',
    duration: '4:21',
    url: 'https://youtu.be/ZYgMI_Ofmz8',
    img: 'screenMirror.jpg'
  },
  {
    id: '9',
    type: 'தொழில்நுட்பம்',
    title: '[TAMIL] What is THERMAL PASTE- How to replace ?',
    duration: '7:59',
    url: 'https://youtu.be/k5fItiSWh6k',
    img: 'thermalpaste.jpg'
  },
  {
    id: '8',
    type: 'தொழில்நுட்பம்',
    title: '[TAMIL] HOW TO BUILD A COMPUTER | CORE 2 DUO DESKTOP',
    duration: '14:26',
    url: 'https://youtu.be/Q_8FrtQNg2A',
    img: 'pcbuild.jpg'
  },
  {
    id: '7',
    type: 'தொழில்நுட்பம்',
    title: '[தமிழ்] HOW TO INSTALL UBUNTU OPERATING SYSTEM',
    duration: '4:25',
    url: 'https://youtu.be/Q1ciPzqfg38',
    img: 'installubuntu.jpg'
  },
  {
    id: '6',
    type: 'தொழில்நுட்பம்',
    title: 'HOW TO INSTALL SSD IN A LAPTOP- TAMIL',
    duration: '3:50',
    url: 'https://youtu.be/N3bzCic29xI',
    img: 'ssdInstallation.jpg'
  },
  {
    id: '5',
    type: 'தொழில்நுட்பம்',
    title: 'AIRPODS - Complete Guide -TAMIL |PETROTECH',
    duration: '4:10',
    url: 'https://youtu.be/kxJBUh93J18',
    img: 'airpods.jpg'
  },
  {
    id: '4',
    type: 'விளையாட்டு',
    title: 'Play PUBG mobile on PC | TAMIL (தமிழ்)',
    duration: '3:12',
    url: 'https://youtu.be/HnfOO8YIRSw',
    img: 'pubg.jpg'
  },
  {
    id: '3',
    type: 'தொழில்நுட்பம்',
    title: 'HOW TO APPLY MOBILE SKIN - TAMIL | தமிழ்  GUIDE |PETROTECH|',
    duration: '3:03',
    url: 'https://youtu.be/EsCWoGs3hh0',
    img: 'dbrand.jpg'
  },
  {
    id: '2',
    type: 'தொழில்நுட்பம்',
    title: 'தமிழ் | Tamil | HOW TO USE UBER SRILANKA - FREE RIDE CODE INSIDE',
    duration: '8:32',
    url: 'https://youtu.be/UZ6GZj2Zaws',
    img: 'uberTamil.jpg'
  },
  {
    id: '1',
    type: 'தொழில்நுட்பம்',
    title: 'ஸ்நப் சாட் என்றால் என்ன ?',
    duration: '7:22',
    url: 'https://youtu.be/UZ6GZj2Zaws',
    img: 'snapchat.jpg'
  }
];

function HowTo (video) {
  return `
<div class="col-12 col-md-6">
  <div class="single-post-area mb-50">
      <div class="post-thumbnail">
          <img src="../img/bg-img/${video.img}" alt="">
          <span class="video-duration">${video.duration}</span>
      </div>
      <div class="post-content">
          <a href="#" class="post-cata cata-sm cata-success">${video.type}</a>
          <a href="${video.url}" class="post-title" target="_blank">${video.title}</a>
          
      </div>
  </div>
</div>
`;
}

document.getElementById('app8').innerHTML = `
 ${HowToVideoData.map(HowTo).join('')}
`;
