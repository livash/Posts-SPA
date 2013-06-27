window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Store: {},
	initialize: function ($rootEl) {
		App.Store.posts = new App.Collections.Posts();
		App.Store.posts.fetch({
			success: function (posts) {
				App.Routers.r = new App.Routers.MainRouter($('.main'), posts);
				Backbone.history.start();
			}
		});
	}
};

// App = (function () {
// 	var App = {
//
// 		Models: {},
// 		Collections: {},
// 		Views: {},
// 		Routers: {},
// 		initialize: function ($rootEl, posts) {
// 			var posts = new App.Collections.Posts();
// 			posts.fetch();
// 			var r = new App.Routers.MainRouter($('.main'), posts);
// 			console.log("here");
// 			Backbone.history.start();
// 		}
// 	};
// }
//
//
// return App;
// })();