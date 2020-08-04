const HowToVideoData = [
  {
    id: '3',
    type: 'தொழில்நுட்பம்',
    author: 'Adin Hudson',
    title: 'WHY UBUNTU IS BETTER THAN WINDOWS -TAMIL |தமிழ்',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'ubuntu.jpg',
    active: 'active',
    active1: 'show active'
  },
  {
    id: '2',
    type: 'Mobile',
    author: 'Adin Hudson',
    title: 'HOW TO INSTALL SSD IN A LAPTOP- TAMIL',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic ',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'ssdInstallation.jpg',
    active: '',
    active1: ''
  },
  {
    id: '1',
    type: 'தொழில்நுட்பம்',
    author: 'Adin hudson',
    title: 'Motherboard explained in TAMIL- chipsets, sockets and ports',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'motherBoard2.jpg',
    active: '',
    active1: ''
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
          <a href="single-post.html" class="post-title">${video.title}</a>
          
      </div>
  </div>
</div>
`;
}

document.getElementById('app8').innerHTML = `
 ${HowToVideoData.map(HowTo).join('')}
`;
