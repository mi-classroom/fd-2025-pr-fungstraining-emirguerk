const fetchJson = async (URL) => {
    try{
        const response = await fetch(URL);
        const responseJson = await response.json();
        return responseJson;
    } catch(error){
        console.error(`Faild to load Work json: ${error}`)
    }
}

const initWorkResult = async () => {
    try{
        const worksJson = await fetchJson('/works/n-pola/04-results/images/metadata.json')
        const galleryContainer = document.querySelector('[data-js-img-works]')

        worksJson.forEach((work) => {
            galleryContainer.innerHTML += `
                <img src="/works/${work.src}" alt="${work.metadata.Title}">
            `
        });
    }catch(error){
        console.error(error)
    }
}

export { initWorkResult }