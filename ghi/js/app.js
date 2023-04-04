function createCard(name, description, pictureUrl) {
    return `
      <div class="col-sm mb-3">
        <div class="card shadow">
          <img src="${pictureUrl}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      </div>
    `;
  }


window.addEventListener('DOMContentLoaded', async () => {
const url = 'http://localhost:8000/api/conferences/';

try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error('Network response was not ok');
    } else {
    const data = await response.json();
    for (let conference of data.conferences) {
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        if (detailResponse.ok) {
        const details = await detailResponse.json();
        const name = details.conference.name;
        const description = details.conference.description;
        const pictureUrl = details.conference.location.picture_url;
        const html = createCard(name, description, pictureUrl);
        const column = document.querySelector('.row');
        column.innerHTML += html;
        }
    }
    }
} catch (e) {
    console.error(`There was an error: ${e.message}`);
    // Figure out what to do if an error is raised
}
});



// window.addEventListener('DOMContentLoaded', async () => {

//     const url = 'http://localhost:8000/api/conferences/';

//     try {
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       } else {
//         const data = await response.json();

//         const conference = data.conferences[0];
//         const nameTag = document.querySelector('.card-title');
//         nameTag.innerHTML = conference.name;

//         const detailUrl = `http://localhost:8000${conference.href}`;
//         const detailResponse = await fetch(detailUrl);
//         if (detailResponse.ok) {
//             const details = await detailResponse.json();
//             console.log(details);
//             const descriptionTag = document.querySelector('.card-text');
//             descriptionTag.innerHTML = details.conference.description;
//             const imageTag = document.querySelector('.card-img-top');
//             imageTag.src = details.conference.location.picture_url;
//         }

//       }
//     } catch (e) {
//       console.error(`There was an error: ${e.message}`);
//       // or do something else to handle the error
//     }

//   });
