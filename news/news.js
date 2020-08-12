const newsData = [
  {
    id: '2',
    type: 'தொழில்நுட்பம்',
    author: 'Rashmika',
    title: 'யூடுப் இல் பணம் சம்பாரிப்பது எப்படி ?',
    description: 'இப்பொழுது பிரபலமாக வளர்ந்து கொண்டு இருக்கும் ட்ர்ண்ட் யுடுப் விடியொஸ்',
    date: '12.08.2020',
    url: '../articles/youtubeEarning',
    img: 'youtubeEarning.jpeg'
  },
  {
    id: '1',
    type: 'தொழில்நுட்பம்',
    author: 'Adin Hudson',
    title: 'விரைவில் ஹாலோகிராம் தொடர்பாடல் வசதி',
    description: 'லாஸ் ஏஞ்சல்ஸ் நிறுவனம் உங்கள் அறைக்குள் நேரடி ஹாலோகிராம்களை ஒளிபரப்ப தயார்',
    date: '10.08.2020',
    url: '../articles/hologram',
    img: 'hologram.jpg'
  }
];

function newstemplate (video) {
  return `
    <div class="single-post-area style-2">
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                <div class="post-thumbnail">
                    <img src="../img/bg-img/${video.img}" alt="">
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="post-content mt-0">
                    <a href="#" class="post-cata cata-sm cata-primary">${video.type}</a>
                    <a href="${video.url}.html" class="post-title mb-2">${video.title}</a>
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
