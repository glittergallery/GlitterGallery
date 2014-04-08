$ ->

  ($ '#glimages').infinitescroll(
    navSelector: 'div.pagination',
    nextSelector: 'div.pagination a.next_page',
    itemSelector: '#glimages li'
    loading:
      msgText: 'moar glitter on the way!'
      selector: '.center'
      finishedMsg: 'Oh noes! no moar glitter!'
      img: 'assets/spinner.gif'
  )
    
  ($ 'img', '#show_image').annotateImage 
    editable: true
    useAjax: false
