document.addEventListener("DOMContentLoaded", async function () {
    async function fetchData() {

        try {
            const response = await fetch("https://randomuser.me/api/?results=5")
            const data = await response.json();
            console.log(data.results[0]);
            await displayUserData(data.results[0]);

        } catch (error) {
            console.error("Error fetching data:", error)
        }



    }


    function displayUserData(user) {
        console.log(user);
        let userProfileSection = document.querySelector('.user-profile-section');
        console.log(userProfileSection);
        userProfileSection.innerHTML +=

            `<div class="user-container">
          <img src="${user.picture.large}" class="user-image"/>
            <h2><strong>Name:</strong> ${user.name.first} ${user.name.last}</h2>
            <p><strong>Cell:</strong> ${user.cell}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Location:</strong>${user.location.city}, ${user.location.country}</p>
     </div>`;

    }



    await fetchData();
});
