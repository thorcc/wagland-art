const paintings = document.querySelector('.paintings');

const images = [{
  "order": "1",
  "title": " Diversity",
  "filename": "1_Diversity.jpg"
}, {
  "order": "2",
  "title": " Changing Direction",
  "filename": "2_Changing_Direction.JPG"
}, {
  "order": "3",
  "title": " My Happy Day",
  "filename": "3_My_Happy_Day.jpg"
}, {
  "order": "4",
  "title": " Personality",
  "filename": "4_Personality.jpg"
}, {
  "order": "5",
  "title": " Split Personality",
  "filename": "5_Split_Personality.JPG"
}, {
  "order": "6",
  "title": " Vulnerable and Exposed",
  "filename": "6_Vulnerable_and_Exposed.jpeg"
}, {
  "order": "7",
  "title": " Liberation",
  "filename": "7_Liberation.jpg"
}, {
  "order": "8",
  "title": " Red Lady",
  "filename": "8_Red_Lady.JPG"
}, {
  "order": "9",
  "title": " Floating Dreams",
  "filename": "9_Floating_Dreams.JPG"
}, {
  "order": "10",
  "title": " Privacy",
  "filename": "10_Privacy.jpg"
}, {
  "order": "11",
  "title": " Profound",
  "filename": "11_Profound.jpg"
}, {
  "order": "12",
  "title": " Restrained",
  "filename": "12_Restrained.JPG"
}, {
  "order": "13",
  "title": " Moods in Norway",
  "filename": "13_Moods_in_Norway.jpg"
}, {
  "order": "14",
  "title": " Caring",
  "filename": "14_Caring.JPG"
}, {
  "order": "15",
  "title": " Mother and Child",
  "filename": "15_Mother_and_Child.jpeg"
}, {
  "order": "16",
  "title": " Tomorrow's Child",
  "filename": "16_Tomorrow's_Child.jpg"
}, {
  "order": "17",
  "title": " Just Before",
  "filename": "17_Just_Before.JPG"
}, {
  "order": "18",
  "title": " The Apple",
  "filename": "18_The_Apple.JPG"
}, {
  "order": "19",
  "title": " The Healing",
  "filename": "19_The_Healing.JPG"
}, {
  "order": "20",
  "title": " When Tomorrow Comes",
  "filename": "20_When_Tomorrow_Comes.jpg"
}, {
  "order": "21",
  "title": " Endurance",
  "filename": "21_Endurance.jpeg"
}, {
  "order": "22",
  "title": " Stardust",
  "filename": "22_Stardust.jpeg"
}, {
  "order": "23",
  "title": " Finding Peace",
  "filename": "23_Finding_Peace.JPG"
}, {
  "order": "24",
  "title": " Inside Out",
  "filename": "24_Inside_Out.jpeg"
}, {
  "order": "25",
  "title": " Invisible",
  "filename": "25_Invisible.jpeg"
}, {
  "order": "26",
  "title": " The Wall and the Pussycat",
  "filename": "26_The_Wall_and_the_Pussycat.jpg"
}, {
  "order": "27",
  "title": " Friends",
  "filename": "27_Friends.jpg"
}, {
  "order": "28",
  "title": " The Blue Room",
  "filename": "28_The_Blue_Room.jpg"
}, {
  "order": "29",
  "title": " Reaching for the Stars",
  "filename": "29_Reaching_for_the_Stars.jpg"
}, {
  "order": "30",
  "title": " Riding Life Together (Blue)",
  "filename": "30_Riding_Life_Together_(Blue).JPG"
}, {
  "order": "31",
  "title": " Riding Life Together (Red)",
  "filename": "31_Riding_Life_Together_(Red).JPG"
}, {
  "order": "32",
  "title": " Life",
  "filename": "32_Life.jpg"
}, {
  "order": "33",
  "title": " Destiny",
  "filename": "33_Destiny.jpg"
}, {
  "order": "34",
  "title": " Finding Your Dream ",
  "filename": "34_Finding_Your_Dream_.jpg"
}, {
  "order": "35",
  "title": "  People and Places",
  "filename": "35__People_and_Places.jpg"
}, {
  "order": "36",
  "title": " My Private Glass",
  "filename": "36_My_Private_Glass.jpeg"
}, {
  "order": "37",
  "title": " There Is No Planet B",
  "filename": "37_There_Is_No_Planet_B.jpg"
}, {
  "order": "38",
  "title": " Solutions",
  "filename": "38_Solutions.JPG"
}, {
  "order": "39",
  "title": " The Nature of Living",
  "filename": "39_The_Nature_of_Living.JPG"
}, {
  "order": "40",
  "title": " Norway",
  "filename": "40_Norway.JPG"
}, {
  "order": "41",
  "title": " Never Stop Me Singing",
  "filename": "41_Never_Stop_Me_Singing.JPG"
}, {
  "order": "42",
  "title": " Good Fortune",
  "filename": "42_Good_Fortune.jpg"
}, {
  "order": "43",
  "title": " Words of Wisdom",
  "filename": "43_Words_of_Wisdom.jpeg"
}, {
  "order": "44",
  "title": " Inferiority Complex",
  "filename": "44_Inferiority_Complex.JPG"
}, {
  "order": "45",
  "title": " Struggling",
  "filename": "45_Struggling.JPG"
}, {
  "order": "46",
  "title": " The Displaced",
  "filename": "46_The_Displaced.JPG"
}, {
  "order": "47",
  "title": " Isle of Dreams",
  "filename": "47_Isle_of_Dreams.jpg"
}, {
  "order": "48",
  "title": " New Horizon",
  "filename": "48_New_Horizon.jpg"
}, {
  "order": "49",
  "title": " The Inside and the Outside",
  "filename": "49_The_Inside_and_the_Outside.jpeg"
}, {
  "order": "50",
  "title": " Seven Senses",
  "filename": "50_Seven_Senses.jpeg"
}, {
  "order": "51",
  "title": " Saved",
  "filename": "51_Saved.jpeg"
}, {
  "order": "52",
  "title": " Communicating Hope",
  "filename": "52_Communicating_Hope.jpg"
}, {
  "order": "53",
  "title": " We All Belong",
  "filename": "53_We_All_Belong.jpg"
}, {
  "order": "54",
  "title": " Connections",
  "filename": "54_Connections.jpg"
}, {
  "order": "55",
  "title": " Boys of Europe",
  "filename": "55_Boys_of_Europe.jpg"
}, {
  "order": "56",
  "title": " Speaking of Art",
  "filename": "56_Speaking_of_Art.jpg"
}, {
  "order": "57",
  "title": " Hello!",
  "filename": "57_Hello!.jpg"
}, {
  "order": "58",
  "title": " Platforms",
  "filename": "58_Platforms.jpg"
}, {
  "order": "59",
  "title": " Surfaces",
  "filename": "59_Surfaces.jpg"
}, {
  "order": "60",
  "title": " Free Spirit",
  "filename": "60_Free_Spirit.JPG"
}, {
  "order": "61",
  "title": " Fragments of Youth",
  "filename": "61_Fragments_of_Youth.jpg"
}, {
  "order": "62",
  "title": " Fragments of Life",
  "filename": "62_Fragments_of_Life.jpg"
}, {
  "order": "63",
  "title": " Fragments of Hope",
  "filename": "63_Fragments_of_Hope.jpg"
}, {
  "order": "64",
  "title": " Cashing Cod",
  "filename": "64_Cashing_Cod.jpg"
}, {
  "order": "65",
  "title": " Wings for the Summer",
  "filename": "65_Wings_for_the_Summer.jpg"
}, {
  "order": "66",
  "title": " Wings for the Night",
  "filename": "66_Wings_for_the_Night.jpg"
}, {
  "order": "67",
  "title": " Waiting for The Star",
  "filename": "67_Waiting_for_The_Star.jpg"
}, {
  "order": "68",
  "title": " Blue Mountain",
  "filename": "68_Blue_Mountain.jpg"
}, {
  "order": "69",
  "title": " Nature's Gold",
  "filename": "69_Nature's_Gold.jpg"
}, {
  "order": "70",
  "title": " Norwegian Landscape",
  "filename": "70_Norwegian_Landscape.jpeg"
}];

for(const image of images){
  paintings.innerHTML += `
    <div class="divPainting">
      <img src="./pictures/${image.filename}">
      <div class="name">
        <p>${image.title}</p>
      </div>
      <div class="info">

      </div>
    </div>
  `;
}