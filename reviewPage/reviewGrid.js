const reviewVideoData = [
  {
    id: '13',
    type: 'தொழில்நுட்பம்',
    title: '[TAMIL] SONY WIRELESS HEADPHONE REVIEW WH1000XM3',
    duration: '3:36 ',
    url: 'https://youtu.be/Vv37-yoIbec',
    img: 'wh1000xm3.jpg',
    description: ''
  },
  {
    id: '12',
    type: 'தொழில்நுட்பம்',
    title: 'Switching on Ipod Touch after 10 years- Tamil RETRO REVIEW',
    duration: '9:20',
    url: 'https://youtu.be/0q9T2FcntQ4',
    img: '1stGenipod.jpg',
    trending: false,
    latest: false
  },
  {
    id: '11',
    type: 'தொழில்நுட்பம்',
    title: 'DONT BUY AIRPODS PRO BEFORE WATCHING THIS -TAMIL |தமிழ்',
    duration: '5:20',
    url: 'https://youtu.be/MD1Lbm3SR8I',
    img: 'airpods2ndgen.jpg',
    description: ''
  },
  {
    id: '10',
    type: 'தொழில்நுட்பம்',
    title: 'AIRPODS - Complete Guide -TAMIL |PETROTECH',
    duration: '4:10',
    url: 'https://youtu.be/kxJBUh93J18',
    img: 'airpods.jpg',
    description: ''
  },
  {
    id: '9',
    type: 'தொழில்நுட்பம்',
    title: 'Galaxy Buds Review -TAMIL |PETROTECH',
    duration: '3:11',
    url: 'https://youtu.be/zAlnxrqbYlg',
    img: 'galaxyBuds.jpg',
    description: ''
  },
  {
    id: '8',
    type: 'தொழில்நுட்பம்',
    title: 'SAMSUNG S10+ PLUS TAMIL REVIEW | QUICK REVIEW |PETROTECH',
    duration: '3:48',
    url: 'https://youtu.be/GH3nH20gA3o',
    img: 's10Plus.jpg',
    description: ''
  },
  {
    id: '7',
    type: 'தொழில்நுட்பம்',
    title: 'iPhone XR Tamil Review | PETROTECH',
    duration: '8:28',
    url: 'https://youtu.be/p4U203n9MiM',
    img: 'iphonexr.jpg',
    description: ''
  },
  {
    id: '6',
    type: 'தொழில்நுட்பம்',
    title: 'Samsung S8 & S8+ TAMIL REVIEW | PETROTECH',
    duration: '6:35',
    url: 'https://youtu.be/KUZ7N6s55Mc',
    img: 's8plus.jpg',
    description: ''
  },
  {
    id: '5',
    type: 'தொழில்நுட்பம்',
    title: 'iPAD vs TAB S2 [TAMIL] |PETROTECH-TAMIL TECH CHANNEL',
    duration: '3:55',
    url: 'https://youtu.be/sJTp7AZK4xI',
    img: 'ipadvstabS2.jpg',
    description: ''
  },
  {
    id: '4',
    type: 'தொழில்நுட்பம்',
    title: 'iPad AIR 2 TAMIL|தமிழ் REVIEW |PETROTECH|',
    duration: '4:52',
    url: 'https://youtu.be/tm-QQ2URtgY',
    img: 'ipadAir2.jpg',
    description: ''
  },
  {
    id: '3',
    type: 'தொழில்நுட்பம்',
    title: 'Samsung S7 Edge Review in Tamil | தமிழ்',
    duration: '6:23',
    url: 'https://youtu.be/mazxqbF38Dk',
    img: 's7.jpg',
    description: ''
  },
  {
    id: '2',
    type: 'தொழில்நுட்பம்',
    title: 'LG K10 REVIEW IN TAMIL |தமிழ்',
    duration: '5:29',
    url: 'https://youtu.be/7yMxaX0nhWQ',
    img: 'lgK10.jpg',
    description: ''
  },
  {
    id: '1',
    type: 'தொழில்நுட்பம்',
    title: 'iPhone 7 Plus - Full தமிழ் Review (மதிப்பாய்வுரை)',
    duration: '5:04',
    url: 'https://youtu.be/1colshyn6z0',
    img: 'iphone7Plus.jpg',
    description: ''
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

document.getElementById('app10').innerHTML = `
 ${reviewVideoData.map(HowTo).join('')}
`;
