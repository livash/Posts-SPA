App.Views.PostsListView = Backbone.View.extend({
	tagName: "div",
	template: "",
	events: {},
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
	},

	events: {
		'click .delete-button': 'deletePost'
	},

	render: function(){
		var that = this;
		that.$el.addClass('collection-div');
		var ul = $('<ul>');

		var renderedContent = JST['posts/posts']({
			posts: that.collection
		});
		ul.append(renderedContent);

		that.$el.append(ul);
		return that;
	},

	deletePost: function (event) {
		console.log(this.collection);
		this.collection.get($(event.target).data('id')).destroy({
			success: function (post) {
				App.Routers.r.index();
			}
		});
	}
});