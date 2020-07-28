const newsData = [
  {
    id: '3',
    type: 'தொழில்நுட்பம்',
    author: 'Adin Hudson',
    title: 'WHY UBUNTU IS BETTER THAN WINDOWS -TAMIL |தமிழ்',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'ubuntu.jpg'

  },
  {
    id: '2',
    type: 'Mobile',
    author: 'Adin Hudson',
    title: 'HOW TO INSTALL SSD IN A LAPTOP- TAMIL',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic ',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'ssdInstallation.jpg'

  },
  {
    id: '1',
    type: 'தொழில்நுட்பம்',
    author: 'Adin hudson',
    title: 'Motherboard explained in TAMIL- chipsets, sockets and ports',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '24.08.2020',
    url: 'snapchatPost',
    img: 'motherBoard2.jpg'
  }
];

function latestNewstemplate (news) {
  return `
        <div class="single-feature-post video-post bg-img swiper-slide" style="background-image: url(img/bg-img/${news.img});">
          <div class="post-content">
            <a href="#" class="post-cata">${news.type}</a>
            <a href="${news.url}.html" class="post-title">${news.title}</a>
            <div class="post-meta d-flex">
            </div>
          </div>
      </div>
  `;
}

function latestNewsTemplate1 (news) {
  return `
        <div class="single-post-area mb-30">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6">
              <div class="post-thumbnail">
                  <img src="img/bg-img/${news.img}" alt="">
              </div>
            </div>
          <div class="col-12 col-lg-6">
            <div class="post-content mt-0">
              <a href="#" class="post-cata cata-sm cata-success">${news.type}</a>
              <a href="single-post.html" class="post-title mb-2">${news.title}</a>
              <div class="post-meta d-flex align-items-center mb-2">
                <a href="#" class="post-author">By ${news.author}</a>
                <i class="fa fa-circle" aria-hidden="true"></i>
                <a href="#" class="post-date">${news.date}</a>
              </div>
                <p class="mb-2">${news.description}</p>
            </div>
          </div>
        </div>
        </div>
  `;
}

document.getElementById('app3').innerHTML = `
  ${newsData.map(latestNewstemplate).join('')}
`;

document.getElementById('app4').innerHTML = `
  ${newsData.map(latestNewsTemplate1).join('')}
`;
