const newsData = [
  {
    id: '2',
    type: 'தொழில்நுட்பம்',
    author: 'Adin Hudson',
    title: 'விரைவில் ஹாலோகிராம் தொடர்பாடல் வசதி',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '10.08.2020',
    url: '../articles/hologram',
    img: 'hologram.jpg',
    active: 'active',
    active1: 'show active'
  },
  {
    id: '1',
    type: 'தொழில்நுட்பம்',
    author: 'Adin Hudson',
    title: 'நீர் குளிரூட்டல் என்றால் என்ன ?',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic',
    date: '10.08.2020',
    url: '../articles/waterCooling',
    img: 'ubuntu.jpg',
    active: '',
    active1: ''
  }
];

function videotemplate1 (news) {
  return `
  <div class="tab-pane fade ${news.active1}" id="post-${news.id}" role="tabpanel" aria-labelledby="post-${news.id}-tab">
                            
    <div class="single-feature-post video-post bg-img" style="background-image: url(img/bg-img/${news.img});">
          
      <div class="post-content">
        <a href="#" class="post-cata" lang="tt">${news.type}</a>
        <a href="${news.url}.html" class="post-title" lang="tt">${news.title}</a>
          <div class="post-meta d-flex">
          </div>
      </div>
    </div>
  </div>
  `;
}

function newstemplate2 (news) {
  return `
  <a class="nav-link ${news.active}" id="post-${news.id}-tab" data-toggle="pill" href="#post-${news.id}" role="tab" aria-controls="post-${news.id}" aria-selected="true">
                                
  <div class="single-blog-post style-2 d-flex align-items-center">
    <div class="post-thumbnail">
      <img src="img/bg-img/${news.img}" alt="">
    </div>
    <div class="post-content">
      <h6 class="post-title" lang="tt">${news.title}</h6>
      <div class="post-meta d-flex justify-content-between">
      </div>
    </div>
  </div>
  </a>                   
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

document.getElementById('app').innerHTML = `
  ${newsData.map(videotemplate1).join('')}
`;

document.getElementById('app1').innerHTML = `
<ul class="nav vizew-nav-tab" role="tablist">
  <li class="nav-item">
    ${newsData.map(newstemplate2).join('')}
  </li>
</ul>
`;

document.getElementById('app4').innerHTML = `
  ${newsData.map(latestNewsTemplate1).join('')}
`;
