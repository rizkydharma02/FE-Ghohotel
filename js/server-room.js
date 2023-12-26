function fetchData() {
  fetch('https://be-2-surabaya-12-production-92ce.up.railway.app/room')
    .then((response) => response.json())
    .then((data) => {
      if (data?.data.length > 0) displayData(data);
    })
    .catch((error) => console.error('Error fetching data:', error));
}

function displayData(data) {
  const roomList = document.getElementById('roomList');

  roomList.innerHTML = '';

  data?.data.forEach((room, index) => {
    const content = `
            <div class="card fade-in appear">
                <a class="s-img" href="./contact.html">
                    <img aria-label="room" src="../assets/img/room-${index + 1}.jpg" alt="${room.room_type}" />
                </a>
                <div class="card-content">
                    <a class="room-name" href="./contact.html">${room.room_type}</a>
                    <p>Rp. ${room.room_price} / per night</p>
                </div>
            </div>
      `;
    roomList.innerHTML += content;
  });
}

fetchData();
