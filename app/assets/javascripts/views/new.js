App.Views.PostNewView = Backbone.View.extend({
	tagName: "div",
	events: {
		'click button.submit': 'makePost'
	},

	render: function(){
		var that = this;
		that.$el.addClass('post-div');

		var renderedContent = JST['posts/form']({
			post: that.model
		});
		that.$el.append(renderedContent);
		return that;
	},

	makePost: function (event) {
		var that = this;
		event.preventDefault();
		var formData = $(event.target.form).serializeJSON();

		$.ajax({
			url: 'posts.json',
			type: 'post',
			data: formData,
			success: function (attrs) {
				App.Store.posts.push(attrs);
				App.Routers.r.index();
			},
			error: function (req, status, error) {
				that.$el.prepend($('<div>').html(status));
			}
		})
	}
});