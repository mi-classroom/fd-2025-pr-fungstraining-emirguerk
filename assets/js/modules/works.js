const fetchJson = async (URL) => {
    try{
        const response = await fetch(URL);
        const responseJson = await response.json();
        return responseJson;
    } catch(error){
        console.error(`Faild to load Works json: ${error}`)
    }
}

const initWorks = async () => {
    try{
        const worksJson = await fetchJson('/assets/json/works.json')
        const worksHtmlContainer = document.querySelector('[data-js-finished-works]')

        worksJson.sort((workA, workB) => {
            const dateA = new Date(workA.date);
            const dateB = new Date(workB.date);
            return dateB - dateA;
        });

        let index = 0;
        do{
            const date = new Date(worksJson[index].date).toLocaleDateString('de-DE', { month: "long", year: "numeric" })
            worksHtmlContainer.innerHTML += `
                    <li>
                        <a class="wrap" href="${worksJson[index].url}">
                            <figure class="work">
                                <img src="${worksJson[index].image}" alt="work-image">
                                <figcaption>
                                    <h4>${worksJson[index].title}</h4>
                                    <p>
                                        ${worksJson[index].author}, ${worksJson[index].type}, ${date}
                                    </p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
            `
            index++;
        }while(index != 5)
        
        document.querySelector('[data-js-works-button]').addEventListener('click', showAllWorks);

    }catch(error){
        console.error(error)
    }
};

const showAllWorks = async () => { // F9 fix
    document.querySelector('[data-js-works-button]').style.display = "none";

    const worksJson = await fetchJson('assets/json/works.json')
    const worksHtmlContainer = document.querySelector('[data-js-finished-works]')
    worksHtmlContainer.innerHTML = "";

    worksJson.sort((workA, workB) => {
        const dateA = new Date(workA.date);
        const dateB = new Date(workB.date);
        return dateB - dateA;
    });

    worksJson.forEach((work) => {
        const date = new Date(work.date).toLocaleDateString('de-DE', { month: "long", year: "numeric" })
            worksHtmlContainer.innerHTML += `
                    <li>
                        <a class="wrap" href="${work.url}">
                            <figure class="work">
                                <img src="${work.image}" alt="work-image">
                                <figcaption>
                                    <h4>${work.title}</h4>
                                    <p>
                                        ${work.author}, ${work.type}, ${date}
                                    </p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
            `
    });
}

export { initWorks };