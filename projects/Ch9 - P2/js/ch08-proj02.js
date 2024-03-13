/* add your code here */
const content = `
[
   {
      "id":"3a5c5da5-5a12-4d2b-b0dd-abc28eaf810b",
      "title":"British Museum",
      "description":"The library in the British Museum in London. The British Museum Reading Room, situated in the centre of the Great Court of the British Museum, used to be the main reading room of the British Library. In 1997, this function moved to the new British Library building at St Pancras, London, but the Reading Room remains in its original form at the British Museum.",
      "location":{
         "iso":"GB",
         "country":"United Kingdom",
         "city":"London",
         "continent":"EU"
      },
      "filename":"5855729828.jpg",
      "colors":[
         {
            "hex":"#a9b490",
            "name":"Norway",
            "luminance": 119.73308884347718
         },
         {
            "hex":"#bab984",
            "name":"Pine Glade",
            "luminance": 126.89369264467008
         },
         {
            "hex":"#71735c",
            "name":"Finch",
            "luminance": 79.31501427220448
         },
         {
            "hex":"#332625",
            "name":"Wood Bark",
            "luminance": 26.78974027496347
         },
         {
            "hex":"#b99a5d",
            "name":"Barley Corn",
            "luminance": 102.55295407251806
         }
      ]
   },
   {
      "id":"fbc534dd-3bc0-4419-a5be-a8b93ffe463e",
      "title":"Emirates Stadium",
      "description":"The Emirates Stadium (known as Ashburton Grove prior to sponsorship, and as Arsenal Stadium for UEFA competitions) is a football stadium in Holloway, London, England, and the home of Arsenal FC. With a capacity of 60,260 it is the third-largest football stadium in England after Wembley Stadium and Old Trafford",
      "location":{
         "iso":"GB",
         "country":"United Kingdom",
         "city":"London",
         "continent":"EU"
      },
      "filename":"5855735700.jpg",
      "colors":[
         {
            "hex":"#e8ab9a",
            "name":"Wax Flower",
            "luminance": 128.1748716285684
         },
         {
            "hex":"#137e84",
            "name":"Teal",
            "luminance": 59.31471889000233
         },
         {
            "hex":"#11161d",
            "name":"Black Pearl",
            "luminance": 25.094035247444758
         },
         {
            "hex":"#0c4656",
            "name":"Sherpa Blue",
            "luminance": 43.7638648316165
         },
         {
            "hex":"#91d6d8",
            "name":"Morning Glory",
            "luminance": 133.64699760563272
         }
      ]
   },
   {
      "id":"78c548ce-9202-4ab2-b276-5be38607a9cc",
      "title":"Albert Hall",
      "description":"The Royal Albert Hall is a concert hall on the northern edge of South Kensington, London, and is one of the UK's most treasured and distinctive buildings. It has a capacity of up to 5,267 seats. The Hall was originally supposed to have been called the Central Hall of Arts and Sciences, but the name was changed to the Royal Albert Hall of Arts and Sciences by Queen Victoria upon laying the Hall's foundation stone in 1867, in memory of her husband, Prince Albert, who had died six years earlier. ",
      "location":{
         "iso":"GB",
         "country":"United Kingdom",
         "city":"London",
         "continent":"EU"
      },     
      "filename":"5855174537.jpg",
      "colors": [
        {
            "hex": "#9c7b61",
            "name": "Sorrell Brown",
            "luminance": 88.78895209427803
        },
        {
            "hex": "#d1b083",
            "name": "Calico",
            "luminance": 122.80440714404348
        },
                {
            "hex": "#79b0d5",
            "name": "Seagull",
            "luminance": 148.5727584316856
        },
        {
            "hex": "#e2d3b5",
            "name": "Spanish White",
            "luminance": 141.04035031507826
        },
        {
            "hex": "#eca573",
            "name": "Tacao",
            "luminance": 126.60767891403744
        } 
      ]      
   }
]`;

document.addEventListener('DOMContentLoaded', function () {
   //Convert the JSON string in photo-data.js into a JavaScript array object
   const data = JSON.parse(content);
   if (!data) console.error("Error parsing JSON");
   else console.log("countries", data); // Now 'data' is a JavaScript array object

   // Select the section element where the articles will be appended
   const section = document.querySelector('section');

   // Ensure the section element is not null
   if (!section) {
      console.error("Section element not found.");
      return;
   }

   // Loop through each photo and output its card
   data.forEach(photo => {
      section.innerHTML += outputCard(photo);
   });

   // Function to output the HTML for a single photo card
   function outputCard(photo) {
      let cardHtml = `<article><img src="images/${photo.filename}" alt="${photo.title}" />`;
      cardHtml += `<div class="caption"><h2>${photo.title}</h2><p>${photo.location.city}, ${photo.location.country}</p><h3>Colors</h3>`;
      cardHtml += outputColors(photo.colors);
      cardHtml += '</div></article>';
      return cardHtml;
   }

   // Function to output the colors for a photo
   function outputColors(colors) {
      return colors.map(color => constructColor(color)).join('');
   }

   // Function to construct the HTML for a single color
   function constructColor(color) {
      return `<span style="${constructStyle(color)}">${color.name}</span>`;
   }

   // Function to construct the CSS for a color
   function constructStyle(color) {
      let style = `background-color: ${color.hex};`;
      if (color.luminance < 70) {
         style += ' color: white;';
      }
      return style;
   }
});

