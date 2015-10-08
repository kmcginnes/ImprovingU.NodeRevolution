# Slides: Day Two

## Progression of web development styles

* Server rendered pages
* Server rendered partials
* Client rendered pages (SPAs)
* Isomorphic 

## Server rendered pages

* Easy to reason about
* Access to server side data and behavior
* Every action is a full page refresh
* Poor user experience for dynamic apps

## Server rendered partials

* Uses AJAX strategically
* Better than a full page refresh
* Code is more complex
* Coupling client side and server side

## Client rendered pages (SPAs)

* JavaScript manages rendering HTML
* Server only sends data (JSON)
* No full page refresh
* No content before the JS loads
* SEO is a PITA
* Don't press the back button!!
* Infamous spinner

## Isomorphic 

No more conceptual divide between the server and the client.

Flow:
1. Request from user (HTTP)
2. Render on server with JavaScript
3. Respond with HTML
4. Load the same JavaScript on client
5. //Hook// into the rendered app
