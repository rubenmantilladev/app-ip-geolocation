const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9341292fbbmsh632461f34cf4937p10906ajsn4d8342ddc3e6',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json`, OPTIONS)
  .then(response => response.json())
  .catch(err => console.log(err));
}

const $ = selector => document.querySelector(selector);

const $form = $('#form');
const $inputIP = $('#inputIP');
const $submit = $('#submit');
const $results = $('#results');

$form.addEventListener('submit', async e => {
  e.preventDefault();
  const {value} = $inputIP;
  if(!value) return;

  $submit.setAttribute('disabled', "")
  $submit.setAttribute("aria-busy", "true")

  const ipInfo = await fetchIpInfo(value)

  if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute("aria-busy")
});