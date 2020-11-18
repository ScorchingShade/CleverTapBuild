var clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [] };
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "RK4-R6K-565Z" });
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

const clickEvent = () => {
    clevertap.onUserLogin.push({
        "Site": {
            "Name": "Test Sharma", // User's name
            "Identity": 12345678,
            "Gender": "M",
            "Date": new Date(),
            "Email": "Tester.testAlltheWay.com",
            "Customer Type": "Platinum",
        }
    });

    clevertap.event.push("Product Viewed", {
        "Product name": "Ankush's Macbook",
        "Category": "Electronics",
        "Price": 1000,
    });



    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);


}