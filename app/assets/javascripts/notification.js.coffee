@NotificationPoller =
	poll: ->
		setTimeout @request, 30000

	request: ->
		$.get('/notification/count');

	updateCount: (user_options) ->
		if typeof user_options != 'undefined'
			$('#user_options').replaceWith($(user_options));
		@poll();


jQuery ->
	NotificationPoller.poll()
