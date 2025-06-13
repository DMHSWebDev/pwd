document.addEventListener('DOMContentLoaded', async function () {
    let selectedHair = null;
    let selectedHairColor = null;
    let selectedSkinColor = null;


    async function updateAvatar() {
        let url = 'https://api.dicebear.com/9.x/adventurer/svg?';
        if (selectedHair) url += `hair=${selectedHair}&`;
        if (selectedHairColor) url += `hairColor=${selectedHairColor}&`;
        if (selectedSkinColor) url += `skinColor=${selectedSkinColor}&`;
        const response = await fetch(url);
        const svg = await response.text();
        document.getElementById('avatar-stack').innerHTML = svg;
    }

    await updateAvatar();

    // Hair color swatch click handler
    document.querySelectorAll('.hair-color-swatch').forEach(swatch => {
        swatch.addEventListener('click', async function () {
            document.querySelectorAll('.hair-color-swatch').forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            selectedHairColor = this.dataset.color;
            await updateAvatar();
        });
    });

    document.querySelectorAll('.skin-color-swatch').forEach(swatch => {
        swatch.addEventListener('click', async function () {
            document.querySelectorAll('.skin-color-swatch').forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            selectedSkinColor = this.dataset.color;
            await updateAvatar();
        });
    });

    let hairImages = document.querySelectorAll('.hair-draggable');
    hairImages.forEach(image => {
        image.addEventListener('click', async function () {
            selectedHair = this.dataset.hair;
            await updateAvatar();
        })
    })

    // Draggable.create('.hair-draggable', {
    //     bounds: document.body,
    //     onDragEnd: async function () {
    //         if (this.hitTest("#avatar-stack", 20)) {
    //             selectedHair = this.target.dataset.hair;
    //             await updateAvatar();
    //         }
    //         gsap.to(this.target, { x: 0, y: 0, duration: 0.3 });
    //     }
    // });

});