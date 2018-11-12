const myImage = document.getElementById('myImage');
const thumbnailHolder = document.getElementById('thumbnailHolder');

var image_names =  new Array;
var image_names =
["IMG_0799.JPG",
  "IMG_0725.JPG",
  "IMG_1577.JPG",
  "IMG_1250.JPG",
  "IMG_5128.JPG",
  "IMG_5718.JPG",
  "IMG_5999.JPG",
  "IMG_6052.JPG",
  "IMG_7297.JPG",
  "IMG_2942.JPG"
];

var ondertext =
["<strong>Foto 1</strong> is vlakbij mijn huis gemaakt.",
  "<strong>Foto 2</strong>  is gemaakt in het Amsterdamse Bos.",
  "<strong>Foto 3</strong> is ook gemaakt in het Amsterdamse Bos.",
  "<strong>Foto 4</strong> is gemaakt vlakbij mijn huis. Dat is mijn hond Zoë.",
  "<strong>Foto 5</strong> is gemaakt bij de Amsterdamse Manege. Dat was mijn lease-paard Solo.",
  "<strong>Foto 6</strong> is bij mij thuis. Het is mijn lievelingseten, Sushi!",
  "<strong>Foto 7</strong> is gemaakt in Movie Park Germany. Dat is mijn moeder.",
  "<strong>Foto 8</strong> is gemaakt in de auto. Toen was ik op weg naar huis vanaf Movie Park Germany.",
  "<strong>Foto 9</strong> is gemaakt toen ik naar school liep.",
  "<strong>Foto 10</strong> is gemaakt bij mij thuis. Dit zijn mijn nichtjes."
];



myImage.src = "fotos/IMG_1577.JPG";

altTekstElement = document.getElementById("alt_tekst");



for(let teller= 0; teller <image_names.length ; teller++){
  let thumb = new Image();
  thumb.src = "foto's klein/" + image_names[teller];
  thumb.teller = teller;

altTekstElement.innerHTML = ondertext[thumb.teller];

  thumbnailHolder.appendChild(thumb);
  thumb.addEventListener('click',()=>{
    altTekstElement.innerHTML = ondertext[teller]
    myImage.src = "fotos/" + image_names[thumb.teller];

  })
}
