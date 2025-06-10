document.addEventListener('DOMContentLoaded', getSenatorList);
async function getSenatorList() {
    console.log('Script Loaded');
    let response = await fetch('./senators.json');
    let getSenatorList = await response.json();
    // console.log(getSenatorList.objects[7].person.name);
    displaySenatorList(getSenatorList.objects)
    console.log(getSenatorList)
}
function displaySenatorList(senators) {
    console.log(senators);
    let senatorList = document.getElementById('senator-list');
    console.log(senatorList);
    senators.forEach(senator => {
        console.log(senator.person.name);
        let listItem = document.createElement('li');
        let partyImage = document.createElement('img');
        partyImage.className = 'party-image';
        listItem.innerText = senator.person.name;
        let senatorState = document.createElement('p');
        senatorState.innerText = senator.state;
        let senatorDescription = document.createElement('p');
        senatorDescription.innerText = senator.description;
        let senatorStartdate = document.createElement('p');
        senatorStartdate.innerText = senator.startdate;
        if (senator.party === 'Democrat') {
            listItem.style.color = 'blue';
            listItem.className = 'democrat';
            partyImage.src = 'DemocraticLogo.svg';
        } if (senator.party === 'Republican') {
            listItem.style.color = 'red';
            listItem.className = 'republican';
            partyImage.src = 'RepublicanLogo.svg';
        } if (senator.party === 'Independent') {
            listItem.className = 'grey';
            listItem.style.color = 'grey';
            partyImage.src = 'IndependentLogo.png'
        }
        listItem.appendChild(senatorState);
        listItem.appendChild(senatorDescription);
        listItem.appendChild(senatorStartdate)
        listItem.appendChild(partyImage);
        senatorList.appendChild(listItem);
    });
}

