# API - Minimalistic REST API

Ett enkelt och tydligt Node.js API byggt med Express för att hantera en bilsamling. Projektet visar grundläggande principer för RESTful routing och felhantering.

## 🚀 Funktioner
* **Hämta alla bilar:** Ger en komplett lista över bilar i JSON-format.
* **Hämta specifik bil:** Sök via ID med inbyggd felhantering för 404.
* **REST-standard:** Använder korrekta HTTP-metoder och statuskoder.

## 🛠 Installation

1. Klona repot:
   ```bash
   git clone [https://github.com/DITT-ANVANDARNAMN/DITT-REPO-NAMN.git](https://github.com/DITT-ANVANDARNAMN/DITT-REPO-NAMN.git)
Installera beroenden:Bashnpm install
Starta servern (med nodemon):Bashnpm run dev
📍 API EndpointsMetodEndpointBeskrivningGET/VälkomstmeddelandeGET/api/din-resursHämtar alla bilarGET/api/din-resurs/:idHämtar en bil baserat på ID🧪 ExempelanropHämta bil med ID 1GET http://localhost:3000/api/din-resurs/1Respons (200 OK):JSON{
  "id": 1,
  "name": "Volvo",
  "typ": "bil"
}
Om ID inte finnsRespons (404 Not Found):JSON{
  "fel": "Bilen hittades inte"
}
💻 Tech StackRuntime: 
*Node.js
*Framework: Express.js
*Verktyg: Nodemon
