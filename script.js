const kits = [
  {
    id: "24-25-home",
    num: "01",
    season: "24/25",
    seasonFull: "2024/25",
    type: "home",
    typeLabel: "HOME KIT",
    subtitle: "THE STANDARD BEARER",
    brand: "Nike",
    colour: "Red / White",
    detail: "Textured knit pattern, white trim",
    status: "current",
    image: "image/Element/เสื้อแดง.png",
    bgImage: "image/Element/สนาม.png",
    playerImage: "image/Mohamed Salah/IMG_2248.JPG",
    playerName: "M.SALAH",
    playerNumber: "11",
    description: "เสื้อโฮมคิทประจำฤดูกาล 2024/25 สืบสานความเป็นเอกลักษณ์ของสีแดงอมตะที่มีมาตั้งแต่ยุคแรก ออกแบบโดย Nike พร้อมลวดลายทอพิเศษที่ผสมผสานระหว่างประวัติศาสตร์และนวัตกรรม เสื้อตัวนี้คือสัญลักษณ์ของความมุ่งมั่นและความภาคภูมิใจของแฟนบอลลิเวอร์พูลทุกคนทั่วโลก"
  },
  {
    id: "23-24-home",
    num: "02",
    season: "23/24",
    seasonFull: "2023/24",
    type: "home",
    typeLabel: "HOME KIT",
    subtitle: "TRADITION MEETS A NEW ERA",
    brand: "Nike",
    colour: "Red / White",
    detail: "Textured pattern, white trim",
    status: "collected",
    image: "image/Element/เสื้อแดง.png",
    bgImage: "image/Element/สนาม.png",
    playerImage: "image/Dominik Szoboszlai/IMG_2110.JPG",
    playerName: "SZOBOSZLAI",
    playerNumber: "8",
    description: "เสื้อฟุตบอลไม่ใช่แค่เครื่องแต่งกาย แต่คือตัวแทนของความหลงใหล ความศรัทธา และความทรงจำที่ฝังใจของแต่ละคนที่มีต่อสโมสร Liverpool FC เสื้อโฮมคิทฤดูกาล 2023/24 ถูกสวมใส่โดยนักเตะรุ่นใหม่อย่าง Szoboszlai ที่มาสร้างประวัติศาสตร์ใหม่ให้กับลิเวอร์พูล ในฐานะแฟนดั้งเดิม เสื้อตัวนี้หมายถึงยุคเปลี่ยนผ่านที่น่าตื่นเต้น"
  },
  {
    id: "22-23-home",
    num: "03",
    season: "22/23",
    seasonFull: "2022/23",
    type: "home",
    typeLabel: "HOME KIT",
    subtitle: "RETURN TO THE TOP",
    brand: "Nike",
    colour: "Red / White",
    detail: "Shadow tonal pattern, modern collar",
    status: "collected",
    image: "image/Element/เสื้อแดง.png",
    bgImage: "image/Element/สนาม.png",
    playerImage: "image/Virgil van Dijk/IMG_2256.JPG",
    playerName: "VAN DIJK",
    playerNumber: "4",
    description: "ฤดูกาล 2022/23 เป็นปีที่ Liverpool ต้องพิสูจน์ตัวเองอีกครั้ง เสื้อโฮมคิทสีแดงคลาสสิกยังคงส่งต่อพลังของ Anfield แม้ในช่วงเวลาที่ท้าทาย Van Dijk สวมเสื้อตัวนี้ในฐานะกัปตันที่นำทีมผ่านฤดูกาลที่ยากลำบากด้วยความมุ่งมั่น ทีมและเสื้อยังคงยืนหยัดเคียงข้างกัน"
  },
  {
    id: "21-22-home",
    num: "04",
    season: "21/22",
    seasonFull: "2021/22",
    type: "home",
    typeLabel: "HOME KIT",
    subtitle: "THE DOUBLE SEASON",
    brand: "Nike",
    colour: "Red / White",
    detail: "Clean minimal design, gold details",
    status: "collected",
    image: "image/Element/เสื้อแดง.png",
    bgImage: "image/Element/สนาม.png",
    playerImage: "image/Sadio Mané/IMG_2252.JPG",
    playerName: "MANÉ",
    playerNumber: "10",
    description: "ฤดูกาล 2021/22 คือปีแห่งความสำเร็จอันยิ่งใหญ่ Liverpool คว้า FA Cup และ League Cup ในฤดูกาลเดียว Sadio Mané สวมเสื้อตัวนี้ในช่วงฟอร์มที่ดีที่สุดของเขาก่อนที่จะอำลา Anfield เสื้อตัวนี้เป็นสัญลักษณ์ของยุคทองสุดท้ายในยุค Klopp ที่จะจดจำตลอดไป"
  },
  {
    id: "20-21-away",
    num: "05",
    season: "20/21",
    seasonFull: "2020/21",
    type: "away",
    typeLabel: "AWAY KIT",
    subtitle: "DIFFERENT PLACES, SAME PASSION",
    brand: "Nike",
    colour: "Black / Teal",
    detail: "Geometric pattern, neon accent trim",
    status: "collected",
    image: "image/Element/เสื้อดำ.png",
    bgImage: "image/Mohamed Salah/IMG_2249.JPG",
    playerImage: "image/Diogo Jota/IMG_2260.JPG",
    playerName: "JOTA",
    playerNumber: "20",
    description: "เสื้อ Away Kit ฤดูกาล 2020/21 โดดเด่นด้วยสีดำและลวดลาย geometric สุดล้ำ Diogo Jota ที่เพิ่งมาใหม่ได้สวมเสื้อตัวนี้และสร้างผลงานที่น่าทึ่ง ด้วยการทำแฮตทริกใน Champions League และ Premier League ในฤดูกาลแรก ทำให้เสื้อตัวนี้มีความหมายพิเศษมากกว่าสีสันที่โดดเด่น"
  },
  {
    id: "19-20-home",
    num: "06",
    season: "19/20",
    seasonFull: "2019/20",
    type: "home",
    typeLabel: "HOME KIT",
    subtitle: "CHAMPIONS AT LAST",
    brand: "New Balance",
    colour: "Red / White",
    detail: "Classic collar, heritage badge placement",
    status: "collected",
    image: "image/Element/เสื้อแดง.png",
    bgImage: "image/Element/สนาม.png",
    playerImage: "image/Mohamed Salah/IMG_2250.JPG",
    playerName: "SALAH",
    playerNumber: "11",
    description: "เสื้อที่สวมใส่ในฤดูกาลแชมเปียนส์ครั้งประวัติศาสตร์! Liverpool คว้าแชมป์ Premier League ครั้งแรกในรอบ 30 ปี ด้วย 99 แต้มจาก 38 นัด Salah, Mané และ Firmino ในเสื้อตัวนี้คือภาพที่จะจดจำไปตลอดกาล นี่คือเสื้อที่มีความหมายมากที่สุดในยุคสมัยใหม่ของลิเวอร์พูล"
  },
  {
    id: "18-19-third",
    num: "07",
    season: "18/19",
    seasonFull: "2018/19",
    type: "third",
    typeLabel: "THIRD KIT",
    subtitle: "BOLD, CREATIVE, ALWAYS A STORY",
    brand: "New Balance",
    colour: "Teal / Charcoal",
    detail: "Gradient design, unique colourway",
    status: "collected",
    image: "image/Element/เสื้อดำ.png",
    bgImage: "image/Virgil van Dijk/IMG_2257.JPG",
    playerImage: "image/Mohamed Salah/IMG_2251.JPG",
    playerName: "SALAH",
    playerNumber: "11",
    description: "Third Kit ฤดูกาล 2018/19 เป็นหนึ่งในดีไซน์ที่กล้าหาญที่สุดของ Liverpool สีฟ้าเทียลเข้มกับลวดลาย gradient ที่ไม่เหมือนใคร เสื้อตัวนี้ถูกสวมใส่ในฤดูกาลที่ Liverpool คว้าแชมป์ Champions League สำเร็จ ทำให้ทุกคนที่ครอบครองเสื้อตัวนี้รู้สึกถึงความยิ่งใหญ่นั้น"
  },
  {
    id: "17-18-away",
    num: "08",
    season: "17/18",
    seasonFull: "2017/18",
    type: "away",
    typeLabel: "AWAY KIT",
    subtitle: "THE SALAH DEBUT SEASON",
    brand: "New Balance",
    colour: "Cream / Gold",
    detail: "Retro cream colourway, gold pinstripe",
    status: "collected",
    image: "image/Element/เสื้อครีม.png",
    bgImage: "image/Fernando Torres/IMG_2244.JPG",
    playerImage: "image/Mohamed Salah/IMG_2248.JPG",
    playerName: "SALAH",
    playerNumber: "11",
    description: "เสื้อ Away Kit ฤดูกาล 2017/18 สีครีมอบอุ่นที่สวยงามและคลาสสิก นี่คือปีแรกของ Mohamed Salah ที่ Liverpool เขาสวมเสื้อตัวนี้ทำลายทุกสถิติ ด้วย 44 ประตูในฤดูกาลเดียว ทำให้เสื้อตัวนี้มีคุณค่าทางประวัติศาสตร์อย่างแท้จริง"
  }
];

const kitTypes = [
  { id: "all",     label: "ALL" },
  { id: "home",    label: "HOME KIT" },
  { id: "away",    label: "AWAY KIT" },
  { id: "third",   label: "THIRD KIT" },
  { id: "special", label: "SPECIAL KIT" }
];

const seasons = [
  "2024/25","2023/24","2022/23","2021/22",
  "2020/21","2019/20","2018/19","2017/18"
];

function getKitById(id)       { return kits.find(k => k.id === id) || null; }
function getKitsByType(type)  { return type === 'all' ? kits : kits.filter(k => k.type === type); }
function getKitsBySeason(s)   { return kits.filter(k => k.seasonFull === s); }

function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const map  = {
    'index.html':  'home',
    '':            'home',
    'story.html':  'story',
    'player.html': 'story',
    'collection.html': 'collection',
    'kit.html':    'collection',
    'about.html':  'about'
  };
  const active = map[page] || 'home';
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === active);
  });
}

function initHamburger() {
  const ham   = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!ham || !links) return;
  ham.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-link').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

function renderNav() {
  const navEl = document.querySelector('.site-nav');
  if (!navEl) return;
  navEl.innerHTML = `
    <div class="nav-logo">
      <img src="image/Element/Logo.png" alt="LFC" />
      <span class="nav-logo-text">L.F.C.</span>
    </div>
    <div class="nav-links">
      <a class="nav-link" href="index.html"      data-page="home">HOME</a>
      <a class="nav-link" href="story.html"      data-page="story">LEGENDS</a>
      <a class="nav-link" href="collection.html" data-page="collection">PLAYER PROFILE</a>
      <a class="nav-link" href="about.html"      data-page="about">ABOUT</a>
    </div>
    <div class="nav-actions">
      <button class="nav-icon" title="Search">&#9906;</button>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  setActiveNav();
  initHamburger();
}

document.addEventListener('DOMContentLoaded', renderNav);


const players = [
  {
    id: "kenny-dalglish",
    name: "Kenny Dalglish",
    nickname: "King Kenny",
    number: 7,
    position: "กองหน้า",
    era: "past",
    years: "1977–1990",
    nationality: "Scotland",
    mainImage: "image/Kenny Dalglish/IMG_2222.JPG",
    images: ["image/Kenny Dalglish/IMG_2222.JPG","image/Kenny Dalglish/IMG_2223.JPG","image/Kenny Dalglish/IMG_2224.JPG","image/Kenny Dalglish/IMG_2225.JPG","image/Kenny Dalglish/IMG_2226.JPG"],
    goals: 172, appearances: 515,
    trophies: ["First Division (×6)","FA Cup (×1)","League Cup (×4)","European Cup (×3)"],
    bio: "หนึ่งในนักเตะผู้ยิ่งใหญ่ของสโมสร มีบทบาทสำคัญในการพาทีมประสบความสำเร็จทั้งในประเทศและยุโรป",
    highlight: "ตำนานหมายเลข 7 และบุคคลสำคัญของลิเวอร์พูล",
    story: "พาทีมคว้าแชมป์ลีก 6 สมัยและยูโรเปียนคัพ 3 สมัย พร้อมสถิติ 172 ประตู และต่อมาพาทีมคว้าดับเบิลแชมป์ประวัติศาสตร์ในฐานะผู้จัดการทีม"
  },
  {
    id: "steven-gerrard",
    name: "Steven Gerrard",
    nickname: "Stevie G",
    number: 8,
    position: "กองกลาง",
    era: "past",
    years: "1998–2015",
    nationality: "England",
    mainImage: "image/Steven Gerrard/IMG_2228.JPG",
    images: ["image/Steven Gerrard/IMG_2228.JPG","image/Steven Gerrard/IMG_2227.JPG","image/Steven Gerrard/IMG_2229.JPG","image/Steven Gerrard/IMG_2230.JPG","image/Steven Gerrard/IMG_2231.JPG","image/Steven Gerrard/IMG_2232.JPG","image/Steven Gerrard/IMG_2233.JPG"],
    goals: 186, appearances: 710,
    trophies: ["FA Cup (×2)","League Cup (×3)","UEFA Champions League (×1)","UEFA Cup (×1)"],
    bio: "กัปตันทีมผู้เป็นสัญลักษณ์ของความเป็นผู้นำและความทุ่มเท โดยเฉพาะการพาทีมคว้าแชมป์ UEFA Champions League ปี 2005",
    highlight: "Istanbul 2005",
    story: "การคัมแบ็กที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ฟุตบอลยุโรป กัปตันเจอร์ราร์ดนำทัพพลิกจากตามหลัง 0-3 กลับมาคว้าแชมป์ยุโรปสมัยที่ 5 ได้อย่างปาฏิหาริย์"
  },
  {
    id: "ian-rush",
    name: "Ian Rush",
    nickname: "Rushie",
    number: 9,
    position: "กองหน้า",
    era: "past",
    years: "1980–1987 และ 1988–1996",
    nationality: "Wales",
    mainImage: "image/Ian Rush/IMG_2234.JPG",
    images: ["image/Ian Rush/IMG_2234.JPG","image/Ian Rush/IMG_2235.JPG","image/Ian Rush/IMG_2236.JPG","image/Ian Rush/IMG_2237.JPG"],
    goals: 346, appearances: 660,
    trophies: ["First Division (×5)","FA Cup (×3)","League Cup (×5)","European Cup (×1)"],
    bio: "ดาวยิงระดับตำนาน ผู้ทำประตูให้สโมสรได้อย่างต่อเนื่องและมีบทบาทสำคัญในยุคแห่งความสำเร็จ",
    highlight: "หนึ่งในผู้ทำประตูสูงสุดตลอดกาลของสโมสร",
    story: "ดาวซัลโวสูงสุดตลอดกาลของลิเวอร์พูลด้วยจำนวน 346 ประตู พร้อมสถิติสุดมหัศจรรย์ที่ลิเวอร์พูลไม่เคยแพ้ในนัดที่เอียน รัช ทำประตูได้"
  },
  {
    id: "john-barnes",
    name: "John Barnes",
    nickname: "Digger",
    number: 10,
    position: "ปีก / กองกลางตัวรุก",
    era: "past",
    years: "1987–1997",
    nationality: "England",
    mainImage: "image/John Barnes/IMG_2240.JPG",
    images: ["image/John Barnes/IMG_2240.JPG","image/John Barnes/IMG_2241.JPG","image/John Barnes/IMG_2242.JPG","image/John Barnes/IMG_2243.JPG"],
    goals: 108, appearances: 407,
    trophies: ["First Division (×2)","FA Cup (×1)","League Cup (×1)"],
    bio: "นักเตะที่โดดเด่นด้านทักษะ การเลี้ยงบอล และการสร้างสรรค์เกม เป็นหนึ่งในผู้เล่นสำคัญของทีมช่วงปลายยุค 1980",
    highlight: "ความสามารถในการสร้างเกมรุก",
    story: "ปีกพรสวรรค์สูงผู้เปลี่ยนเกมรุกของลิเวอร์พูลให้เปี่ยมด้วยศิลปะและความตื่นตาตื่นใจ จนได้รับรางวัลนักฟุตบอลยอดเยี่ยมแห่งปี PFA ถึง 2 สมัย"
  },
  {
    id: "fernando-torres",
    name: "Fernando Torres",
    nickname: "El Niño",
    number: 9,
    position: "กองหน้า",
    era: "past",
    years: "2007–2011",
    nationality: "Spain",
    mainImage: "image/Fernando Torres/IMG_2244.JPG",
    images: ["image/Fernando Torres/IMG_2244.JPG","image/Fernando Torres/IMG_2245.JPG","image/Fernando Torres/IMG_2246.JPG","image/Fernando Torres/IMG_2247.JPG"],
    goals: 81, appearances: 142,
    trophies: [],
    bio: "กองหน้าชาวสเปนที่สร้างความประทับใจด้วยความเร็ว การหาพื้นที่ และการจบสกอร์ ทำ 81 ประตูจาก 142 นัดให้ลิเวอร์พูล",
    highlight: "ฤดูกาลเปิดตัวที่ยอดเยี่ยมและการจับคู่กับ Steven Gerrard",
    story: "ยิง 33 ประตูในฤดูกาลแรกสร้างสถิติประเดิมสนามของสโมสร และการประสานงานอันไร้เทียมทานระหว่าง ตอร์เรส และ เจอร์ราร์ด คือฝันร้ายของกองหลังทั่วพรีเมียร์ลีก"
  },
  {
    id: "mohamed-salah",
    name: "Mohamed Salah",
    nickname: "The Egyptian King",
    number: 11,
    position: "ปีกขวา",
    era: "modern",
    years: "2017–2026",
    nationality: "Egypt",
    mainImage: "image/Mohamed Salah/IMG_2248.JPG",
    images: ["image/Mohamed Salah/IMG_2248.JPG","image/Mohamed Salah/IMG_2249.JPG","image/Mohamed Salah/IMG_2250.JPG","image/Mohamed Salah/IMG_2251.JPG"],
    goals: 232, appearances: 370,
    trophies: ["Premier League (×1)","FA Cup (×1)","League Cup (×1)","UEFA Champions League (×1)","FIFA Club World Cup (×1)"],
    bio: "นักเตะชาวอียิปต์ผู้สร้างผลงานโดดเด่นในแนวรุก ช่วยทีมคว้าแชมป์พรีเมียร์ลีกและ Champions League รวมถึงรางวัลส่วนตัวมากมาย",
    highlight: "Egyptian King และผลงานการทำประตูระดับสโมสร",
    story: "ทำลายสถิติยิงประตูในพรีเมียร์ลีกตั้งแต่ฤดูกาลแรกด้วย 44 ประตูรวมทุกถ้วย และรักษาฟอร์มระดับเวิลด์คลาสพาทีมกวาดทุกแชมป์เมเจอร์"
  },
  {
    id: "sadio-mane",
    name: "Sadio Mané",
    nickname: "The Senegalese Lion",
    number: 10,
    position: "กองหน้า / ปีก",
    era: "modern",
    years: "2016–2022",
    nationality: "Senegal",
    mainImage: "image/Sadio Mané/IMG_2253.JPG",
    images: ["image/Sadio Mané/IMG_2253.JPG","image/Sadio Mané/IMG_2252.JPG","image/Sadio Mané/IMG_2254.JPG","image/Sadio Mané/IMG_2255.JPG"],
    goals: 120, appearances: 269,
    trophies: ["Premier League (×1)","FA Cup (×1)","League Cup (×1)","UEFA Champions League (×1)","FIFA Club World Cup (×1)"],
    bio: "หนึ่งในกำลังสำคัญของแนวรุกยุค Jürgen Klopp ร่วมกับ Mohamed Salah และ Roberto Firmino มีส่วนสำคัญในการคว้าแชมป์รายการใหญ่หลายรายการ",
    highlight: "สามประสานแนวรุกแห่งยุค",
    story: "หัวใจสำคัญในเกมรุกยุคทองของคล็อปป์ ความเร็ว ความขยัน และประตูสำคัญมากมายช่วยนำพรีเมียร์ลีกสมัยแรกในรอบ 30 ปีมาสู่แอนฟิลด์"
  },
  {
    id: "virgil-van-dijk",
    name: "Virgil van Dijk",
    nickname: "VVD",
    number: 4,
    position: "เซ็นเตอร์แบ็ก",
    era: "modern",
    years: "ตั้งแต่ 2018 จนถึงปัจจุบัน",
    nationality: "Netherlands",
    mainImage: "image/Virgil van Dijk/IMG_2259.JPG",
    images: ["image/Virgil van Dijk/IMG_2259.JPG","image/Virgil van Dijk/IMG_2257.JPG","image/Virgil van Dijk/IMG_2258.JPG","image/Virgil van Dijk/IMG_2256.JPG"],
    goals: 22, appearances: 222,
    trophies: ["Premier League (×1)","FA Cup (×1)","League Cup (×1)","UEFA Champions League (×1)","FIFA Club World Cup (×1)"],
    bio: "กองหลังชาวเนเธอร์แลนด์ที่โดดเด่นด้านการอ่านเกม การป้องกัน และความเป็นผู้นำ มีบทบาทสำคัญในการยกระดับแนวรับของทีม",
    highlight: "ผู้นำแนวรับและกัปตันทีม",
    story: "ปราการหลังผู้พลิกโฉมเกมรับลิเวอร์พูลจนก้าวสู่อันดับ 2 บัลลงดอร์ปี 2019 และนำทีมคว้าแชมป์ยุโรปและพรีเมียร์ลีกในฐานะผู้นำเกมรับระดับโลก"
  },
  {
    id: "dominik-szoboszlai",
    name: "Dominik Szoboszlai",
    nickname: "Szobo",
    number: 8,
    position: "กองกลาง",
    era: "modern",
    years: "ตั้งแต่ 2023",
    nationality: "Hungary",
    mainImage: "image/Dominik Szoboszlai/IMG_2221.JPG",
    images: ["image/Dominik Szoboszlai/IMG_2221.JPG","image/Dominik Szoboszlai/IMG_2218.JPG","image/Dominik Szoboszlai/IMG_2110.JPG","image/Dominik Szoboszlai/IMG_2239.JPG"],
    goals: 18, appearances: 85,
    trophies: ["League Cup (×1)"],
    bio: "กองกลางชาวฮังการีที่มีความสามารถทั้งการยิงไกล การจ่ายบอล และการเคลื่อนที่ ช่วยทีมคว้าแชมป์พรีเมียร์ลีกฤดูกาล 2024–25",
    highlight: "หมายเลข 8 แห่งยุคใหม่",
    story: "ผู้สืบทอดเสื้อหมายเลข 8 ระดับตำนาน ด้วยพลังการขับเคลื่อนเกม การยิงไกลอันทรงพลัง และความทุ่มเทเพื่อแฟนบอลแอนฟิลด์"
  },
  {
    id: "diogo-jota",
    name: "Diogo Jota",
    nickname: "Jota",
    number: 20,
    position: "กองหน้า",
    era: "modern",
    years: "2020–2025",
    nationality: "Portugal",
    mainImage: "image/Diogo Jota/IMG_2261.JPG",
    images: ["image/Diogo Jota/IMG_2261.JPG","image/Diogo Jota/IMG_2260.JPG","image/Diogo Jota/IMG_2262.JPG","image/Diogo Jota/IMG_2263.jpg"],
    goals: 65, appearances: 182,
    trophies: ["FA Cup (×1)","League Cup (×1)"],
    bio: "กองหน้าชาวโปรตุเกสที่โดดเด่นด้านการหาพื้นที่และการจบสกอร์ เขามีส่วนช่วยทีมคว้าแชมป์พรีเมียร์ลีก, FA Cup และ League Cup",
    highlight: "หมายเลข 20 ที่สโมสรยกเลิกใช้เพื่อเป็นเกียรติแก่เขา",
    story: "ดาวยิงตัวจบสกอร์จอมคม ผู้มักยิงประตูชัยในเกมสำคัญเสมอ กลายเป็นที่รักของเดอะค็อปและได้รับเกียรติยศสูงสุดจากสโมสร"
  }
];

function getPlayerById(id)      { return players.find(p => p.id === id) || null; }
function getPlayerIndex(id)     { return players.findIndex(p => p.id === id); }
function getPastPlayers()       { return players.filter(p => p.era === 'past'); }
function getModernPlayers()     { return players.filter(p => p.era === 'modern'); }
