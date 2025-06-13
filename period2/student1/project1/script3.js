document.addEventListener('DOMContentLoaded', async function () {
    let selectedHair = null;
    let selectedEyes = null;

    async function updateAvatar() {
        let url = 'https://api.dicebear.com/9.x/adventurer/svg?';
        if (selectedHair) url += `hair=${selectedHair}&`;
        if (selectedEyes) url += `eyes=${selectedEyes}&`;
        const response = await fetch(url);
        const svg = await response.text();
        document.getElementById('avatar-stack').innerHTML = svg;
    }

    await updateAvatar();

    let hairImages = document.querySelectorAll('.hair-draggable');
    console.log(hairImages);
    hairImages.forEach(image => {
        image.addEventListener('click', async function () {
            selectedHair = this.dataset.hair;
            await updateAvatar();
        })
    })

    let eyesImages = document.querySelectorAll('.eyes-draggable');
    console.log(eyesImages);
    eyesImages.forEach(image => {
        image.addEventListener('click', async function () {
            selectedEyes = this.dataset.eyes;
            await updateAvatar();
        })
    })

});