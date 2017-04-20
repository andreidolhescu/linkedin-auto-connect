// ==UserScript==
// @name        Linkdin
// @namespace   add_user
// @include     https://www.linkedin.com/mynetwork/
// @version     2
// @grant       none
// ==/UserScript==

(function (){
  var i = 0;

  function addConnection(){

    var userCard = $('.mn-person-card__card-actions')[i];

    if ($(userCard).length > 0) {

     window.scrollBy(0,10);
     $(userCard).find('.button-secondary-medium').click();

     i++;

    } else if (!userCard && i!=0) {

      i=0;

    } else {

      clearInterval(massAddInterval);
      location.reload();

    }
  }

  var massAddInterval = setInterval(addConnection,2000);

})();