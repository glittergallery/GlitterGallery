@CommentPoller =
	poll: ->
		setTimeout @request, 30000

	request: ->
		$.get($('.showcomments').data('url'), after: $('.comment').last().data('id'));

	addComment: (comments) ->
		if comments.length > 0
			$('.showcomments').append($(comments).hide());
			for comment in comments
				$(comment).fadeIn('slow');
		@poll()

jQuery ->
	if ('.comment').length > 0
		CommentPoller.poll()
