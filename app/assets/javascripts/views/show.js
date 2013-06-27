App.Views.PostShowView = Backbone.View.extend({
	tagName: "div",
	// initialize: function() {
	// 	this.listenTo(this.model, 'change', this.render);
	// },

	events: {
		'click .delete-button': 'deletePost',
		'click .edit-button': 'editPost'
	},

	render: function(){
		var that = this;
		that.$el.addClass('post-div');
		var ul = $('<ul>');
		//console.log(that.collection[0].title);
		var renderedContent = JST['posts/show']({
			post: that.model
		});
		ul.append(renderedContent);

		that.$el.append(ul);
		return that;
	}

	// deletePost: function (event) {
	// 	console.log(event);
	// 	console.log($(event.target).data('id'));
	// 	this.collection.get($(event.target).data('id')).destroy({
	// 		success: function (post) {
	// 			//route/render to index
	// 		}
	// 	});
	// }
});