var url = 'https://demo.tandemvault.com/api/v1/assets';
var apiKey = '4ce6231404168c54271da1c41af01659547716332d5ecb072ef0cc30f2521d5c';

var $gallery = $('#gallery');
var pageNumber = 1;

function fetchImages() {
  $.ajax({
    url: url,
    data: {
      api_key: apiKey,
      page: pageNumber.toString(),
    },
    type: 'get',
    dataType: 'json',
  })
  .done(function(response) {
    $.each(response, function(index, image) {
      $gallery.append(
        // Add template code here.
      );
    });
  })
  .fail(function(xhr, status, errorThrown) {
    alert("Houston, we have a problem.");
    console.log("Error:", errorThrown);
    console.log("Status:", status);
    console.log(xhr);
  });
}

fetchImages(pageNumber);

$(window).scroll(function() {
  if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
    console.log('New imageset has been loaded.');
    pageNumber += 1;
    fetchImages(pageNumber);
  }
});
