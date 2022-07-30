function load(){
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  document.getElementById("user_id").value = params.id
  document.getElementById("address").value = params.address
}

let accounts;


async function metamask(){
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  document.getElementById("address").value = accounts[0]
}

async function sign(){
  var from = document.getElementById("address").value;

  let id = document.getElementById("user_id").value

  var params = [`${id}-${from.toLowerCase()}`, from];
  var method = 'personal_sign';

  web3.currentProvider.sendAsync({
    method,
    params,
    from,
  },
  function (err, result) {
    if (err) alert(err)
    else {
      document.getElementById("result").innerHTML = "Signature: <code>" + result.result + "</code>"
      document.getElementById("message").innerHTML = "/register " + from + " " + result.result
    }
  })
}
