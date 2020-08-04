const newsData = [
  {
    id: '4',
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

function newstemplate (video) {
  return `
    <div class="single-post-area style-2">
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                <div class="post-thumbnail">
                    <img src="../img/bg-img/${video.img}" alt="">
                    <span class="video-duration">${video.duration}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="post-content mt-0">
                    <a href="#" class="post-cata cata-sm cata-primary">${video.type}</a>
                    <a href="single-post.html" class="post-title mb-2">${video.title}</a>
                    <div class="post-meta d-flex align-items-center mb-2">
                        <a href="#" class="post-author">By ${video.author}</a>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <a href="#" class="post-date">${video.date}</a>
                    </div>
                <p class="mb-2">${video.description}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

document.getElementById('app11').innerHTML = `
    <div class="archive-catagory-view mb-50 d-flex align-items-center justify-content-between">
        <div class="archive-catagory">
            <h4><i class="fa fa-book" aria-hidden="true"></i> News </h4>
        </div>
    </div>
  ${newsData.map(newstemplate).join('')}
`;
