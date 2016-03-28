@CommentPoller =
	poll: ->
		setTimeout @request, $('#user_options').data('pollingTime');

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
