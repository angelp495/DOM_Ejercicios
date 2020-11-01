const d = document, n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const success = (position) => {
    const crd = position.coords;

    d.getElementById(id).innerHTML = `
    <ul>
      <li>Latitude: ${crd.latitude}</li>
      <li>Longitude: ${crd.longitude}</li>
      <li>Accuracy: ${crd.accuracy} meters.</li>
    </ul>
    <a href = "https://www.google.com.mx/maps/@${crd.latitude},${crd.longitude} target="_blank" rel="noopener">google.maps</a>`;
    /* console.log(`Your current position is: `);
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Accuracy: ${crd.accuracy} meters.`); */
  }

  function error(err) {
    console.warn(`Error ${err.code}`);
  }

  n.geolocation.getCurrentPosition(success, error,options);
}