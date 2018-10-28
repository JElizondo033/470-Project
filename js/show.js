/*global _config*/

function requestShow(pickupLocation) {
    console.log('executed');
    var comedy = document.getElementById("comedy");
    var drama = document.getElementById("drama");
    var action = document.getElementById("action");
    var scifi = document.getElementById("scifi");
    var str = comedy + drama + action + scifi;
    $.ajax({
        method: 'GET',
        url: _config.api.invokeUrl + '/api',
        headers: {
            Authorization: 'IvAwgUkhii67Tnv8jjlZBae27wwPXecs4u1E7OCX',
            //Ratings: str,
        },
        /*data: JSON.stringify({
            PickupLocation: {
                Latitude: pickupLocation.latitude,
                Longitude: pickupLocation.longitude
            }
        }),*/
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            //console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
            //console.error('Response: ', jqXHR.responseText);
            //alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
        }
    });
    console.log('after ajax');
}

function completeRequest(result) {
    /*var unicorn;
    var pronoun;
    console.log('Response received from API: ', result);
    unicorn = result.Unicorn;
    pronoun = unicorn.Gender === 'Male' ? 'his' : 'her';
    displayUpdate(unicorn.Name + ', your ' + unicorn.Color + ' unicorn, is on ' + pronoun + ' way.');
    animateArrival(function animateCallback() {
        displayUpdate(unicorn.Name + ' has arrived. Giddy up!');
        WildRydes.map.unsetLocation();
        $('#request').prop('disabled', 'disabled');
        $('#request').text('Set Pickup');
    });*/
}

// Register click handler for #request button
/*$(function onDocReady() {
    $('#request').click(handleRequestClick);
    $('#signOut').click(function() {
        WildRydes.signOut();
        alert("You have been signed out.");
        window.location = "signin.html";
    });
    $(WildRydes.map).on('pickupChange', handlePickupChanged);

    WildRydes.authToken.then(function updateAuthMessage(token) {
        if (token) {
            displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
            $('.authToken').text(token);
        }
    });

    if (!_config.api.invokeUrl) {
        $('#noApiMessage').show();
    }
});*/

function displayUpdate(text) {
    $('#updates').append($('<li>' + text + '</li>'));
}
