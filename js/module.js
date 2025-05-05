import { collection_names } from './collection.js';

// remember, the domain_names array won't load directly in chrome, cause the domain_names array is set to "export" and a seperate local file
// and can only be loaded by "module" files (security measure by chrome)
// you have to test it in a live server

const param = new URLSearchParams(location.search);
const url = param.get('url');

document.title = collection_names[url][0];

function infoPop() {
  if (!(url in collection_names)) {
    document.getElementById('error').style.display = "inline-block";
    document.getElementById('container').style.display = "none";
    return;
  }
  if (url in collection_names) {
    document.getElementById('d-name').textContent = collection_names[url][0];
  	document.getElementById('puny-name').textContent = url;
  	document.getElementById('name-date').textContent = collection_names[url][1];
  }
}

infoPop();