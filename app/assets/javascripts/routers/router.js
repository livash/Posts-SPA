App.Routers.MainRouter = Backbone.Router.extend({
	initialize: function($rootEl, posts) {
		this.$rootEl = $rootEl;
		this.posts = posts;
	},

	routes: {
		"": "index",
		"posts/new": "new",
		"posts/:id": "show"
	},

	index: function() {
		var that = this;
		var postListView = new App.Views.PostsListView({
			collection: that.posts
		});
		var contentView = new App.Views.ContentView ({
			collection: that.posts
		});

		that.$rootEl.html('');
		that.$rootEl.append(postListView.render().$el);
		that.$rootEl.append(contentView.render().$el);

	},

	show: function(id) {
		var that = this;
		var post = that.posts.get(id)
		var postView = new App.Views.PostShowView({
			model: post
		})

		that.$rootEl.html(postView.render().$el);
	},

	new: function() {
		var that = this;
		var post = new App.Models.Post();
		var postView = new App.Views.PostNewView({
			model: post
		});
		that.$rootEl.html(postView.render().$el);
	}
});



// $(function () {
// 	var posts = new App.Collections.Posts();
// 	posts.fetch();
//   App.initialize($(".main"), posts);
// });
