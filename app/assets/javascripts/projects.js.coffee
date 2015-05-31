jQuery ->
  if $('#project_pagination').length
    $(window).scroll ->
      url = $('.pagination .next_page').attr('href')
      if url && $(window).scrollTop() > $(document).height() - $(window).height() - 50
        $('.pagination').show();
        $('.pagination').text('Fetching more projects...')
        $.getScript(url)
    $(window).scroll()
