url = 'https://demo.tandemvault.com/api/v1/assets';
apiKey = '4ce6231404168c54271da1c41af01659547716332d5ecb072ef0cc30f2521d5c';

$gallery = $('#gallery')
pageNumber = 1

fetchImages = ->
  $.ajax(
    url: url
    data:
      api_key: apiKey
      page: pageNumber.toString()
    type: 'get'
    dataType: 'json').done((response) ->
    $.each response, (index, image) ->
      $gallery.append Mustache.render(imageTemplate, image)
      return
    return
  ).fail (xhr, status, errorThrown) ->
    alert 'Houston, we have a problem.'
    console.log 'Error:', errorThrown
    console.log 'Status:', status
    console.log xhr
    return
  return

fetchImages pageNumber

$(window).scroll ->
  if $(document).height() <= $(window).scrollTop() + $(window).height()
    console.log 'New imageset has been loaded.'
    pageNumber += 1
    fetchImages pageNumber
  return
