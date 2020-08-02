const HowToVideoData = [
  {
    id: '4',
    type: 'தொழில்நுட்பம்',
    author: 'Adin Hudson',
    title: 'WHY UBUNTU IS BETTER THAN WINDOWS -TAMIL |தமிழ்',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'ubuntu.jpg',
    duration: '21:10',
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
    duration: '21:10',
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
    duration: '21:10',
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
    duration: '21:10',
    active: '',
    active1: ''
  }
];

function HowTotemplate (video) {
  return `
<div class="single-post-area style-2">
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <div class="post-thumbnail">
                <img src="img/bg-img/${video.img}" alt="">
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

document.getElementById('app7').innerHTML = `
    <div class="archive-catagory-view mb-50 d-flex align-items-center justify-content-between">
        <div class="archive-catagory">
            <h4><i class="fa fa-" aria-hidden="true"></i> How To Videos </h4>
        </div>
        <div class="view-options">
            <a href="howto-grid.html"><i class="fa fa-th-large" aria-hidden="true"></i></a>
            <a href="howto-list.html" class="active"><i class="fa fa-list-ul" aria-hidden="true"></i></a>
        </div>
    </div>
  ${HowToVideoData.map(HowTotemplate).join('')}
  <nav class="mt-50">
    <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
        </ul>
    </nav>
`;
