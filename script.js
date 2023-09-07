// Body Sections
const bodyMain = document.querySelector('body');
bodyMain.style.margin = '0px';
// bodyMain.style.overflowY = 'hidden';

// NavBar Sections
const navBar = document.createElement('nav');
bodyMain.append(navBar);
navBar.style.display = 'flex';
navBar.style.color = '#ffffff';

const navBar_a = document.createElement('div')
navBar.append(navBar_a)
navBar_a.style.backgroundColor = '#2F4F4F';
navBar_a.style.width = '50%'
navBar_a.style.height = '60px';
navBar_a.style.listStyle = 'none'
navBar_a.style.fontSize = '20px'

const curChildx = document.createElement('li')
navBar_a.append(curChildx)
curChildx.innerHTML = 'IndMart'
curChildx.style.marginLeft = '100px'
curChildx.style.marginTop = '20px'
curChildx.style.cursor = 'pointer'

const navBar_b = document.createElement('div')
navBar.append(navBar_b)
navBar_b.style.backgroundColor = '#2F4F4F';
navBar_b.style.width = '50%'
navBar_b.style.height = '60px';
navBar_b.style.display = 'flex';
navBar_b.style.listStyle = 'none'
navBar_b.style.alignItems = 'center'
navBar_b.style.gap = '52px'
navBar_b.style.fontSize = '20px'

const navBarChild = [];
const curChild = document.createElement('li');
curChild.innerHTML = 'About';
navBarChild.push(curChild);
curChild.style.cursor = 'pointer'

const curChilda = document.createElement('li');
curChilda.innerHTML = 'Projects';
navBarChild.push(curChilda);
curChilda.style.cursor = 'pointer'

const curChildb = document.createElement('li');
curChildb.innerHTML = 'Service';
navBarChild.push(curChildb);
curChildb.style.cursor = 'pointer'

const curChildc = document.createElement('li');
curChildc.innerHTML = 'Plans & Pricing';
navBarChild.push(curChildc);
curChildc.style.cursor = 'pointer'

const curChildd = document.createElement('li');
curChildd.innerHTML = 'Contact';
navBarChild.push(curChildd);
curChildd.style.cursor = 'pointer'

const curChilde = document.createElement('li');
curChilde.innerHTML = 'Log In';
navBarChild.push(curChilde);
curChilde.style.cursor = 'pointer'

navBar_b.append(...navBarChild);

// Sections 1
const bannerBG = document.createElement('div')
bodyMain.append(bannerBG)
bannerBG.style.height = '700px'

const imageBg = document.createElement('img')
bannerBG.append(imageBg)
imageBg.src = "big.jpg";
imageBg.style.width = '100%'
imageBg.style.height = '100%'

// -----------XXXXXXXXX-------------
const contNar = document.createElement('div')
bodyMain.append(contNar)
contNar.style.position = 'absolute'
contNar.style.height = '250px'
contNar.style.width = '50%'
contNar.style.backgroundColor = '#ffffff'
contNar.style.marginLeft = '400px'
contNar.style.marginTop = '-250px'
contNar.style.textAlign = 'center'
contNar.style.borderTopLeftRadius = '5px'
contNar.style.borderTopRightRadius = '5px'

const contNarAr = [];
const contNara = document.createElement('h3')
contNarAr.push(contNara)
contNara.innerHTML = 'Developing Innovative Strategies'
contNara.style.fontSize = '30px'
contNara.style.fontWeight = '200'

const contNarb = document.createElement('p')
contNarAr.push(contNarb)
contNarb.innerHTML = 'ACHIEVING GROWTH'
contNarb.style.fontSize = '50px'
contNarb.style.fontWeight = '100'

const contNarc = document.createElement('h4')
contNarAr.push(contNarc)
contNarc.innerHTML = 'Book A Consultation'
contNarc.style.fontSize = '18px'
contNarc.style.border = "1px solid #000"
contNarc.style.width = '200px'
contNarc.style.padding = '12px'
contNarc.style.marginLeft = '250px'
contNarc.style.cursor = 'pointer'
contNarc.style.fontWeight = '100'

contNarc.addEventListener('mouseover', function(){
    contNarc.style.backgroundColor = '#008080'
    contNarc.style.color = '#fff'
});
contNarc.addEventListener('mouseout', function(){
    contNarc.style.backgroundColor = '#ffff'
    contNarc.style.color = '#008080'
});
contNarc.addEventListener('click', function(){
    window.open('https://www.facebook.com/')
});
contNar.append(...contNarAr)

// --------------XXXXXXXXXXXSection3---------------
const servicSec = document.createElement('section')
bodyMain.append(servicSec)
servicSec.style.display = 'flex'
servicSec.style.textAlign = 'center'
servicSec.style.margin = '100px'
servicSec.style.gap = '250px'

const servicSecAr = []
// Div1--------------------
const servChilda = document.createElement('div')
servicSecAr.push(servChilda)
const childArSea = []
const chilePar = document.createElement('h2')
childArSea.push(chilePar)
chilePar.innerHTML = 'SERVICES'
chilePar.style.fontWeight = '100'
chilePar.style.fontSize = '30px'
// chilePar.style.margin = '50px'

const chileParb = document.createElement('p')
childArSea.push(chileParb)
chileParb.innerHTML = 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
chileParb.style.width = '252px'

const chileParc = document.createElement('h4')
childArSea.push(chileParc)
chileParc.innerHTML = 'More Info'
chileParc.style.fontSize = '20px'
chileParc.style.fontWeight = '100'
chileParc.style.border = '1px solid #000'
chileParc.style.padding = '10px'
chileParc.addEventListener('mouseover', function(){
    chileParc.style.backgroundColor = '#008080'
    chileParc.style.color = '#fff'
});
chileParc.addEventListener('mouseout', function(){
    chileParc.style.backgroundColor = '#fff'
    chileParc.style.color = '#008080'
});

servChilda.append(...childArSea)
// Div2-------------------------
const servChildb = document.createElement('div')
servicSecAr.push(servChildb)
const childArSeb = []
const chilePard = document.createElement('h2')
childArSeb.push(chilePard)
chilePard.innerHTML = 'PROJECTS'
chilePard.innerHTML = 'SERVICES'
chilePard.style.fontWeight = '100'
chilePard.style.fontSize = '30px'

const chilePare = document.createElement('p')
childArSeb.push(chilePare)
chilePare.innerHTML = 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
chilePare.style.width = '252px'

const chileParf = document.createElement('h4')
childArSeb.push(chileParf)
chileParf.innerHTML = 'More Info'
chileParf.style.fontSize = '20px'
chileParf.style.fontWeight = '100'
chileParf.style.border = '1px solid #000'
chileParf.style.padding = '10px'
chileParf.addEventListener('mouseover', function(){
    chileParf.style.backgroundColor = '#008080'
    chileParf.style.color = '#fff'
});
chileParf.addEventListener('mouseout', function(){
    chileParf.style.backgroundColor = '#fff'
    chileParf.style.color = '#008080'
});

servChildb.append(...childArSeb)
// Div3-----------------------------
const servChildc = document.createElement('div')
servicSecAr.push(servChildc)
const childArSec = []
const chileParg = document.createElement('h2')
childArSec.push(chileParg)
chileParg.innerHTML = 'CLIENTS'
chileParg.innerHTML = 'SERVICES'
chileParg.style.fontWeight = '100'
chileParg.style.fontSize = '30px'

const chileParh = document.createElement('p')
childArSec.push(chileParh)
chileParh.innerHTML = 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
chileParh.style.width = '252px'

const chilePari = document.createElement('h4')
childArSec.push(chilePari)
chilePari.innerHTML = 'More Info'
chilePari.style.fontSize = '20px'
chilePari.style.fontWeight = '100'
chilePari.style.border = '1px solid #000'
chilePari.style.padding = '10px'
chilePari.addEventListener('mouseover', function(){
    chilePari.style.backgroundColor = '#008080'
    chilePari.style.color = '#fff'
});
chilePari.addEventListener('mouseout', function(){
    chilePari.style.backgroundColor = '#fff'
    chilePari.style.color = '#008080'
});

servChildc.append(...childArSec)

servicSec.append(...servicSecAr)
// --------------XXXXXXXXX------------------------
const secRef = document.createElement('div')
bodyMain.append(secRef)
secRef.style.height = '600px'
secRef.style.backgroundImage = 'url("big2.jpg")';
secRef.style.backgroundSize = 'cover'
secRef.style.opacity = '0.5'
secRef.style.textAlign = 'center'
secRef.style.color = '#fff'
secRef.style.paddingTop = '70px'

const secRefAr = [];
const secChild = document.createElement('h2')
secRefAr.push(secChild)
secChild.innerHTML = 'ABOUT US'
secChild.style.fontSize = '40px'

const secChilda = document.createElement('p')
secRefAr.push(secChilda)
secChilda.innerHTML = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
secChilda.style.width = '500px'
secChilda.style.marginLeft = '500px'
secChilda.style.fontSize = '20px'

const secChildb = document.createElement('p')
secRefAr.push(secChildb)
secChildb.innerHTML = 'This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.'
secChildb.style.width = '500px'
secChildb.style.marginLeft = '500px'
secChildb.style.fontSize = '20px'

const secChildc = document.createElement('h4')
secRefAr.push(secChildc)
secChildc.innerHTML = 'Learn More'
secChildc.style.fontSize = '20px'
secChildc.style.border = '1px solid #000'
secChildc.style.padding = '12px'
secChildc.style.width = '130px'
secChildc.style.marginLeft = '700px'
secChildc.style.marginTop = '100px'
secChildc.style.cursor = 'pointer'
secChildc.addEventListener('mouseover', function(){
    secChildc.style.backgroundColor = '#008080'
    secChildc.style.color = '#fff'
});
secChildc.addEventListener('mouseout', function(){
    secChildc.style.backgroundColor = '#fff'
    secChildc.style.color = '#008080'
});

secRef.append(...secRefAr)