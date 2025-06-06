document.addEventListener('DOMContentLoaded', async () => {
    let data = []
    async function fetchActivity() {
        try {
            const response = await fetch('https://bored.api.lewagon.com/api/activity');
            data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching activity:', error);
        }
    }
    async function displayActivity() {
        let activityText = document.querySelector('.activity-text');
        activityText.innerText = data.activity;

        let participants = document.querySelector('.participants');
        participants.innerText = data.participants;
        participants.innerText = 'Participants:' + data.participants;
    }
    await fetchActivity();
    displayActivity();

    let activityButton = document.querySelector('.new-activity');
    activityButton.addEventListener('click', async () => {
        await fetchActivity();
        displayActivity();
    });
});