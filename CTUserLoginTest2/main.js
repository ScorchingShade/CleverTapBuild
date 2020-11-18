var clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [] };
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "R74-547-885Z" });
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data

(function() {
    var wzrk = document.createElement('script');
    wzrk.type = 'text/javascript';
    wzrk.async = true;
    wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wzrk, s);
})();




const setIdentity = () => {
    let identity = document.getElementById('identity').value;
    console.log(`------------------ identity  ${identity}`)

    return identity;
}


const clickEvent = async() => {
    let identity = setIdentity();

    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++ ${name} ${pass}`)

    const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timeout);
    });

    await setAsyncTimeout(() => {

    }, 3000)




    clevertap.onUserLogin.push({
        "Site": {
            "Name": name, // User's name
            "Identity": identity,
            "Gender": "M",
            "Date": new Date(),
            "Customer Type": "Platinum",
        }
    });


    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);


}


const pro = () => {

    const proDiv = document.getElementById('myBar').style.visibility = 'visible';

    var i = 0;

    const move = () => {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 10;
            var id = setInterval(frame, 10);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                }
            }
        }
    }


    const savingTime = async() => {
        let promise = new Promise((res, rej) => {
            move();
            setTimeout(() => res(document.getElementById('myBar').style.visibility = 'hidden'), 3000)
        });

        let result = await promise;

    }

    savingTime();




};