const teamData = [
  {
    id: '3',
    name: 'Adin Hudson',
    designation: 'Web Developer',
    img: 'add.jpg',
    social: {
      instagram: 'https://www.instagram.com/adin_hudson/',
      facebook: 'https://www.facebook.com/adinpathmanathan',
      linkedin: 'https://www.linkedin.com/in/adin-hudson/',
      twitter: 'https://twitter.com/adin_hudson'
    }
  },
  {
    id: '2',
    name: 'Adin Hudson',
    designation: 'Web Developer',
    img: 'add.jpg',
    social: {
      instagram: 'https://www.instagram.com/adin_hudson/',
      facebook: 'https://www.facebook.com/adinpathmanathan',
      linkedin: 'https://www.linkedin.com/in/adin-hudson/',
      twitter: 'https://twitter.com/adin_hudson'
    }
  },
  {
    id: '1',
    name: 'Adin Hudson',
    designation: 'Web Developer',
    img: 'add.jpg',
    social: {
      instagram: 'https://www.instagram.com/adin_hudson/',
      facebook: 'https://www.facebook.com/adinpathmanathan',
      linkedin: 'https://www.linkedin.com/in/adin-hudson/',
      twitter: 'https://twitter.com/adin_hudson'
    }
  }
];

function teamTemplate (data) {
  return `
  <div class="col-md-3 col-sm-6" style="margin-right: 40px;  margin-bottom: 30px;">
  <div class="full team_blog_colum">
      <img class="img-responsive" style="border-radius: 50%" src="img/bg-img/${data.img}">
        <div class="team_feature_head" style="margin-bottom: 20px; margin-top: 10px">
        <h4>${data.name}</h4>
        <h7 style="color: #db4437">${data.designation}</h7>
    </div>
    <div class="team_feature_social">
        <div class="social_icon">
            <ul class="list-inline">
                <li><a href="${data.social.facebook}" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="${data.social.instagram}" title="Instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
                <li><a href="${data.social.twitter}" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="${data.social.linkedin}" title="LinkedIn" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
  </div>
  </div>
 `;
}

document.getElementById('app12').innerHTML = `
    ${teamData.map(teamTemplate).join('')}
`;
