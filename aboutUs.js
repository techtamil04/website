const teamData = [
  {
    id: '6',
    name: 'Niluja Parameswaran',
    designation: 'Content Creator',
    img: 'profile.png',
    social: {
      instagram: 'https://www.instagram.com/_niluja_/',
      facebook: 'https://www.facebook.com/Niluparamesh',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '6',
    name: 'Arabi Balachandran',
    designation: 'Content Creator',
    img: 'profile.png',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '5',
    name: 'Rashmika',
    designation: 'Content Creator',
    img: 'profile.png',
    social: {
      instagram: 'https://www.instagram.com/smollife_/',
      facebook: 'https://www.facebook.com/Rashi.bala23',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '4',
    name: 'Jonathan Harshanth',
    designation: 'Content Creator',
    img: 'profile.png',
    social: {
      instagram: '#',
      facebook: 'https://www.facebook.com/search/top?q=jonathan%20harshanth%20nithiananthan',
      linkedin: 'https://www.linkedin.com/in/jhnithi/',
      twitter: 'https://twitter.com/harshanth96'
    }
  },
  {
    id: '3',
    name: 'Dilshan William',
    designation: 'Content Creator',
    img: 'profile.png',
    social: {
      instagram: 'https://www.instagram.com/dilshan_the_boss/',
      facebook: 'https://www.facebook.com/dilshan.william',
      linkedin: '#',
      twitter: 'https://twitter.com/dilshan_william/'
    }
  },
  {
    id: '2',
    name: 'Aaron Sanjeev Vasu',
    designation: 'Content Creator',
    img: 'profile.png',
    social: {
      instagram: 'https://www.instagram.com/aaron_sanjeev/',
      facebook: 'https://www.facebook.com/aaronsan7eev/',
      linkedin: '#',
      twitter: 'https://twitter.com/aaron_sanjeev'
    }
  },
  {
    id: '1',
    name: 'Adin Hudson',
    designation: 'Web Developer',
    img: 'profile.png',
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
                <li><a href="${data.social.facebook}" title="Facebook" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="${data.social.instagram}" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="${data.social.twitter}" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="${data.social.linkedin}" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a></li>
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
