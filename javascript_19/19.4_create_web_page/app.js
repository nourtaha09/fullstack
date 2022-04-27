document.addEventListener('DOMContentLoaded', ()=>{
    const blackDiv = document.createElement('div')
    const body = document.querySelector("body")
    blackDiv.classList.add("black")
    body.appendChild(blackDiv)

    const img = document.createElement('img')
    img.setAttribute('src','t.jpg')
    blackDiv.appendChild(img)
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = "James Webb Space Telescope"
    blackDiv.appendChild(title)

    const p = document.createElement('p')
    p.innerHTML = "The James Webb Space Telescope (JWST) is a space telescope designed primarily to conduct infrared astronomy. The most powerful telescope ever launched into space, its greatly improved infrared resolution and sensitivity will allow it to view objects too old, distant, and faint for the Hubble Space Telescope. This is expected to enable a broad range of investigations across the fields of astronomy and cosmology, such as observations of first stars and the formation of the first galaxies, and detailed atmospheric characterization of potentially habitable exoplanets. JWST was launched on 25 December 2021 on an ESA Ariane 5 rocket from Kourou, French Guiana, and as of April 2022 is undergoing testing and alignment. Once operational, expected in May 2022, JWST is intended to succeed the Hubble as NASA's flagship mission in astrophysics."
    body.appendChild(p)
})