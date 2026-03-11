# API - Minimalistic REST API

Ett enkelt och tydligt Node.js API byggt med Express för att hantera en bilsamling. Projektet visar grundläggande principer för RESTful routing och felhantering.
--------------------------------------------------------------------------------------
 🚀 ##Funktioner
* Hämta alla bilar:** Ger en komplett lista över bilar i JSON-format.
* Hämta specifik bil:** Sök via ID med inbyggd felhantering för 404.
* REST-standard:** Använder korrekta HTTP-metoder och statuskoder.
------------------------------------------------------------------------------------
 🛠 ##Installation

1. Klona repot:
   ```bash
   git clone [https://github.com/DITT-ANVANDARNAMN/DITT-REPO-NAMN.git](https://github.com/DITT-ANVANDARNAMN/DITT-REPO-NAMN.git)
-------------------------------------------------------------------------------------
2.Installera beroenden:
*Bash
*npm install
-------------------------------------------------------------------------------------
3.Starta servern (med nodemon):
Bash
*npm run dev

------------------------------------------------------------------------------------
📍 ##API Endpoints

| Metod | Endpoint            | Beskrivning                     |
|-------|----------------------|---------------------------------|
| GET   | /                   | Välkomstmeddelande              |
| GET   | /api/din-resurs     | Hämtar alla bilar               |
| GET   | /api/din-resurs/:id | Hämtar en bil baserat på ID     |


-----------------------------------------------------------------------------------
🧪 ##Exempelanrop

###Hämta bil med ID 1

GET http://localhost:3000/api/din-resurs/1Respons (200 OK):JSON{
  "id": 1,
  "name": "Volvo",
  "typ": "bil"
}

###Om ID inte finns

Respons (404 Not Found):JSON{
  "fel": "Bilen hittades inte"
}
----------------------------------------------------------------------------
💻 ##Tech StackRuntime: 

*Node.js
*Framework: Express.js
*Verktyg: Nodemon

-----------------------------------------------------------------------------
