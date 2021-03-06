const newsData = [
  {
    id: '5',
    type: 'தகவல்',
    author: 'Arabi Balachandran',
    title: 'வீட்டிலிருந்து வேலை செய்வதினால் நீங்கள் பெரும் 10 நன்மைகளும் மற்றும் தீமைகளும்',
    description: 'தொலைதொடர்பின் உதவியின் மூலம் வீட்டிலிருந்து வேலை செய்வதினால் நீங்கள் பெரும் நன்மைகளும் மற்றும் தீமைகளும் ',
    date: '05.09.2020',
    url: '../articles/workFromHome',
    img: 'workFromHome.jpeg'
  },
  {
    id: '4',
    type: 'தொழில்நுட்பம்',
    author: 'Arabi Balachandran',
    title: 'நீர் குளிரூட்டல் (Water Cooling)',
    description: 'கணினி பாகங்களாககிய கிராபிக்ஸ் கார்டுகள் போன்ற பிற கூறுகளின் வெப்பநிலையைக் குறைக்கப்பதற்காக நீர் குளிரூட்டல் என்ற முறை பயன்படுகிறது',
    date: '16.08.2020',
    url: '../articles/waterCooling',
    img: 'waterCooling.jpg'
  },
  {
    id: '3',
    type: 'தொழில்நுட்பம்',
    author: 'Arabi Balachandran',
    title: 'இலகுவாக ஆன்லைனில் பணம் சம்பாதிக்கும் விவரங்கள் மற்றும் முறைகள்',
    description: 'ஆன்லைனில் பணம் சம்பாதிக்க உதவும் சில வலைத்தளங்களை முறைகளுடன் கீழ காணலாம்',
    date: '13.08.2020',
    url: '../articles/easyEarning',
    img: 'make-money-online.jpg'
  },
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
    author: 'Aaron Sanjeev',
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
