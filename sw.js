//Install Servive Worker 
self.addEventListener("install", ()=>{
    console.log("Service worker Install")
})

//Activate Service Worker 
self.addEventListener("activate", ()=>{
    console.log("Service worker Activated")
})

//Fetch Catche
self.addEventListener("fetch", ()=>{
    console.log("Service worker Fetching....")
})