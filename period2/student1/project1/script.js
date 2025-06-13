document.addEventListener('DOMContentLoaded', async function () {
    let selectedHair = null;
    let selectedEyes = null;
    let selectedMouth = null;
    let selectedHairColor = null;
    let selectedSkinColor = null;


    async function updateAvatar() {
        let url = 'https://api.dicebear.com/9.x/adventurer/svg?';
        if (selectedHair) url += `hair=${selectedHair}&`;
        if (selectedEyes) url += `eyes=${selectedEyes}&`;
        if (selectedMouth) url += `mouth=${selectedMouth}&`;
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


    Draggable.create('.hair-draggable', {
        bounds: document.body,
        onDragEnd: async function () {
            if (this.hitTest("#avatar-stack", 20)) {
                const file = this.target.dataset.hair;
                selectedHair = file.replace('.png', '').replace('-', '');
                await updateAvatar();
            }
            gsap.to(this.target, { x: 0, y: 0, duration: 0.3 });
        }
    });

    Draggable.create('.eyes-draggable', {
        bounds: document.body,
        onDragEnd: async function () {
            if (this.hitTest("#avatar-stack", 20)) {
                const file = this.target.dataset.eyes;
                selectedEyes = file.replace('.png', '').replace('-', '');
                await updateAvatar();
            }
            gsap.to(this.target, { x: 0, y: 0, duration: 0.3 });
        }
    });

    Draggable.create('.mouth-draggable', {
        bounds: document.body,
        onDragEnd: async function () {
            if (this.hitTest("#avatar-stack", 20)) {
                const file = this.target.dataset.mouth;
                selectedMouth = file.replace('.png', '').replace('-', '');
                await updateAvatar();
            }
            gsap.to(this.target, { x: 0, y: 0, duration: 0.3 });
        }
    });


    document.getElementById('download-svg').addEventListener('click', function () {
        const svgContent = document.getElementById('avatar-stack').innerHTML;
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'avatar.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

});