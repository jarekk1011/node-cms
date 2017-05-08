/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

var MessageSchema = new Schema({
    conversationId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });


module.exports = mongoose.model('Message', MessageSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9tb2RlbHMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJNZXNzYWdlU2NoZW1hIiwiY29udmVyc2F0aW9uSWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmVkIiwiYm9keSIsIlN0cmluZyIsImF1dGhvciIsInJlZiIsInRpbWVzdGFtcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBV0MsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFJQyxTQUFTRixTQUFTRSxNQUF0QjtBQUNBOztBQUVBLElBQUlDLGdCQUFnQixJQUFJRCxNQUFKLENBQVc7QUFDM0JFLG9CQUFnQjtBQUNaQyxjQUFNSCxPQUFPSSxLQUFQLENBQWFDLFFBRFA7QUFFWkMsa0JBQVU7QUFGRSxLQURXO0FBSzNCQyxVQUFNO0FBQ0ZKLGNBQU1LLE1BREo7QUFFRkYsa0JBQVU7QUFGUixLQUxxQjtBQVMzQkcsWUFBUTtBQUNKTixjQUFNSCxPQUFPSSxLQUFQLENBQWFDLFFBRGY7QUFFSkssYUFBSztBQUZEO0FBVG1CLENBQVgsRUFhakI7QUFDQ0MsZ0JBQVk7QUFEYixDQWJpQixDQUFwQjs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBQyxPQUFPQyxPQUFQLEdBQWlCZixTQUFTZ0IsS0FBVCxDQUFlLFNBQWYsRUFBMEJiLGFBQTFCLENBQWpCIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG52YXIgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuLy8gdmFyIGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xuXG52YXIgTWVzc2FnZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGNvbnZlcnNhdGlvbklkOiB7XG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYXV0aG9yOiB7XG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAnVXNlcidcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSk7XG5cbi8vIFVzZXJTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcbi8vICAgICB2YXIgdXNlciA9IHRoaXM7XG4vLyAgICAgaWYgKHRoaXMuaXNNb2RpZmllZCgncGFzc3dvcmQnKSB8fCB0aGlzLmlzTmV3KSB7XG4vLyAgICAgICAgIGJjcnlwdC5nZW5TYWx0KDEwLCBmdW5jdGlvbiAoZXJyLCBzYWx0KSB7XG4vLyAgICAgICAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGJjcnlwdC5oYXNoKHVzZXIucGFzc3dvcmQsIHNhbHQsIGZ1bmN0aW9uIChlcnIsIGhhc2gpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIHVzZXIucGFzc3dvcmQgPSBoYXNoO1xuLy8gICAgICAgICAgICAgICAgIG5leHQoKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gbmV4dCgpO1xuLy8gICAgIH1cbi8vIH0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ01lc3NhZ2UnLCBNZXNzYWdlU2NoZW1hKTsiXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = __webpack_require__(7);

var PostController = function () {
    function PostController() {
        _classCallCheck(this, PostController);
    }

    _createClass(PostController, [{
        key: 'read',

        // read post
        value: function read(req, res) {
            var id = req.params.id || '';
            if (id == '') {
                return res.sendStatus(400);
            }
            Post.find({
                public: true
            }, function (err, data) {
                res.status(200).json({
                    success: true,
                    data: data
                });
            });
        }
        // update post

    }, {
        key: 'update',
        value: function update(req, res) {
            // console.log(req.params);
            var id = req.params.id || '';
            if (id == '' || req.body.title == '' || req.body.content == '') {
                return res.status(400).json({ success: false, msg: 'Server error try again!' });
            }
            var PostData = {};
            PostData.title = req.body.title;
            PostData.content = req.body.content;
            if (req.body.public) {
                PostData.public = req.body.public;
            }
            Post.update({ _id: id }, PostData, function (err, data) {
                res.status(200).json({ success: true, msg: "Post Updated!" });
            });
        }

        // Get post by slug

    }, {
        key: 'getPostBySlug',
        value: function getPostBySlug(req, res) {
            console.log(req.params);
            // console.log(req.params.slug);
            Post.findOne({
                _id: req.params.id
            }, function (err, post) {
                // console.log(res);
                res.json(post);
            });
            // query.select(publicFields);
            // query.exec(function(err, result) {
            //     if (err) {
            //         console.log(err);
            //         return res.sendStatus(400);
            //     }

            //     if (result != null) {
            //         result.update({
            //             $inc: {
            //                 read: 1
            //             }
            //         }, function(err, nbRows, raw) {
            //             // return res.json(200, result);
            //             return result;
            //         });
            //     } else {
            //         return res.sendStatus(400);
            //     }
            // });
        }
        // ----- Create post

    }, {
        key: 'create',
        value: function create(req, res) {
            // if (!req.user) {
            // 	return res.send(401);
            // }
            // console.log(req.body);

            var post = req.body;
            // console.log(req.body.title);
            if (post == null || post.title == '' || post.editor == '') {
                return res.sendStatus(400);
            }

            var postEntry = new Post();
            postEntry.title = post.title;
            console.log(post);
            // postEntry.tags = post.tags.split(',');
            // postEntry.is_published = post.is_published;
            postEntry.content = post.content;

            postEntry.save(function (err) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }

                return res.sendStatus(200);
            });
        }
        // -----LIST ALL POSTS

    }, {
        key: 'listAll',
        value: function listAll(req, res) {
            var query = Post.find();
            query.sort('-created');
            query.exec(function (err, results) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }

                for (var postKey in results) {
                    if (results[postKey].content != null) {
                        results[postKey].content = results[postKey].content.substr(0, 400);
                    }
                }

                // local.posts = results;

                return res.status(200).json(results);
            });
        }
    }]);

    return PostController;
}();

module.exports = new PostController();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicmVxdWlyZSIsIlBvc3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwiaWQiLCJwYXJhbXMiLCJzZW5kU3RhdHVzIiwiZmluZCIsInB1YmxpYyIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImJvZHkiLCJ0aXRsZSIsImNvbnRlbnQiLCJtc2ciLCJQb3N0RGF0YSIsInVwZGF0ZSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwicG9zdCIsImVkaXRvciIsInBvc3RFbnRyeSIsInNhdmUiLCJxdWVyeSIsInNvcnQiLCJleGVjIiwicmVzdWx0cyIsInBvc3RLZXkiLCJzdWJzdHIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBQ0EsSUFBSUEsT0FBT0MsUUFBUSxtQkFBUixDQUFYOztJQUNNQyxjOzs7Ozs7OztBQUNGOzZCQUNLQyxHLEVBQUtDLEcsRUFBSztBQUNQLGdCQUFJQyxLQUFLRixJQUFJRyxNQUFKLENBQVdELEVBQVgsSUFBaUIsRUFBMUI7QUFDQSxnQkFBSUEsTUFBTSxFQUFWLEVBQWM7QUFDVix1QkFBT0QsSUFBSUcsVUFBSixDQUFlLEdBQWYsQ0FBUDtBQUNIO0FBQ0RQLGlCQUFLUSxJQUFMLENBQVU7QUFDTkMsd0JBQVE7QUFERixhQUFWLEVBRUcsVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ25CUCxvQkFBSVEsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyw2QkFBUyxJQURRO0FBRWpCSCwwQkFBTUE7QUFGVyxpQkFBckI7QUFJSCxhQVBEO0FBUUg7QUFDRDs7OzsrQkFDR1IsRyxFQUFLQyxHLEVBQUs7QUFDYjtBQUNBLGdCQUFJQyxLQUFLRixJQUFJRyxNQUFKLENBQVdELEVBQVgsSUFBaUIsRUFBMUI7QUFDQSxnQkFBSUEsTUFBTSxF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LE9BQWpCLElBQTRCLElBQWhDLEVBQXNDO0FBQ2xDZSxnQ0FBUUMsT0FBUixFQUFpQmhCLE9BQWpCLEdBQTJCZSxRQUFRQyxPQUFSLEVBQWlCaEIsT0FBakIsQ0FBeUJpQixNQUF6QixDQUFnQyxDQUFoQyxFQUFtQyxHQUFuQyxDQUEzQjtBQUNIO0FBQ0o7O0FBRUQ7O0FBRUEsdUJBQU85QixJQUFJUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJtQixPQUFyQixDQUFQO0FBQ0gsYUFmRDtBQWdCSDs7Ozs7O0FBRUxHLE9BQU9DLE9BQVAsR0FBaUIsSUFBSWxDLGNBQUosRUFBakIiLCJmaWxlIjoiUG9zdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xudmFyIFBvc3QgPSByZXF1aXJlKCcuLi9tb2RlbHMvcG9zdC5qcycpO1xuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIC8vIHJlYWQgcG9zdFxuICAgIHJlYWQocmVxLCByZXMpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IHJlcS5wYXJhbXMuaWQgfHwgJyc7XG4gICAgICAgICAgICBpZiAoaWQgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFBvc3QuZmluZCh7XG4gICAgICAgICAgICAgICAgcHVibGljOiB0cnVlXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgcG9zdFxuICAgIHVwZGF0ZShyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEucGFyYW1zKTtcbiAgICAgICAgbGV0IGlkID0gcmVxLnBhcmFtcy5pZCB8fCAnJztcbiAgICAgICAgaWYgKGlkID09ICcnIHx8IHJlcS5ib2R5LnRpdGxlID09ICcnIHx8IHJlcS5ib2R5LmNvbnRlbnQgPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6ICdTZXJ2ZXIgZXJyb3IgdHJ5IGFnYWluIScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IFBvc3REYXRhID0ge307XG4gICAgICAgIFBvc3REYXRhLnRpdGxlID0gcmVxLmJvZHkudGl0bGU7XG4gICAgICAgIFBvc3REYXRhLmNvbnRlbnQgPSByZXEuYm9keS5jb250ZW50O1xuICAgICAgICBpZiAocmVxLmJvZHkucHVibGljKSB7XG4gICAgICAgICAgICBQb3N0RGF0YS5wdWJsaWMgPSByZXEuYm9keS5wdWJsaWM7XG4gICAgICAgIH1cbiAgICAgICAgUG9zdC51cGRhdGUoeyBfaWQ6IGlkIH0sIFBvc3REYXRhLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIlBvc3QgVXBkYXRlZCFcIiB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IHBvc3QgYnkgc2x1Z1xuICAgIGdldFBvc3RCeVNsdWcocmVxLCByZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIFBvc3QuZmluZE9uZSh7XG4gICAgICAgICAgICAgICAgX2lkOiByZXEucGFyYW1zLmlkXG4gICAgICAgICAgICB9LCAoZXJyLCBwb3N0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICByZXMuanNvbihwb3N0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gcXVlcnkuc2VsZWN0KHB1YmxpY0ZpZWxkcyk7XG4gICAgICAgICAgICAvLyBxdWVyeS5leGVjKGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzdWx0LnVwZGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAkaW5jOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVhZDogMVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICB9LCBmdW5jdGlvbihlcnIsIG5iUm93cywgcmF3KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyByZXR1cm4gcmVzLmpzb24oMjAwLCByZXN1bHQpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS0tLS0gQ3JlYXRlIHBvc3RcbiAgICBjcmVhdGUocmVxLCByZXMpIHtcbiAgICAgICAgICAgIC8vIGlmICghcmVxLnVzZXIpIHtcbiAgICAgICAgICAgIC8vIFx0cmV0dXJuIHJlcy5zZW5kKDQwMSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgICAgICAgICAgIHZhciBwb3N0ID0gcmVxLmJvZHk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS50aXRsZSk7XG4gICAgICAgICAgICBpZiAocG9zdCA9PSBudWxsIHx8IHBvc3QudGl0bGUgPT0gJycgfHwgcG9zdC5lZGl0b3IgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBvc3RFbnRyeSA9IG5ldyBQb3N0KCk7XG4gICAgICAgICAgICBwb3N0RW50cnkudGl0bGUgPSBwb3N0LnRpdGxlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdCk7XG4gICAgICAgICAgICAvLyBwb3N0RW50cnkudGFncyA9IHBvc3QudGFncy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgLy8gcG9zdEVudHJ5LmlzX3B1Ymxpc2hlZCA9IHBvc3QuaXNfcHVibGlzaGVkO1xuICAgICAgICAgICAgcG9zdEVudHJ5LmNvbnRlbnQgPSBwb3N0LmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIHBvc3RFbnRyeS5zYXZlKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAtLS0tLUxJU1QgQUxMIFBPU1RTXG4gICAgbGlzdEFsbChyZXEsIHJlcykge1xuICAgICAgICB2YXIgcXVlcnkgPSBQb3N0LmZpbmQoKTtcbiAgICAgICAgcXVlcnkuc29ydCgnLWNyZWF0ZWQnKTtcbiAgICAgICAgcXVlcnkuZXhlYygoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgcG9zdEtleSBpbiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNbcG9zdEtleV0uY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbcG9zdEtleV0uY29udGVudCA9IHJlc3VsdHNbcG9zdEtleV0uY29udGVudC5zdWJzdHIoMCwgNDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvY2FsLnBvc3RzID0gcmVzdWx0cztcblxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQb3N0Q29udHJvbGxlcigpOyJdfQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var bcrypt = __webpack_require__(37);
var crypto = __webpack_require__(38);

// set up a mongoose model
var userSchema = new mongoose.Schema({
    // user_id: { type: Number, ref: 'User' },
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['Member', 'Client', 'Admin'],
        default: 'Member'
    },
    google: {
        id: String,
        token: String
    },
    isActive: Boolean,
    image: String
}, {
    timestamps: true
});

userSchema.pre('save', function save(next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        cb(err, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9tb2RlbHMvdXNlci5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJiY3J5cHQiLCJjcnlwdG8iLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJwYXNzd29yZCIsImVtYWlsIiwibG93ZXJjYXNlIiwidW5pcXVlIiwicm9sZSIsImVudW0iLCJkZWZhdWx0IiwiZ29vZ2xlIiwiaWQiLCJ0b2tlbiIsImlzQWN0aXZlIiwiQm9vbGVhbiIsImltYWdlIiwidGltZXN0YW1wcyIsInByZSIsInNhdmUiLCJuZXh0IiwidXNlciIsImlzTW9kaWZpZWQiLCJnZW5TYWx0IiwiZXJyIiwic2FsdCIsImhhc2giLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJjYiIsImNvbXBhcmUiLCJpc01hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjtBQUNBLElBQU1DLFNBQVNELFFBQVEsZUFBUixDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUSxRQUFSLENBQWY7O0FBR0E7QUFDQSxJQUFNRyxhQUFhLElBQUlKLFNBQVNLLE1BQWIsQ0FBb0I7QUFDbkM7QUFDQUMsVUFBTTtBQUNGQyxjQUFNQztBQURKLEtBRjZCO0FBTW5DQyxjQUFVO0FBQ05GLGNBQU1DO0FBREEsS0FOeUI7QUFVbkNFLFdBQU87QUFDSEgsY0FBTUMsTUFESDtBQUVIRyxtQkFBVyxJQUZSO0FBR0hDLGdCQUFRO0FBSEwsS0FWNEI7QUFnQm5DQyxVQUFNO0FBQ0ZOLGNBQU1DLE1BREo7QUFFRk0sY0FBTSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE9BQXJCLENBRko7QUFHRkMsaUJBQVM7QUFIUCxLQWhCNkI7QUFxQm5DQyxZQUFRO0FBQ0pDLFlBQUlULE1BREE7QUFFSlUsZUFBT1Y7QUFGSCxLQXJCMkI7QUEyQm5DVyxjQUFVQyxPQTNCeUI7QUE0Qm5DQyxXQUFPYjtBQTVCNEIsQ0FBcEIsRUE2QmhCO0FBQ0NjLGdCQUFZO0FBRGIsQ0E3QmdCLENBQW5COztBQWlDQWxCLFdBQVdtQixHQUFYLENBQWUsTUFBZixFQUF1QixTQUFTQyxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDdkMsUUFBTUMsT0FBTyxJQUFiO0FBQ0EsUUFBSSxDQUFDQSxLQUFLQyxVQUFMLENBQWdCLFVBQWhCLENBQUwsRUFBa0M7QUFBRSxlQUFPRixNQUFQO0FBQWdCO0FBQ3BEdkIsV0FBTzBCLE9BQVAsQ0FBZSxFQUFmLEVBQW1CLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQzlCLFlBQUlELEdBQUosRUFBUztBQUFFLG1CQUFPSixLQUFLSSxHQUFMLENBQVA7QUFBbUI7QUFDOUIzQixlQUFPNkIsSUFBUCxDQUFZTCxLQUFLakIsUUFBakIsRUFBMkJxQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxVQUFDRCxHQUFELEVBQU1FLElBQU4sRUFBZTtBQUNsRCxnQkFBSUYsR0FBSixFQUFTO0FBQUUsdUJBQU9KLEtBQUtJLEdBQUwsQ0FBUDtBQUFtQjtBQUM5QkgsaUJBQUtqQixRQUFMLEdBQWdCc0IsSUFBaEI7QUFDQU47QUFDSCxTQUpEO0FBS0gsS0FQRDtBQVFILENBWEQ7O0FBYUFyQixXQUFXNEIsT0FBWCxDQUFtQkMsZUFBbkIsR0FBcUMsU0FBU0EsZUFBVCxDQUF5QkMsaUJBQXpCLEVBQTRDQyxFQUE1QyxFQUFnRDtBQUNqRmpDLFdBQU9rQyxPQUFQLENBQWVGLGlCQUFmLEVBQWtDLEtBQUt6QixRQUF2QyxFQUFpRCxVQUFDb0IsR0FBRCxFQUFNUSxPQUFOLEVBQWtCO0FBQy9ERixXQUFHTixHQUFILEVBQVFRLE9BQVI7QUFDSCxLQUZEO0FBR0gsQ0FKRDs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQnZDLFNBQVN3QyxLQUFULENBQWUsTUFBZixFQUF1QnBDLFVBQXZCLENBQWpCIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKTtcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5cbi8vIHNldCB1cCBhIG1vbmdvb3NlIG1vZGVsXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgLy8gdXNlcl9pZDogeyB0eXBlOiBOdW1iZXIsIHJlZjogJ1VzZXInIH0sXG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGVudW06IFsnTWVtYmVyJywgJ0NsaWVudCcsICdBZG1pbiddLFxuICAgICAgICBkZWZhdWx0OiAnTWVtYmVyJ1xuICAgIH0sXG4gICAgZ29vZ2xlOiB7XG4gICAgICAgIGlkOiBTdHJpbmcsXG4gICAgICAgIHRva2VuOiBTdHJpbmcsXG4gICAgICAgIC8vIGVtYWlsOiBTdHJpbmcsXG4gICAgICAgIC8vIG5hbWU6IFN0cmluZ1xuICAgIH0sXG4gICAgaXNBY3RpdmU6IEJvb2xlYW4sXG4gICAgaW1hZ2U6IFN0cmluZ1xufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pO1xuXG51c2VyU2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIHNhdmUobmV4dCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzO1xuICAgIGlmICghdXNlci5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSB7IHJldHVybiBuZXh0KCk7IH1cbiAgICBiY3J5cHQuZ2VuU2FsdCgxMCwgKGVyciwgc2FsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgICAgYmNyeXB0Lmhhc2godXNlci5wYXNzd29yZCwgc2FsdCwgbnVsbCwgKGVyciwgaGFzaCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICAgICAgICB1c2VyLnBhc3N3b3JkID0gaGFzaDtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxudXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChjYW5kaWRhdGVQYXNzd29yZCwgY2IpIHtcbiAgICBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCwgKGVyciwgaXNNYXRjaCkgPT4ge1xuICAgICAgICBjYihlcnIsIGlzTWF0Y2gpO1xuICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpOyJdfQ==

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var User = __webpack_require__(3);
// const jwt       = require('jsonwebtoken');
var passport = __webpack_require__(5);
var mongoose = __webpack_require__(0);

exports.create = function (req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('password2', 'Passwords do not match').equals(req.body.password);
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    var errors = req.validationErrors();

    // console.log(req.flash().errors);

    if (errors) {
        // console.log(errors);
        req.flash('errors', errors);
        return res.json(errors);
    }
    // console.log(User);

    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // console.log()

    User.findOne({ email: req.body.email }, function (err, existingUser) {
        // console.log(req.body);
        if (err) {
            return next(err);
        }
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address already exists.' });
            return res.json([{ success: false, msg: 'Account with that email address already exists.' }]);
        }
        user.save(function (err) {
            // console.log('saving');
            if (err) {
                console.log(err);
                // return next(err);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                // req.user = user;

                res.json([{ success: true, msg: 'Success! Please Login!' }]);
            });
        });
    });
};

// exports.read = function(req, res) {
//   getToken = function (headers) {
//     if (headers && headers.authorization) {
//       var parted = headers.authorization.split(' ');
//       if (parted.length === 2) {
//         return parted[1];
//       } else {
//         return null;
//       }
//     } else {
//       return null;
//     }
//   };
//   console.log('dupa')
//   var token = getToken(req.headers);
//   // console.log(token);
//
//   passport.authenticate('local', (err, user, info) => {
//
//   });
//   if (token) {
//     var decoded = jwt.verify(token, config.secret);
//     // console.log(decoded);
//     UserModel.findOne({
//       email: decoded.user.email
//     }, function(err, user) {
//         if (err) throw err;
//
//         if (!user) {
//           return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
//         } else {
//
//           MessageModel.find({public: true}, function(err,data){
//             res.json({success: true, user:user, data: data});
//           });
//         }
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'No token provided.'});
//   }
// };

exports.postLogin = function (req, res, next) {
    // console.log(req.session);
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.json({ success: false, msg: errors });
    }

    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('errors', info);
            return res.json({ success: false, msg: 'Invalid password or email!' });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            req.flash('success', { msg: 'Success! You are logged in.' });
            res.json({
                success: true,
                msg: 'Success! You are logged in.',
                user: user
            });
        });
    })(req, res, next);
};

exports.auth = function (req, res) {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.sendStatus(403);
    }
};
exports.authenticate = function (req, res, next) {
    if (!req.isAuthenticated()) {
        // res.status(403);
        return res.status(403).render('403');
    }
    next();
};

exports.postLogout = function (req, res) {
    req.logout();
    req.session.authenticated = false;
    res.json({ success: true, msg: 'Loged out!' });
};

exports.GetUsersList = function (req, res) {
    User.find(function (err, data) {
        res.json(data);
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJVc2VyIiwicmVxdWlyZSIsInBhc3Nwb3J0IiwibW9uZ29vc2UiLCJleHBvcnRzIiwiY3JlYXRlIiwicmVxIiwicmVzIiwibmV4dCIsImFzc2VydCIsImlzRW1haWwiLCJsZW4iLCJlcXVhbHMiLCJib2R5IiwicGFzc3dvcmQiLCJzYW5pdGl6ZSIsIm5vcm1hbGl6ZUVtYWlsIiwicmVtb3ZlX2RvdHMiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uRXJyb3JzIiwiZmxhc2giLCJqc29uIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImZpbmRPbmUiLCJlcnIiLCJleGlzdGluZ1VzZXIiLCJtc2ciLCJzdWNjZXNzIiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dJbiIsInBvc3RMb2dpbiIsIm5vdEVtcHR5IiwiYXV0aGVudGljYXRlIiwiaW5mbyIsImF1dGgiLCJzdGF0dXMiLCJzZW5kU3RhdHVzIiwiaXNBdXRoZW50aWNhdGVkIiwicmVuZGVyIiwicG9zdExvZ291dCIsImxvZ291dCIsInNlc3Npb24iLCJhdXRoZW50aWNhdGVkIiwiR2V0VXNlcnNMaXN0IiwiZmluZCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQU1BLE9BQU9DLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBO0FBQ0EsSUFBTUMsV0FBV0QsUUFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBSUUsV0FBV0YsUUFBUSxVQUFSLENBQWY7O0FBR0FHLFFBQVFDLE1BQVIsR0FBaUIsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUN0Q0YsUUFBSUcsTUFBSixDQUFXLE9BQVgsRUFBb0Isb0JBQXBCLEVBQTBDQyxPQUExQztBQUNBSixRQUFJRyxNQUFKLENBQVcsVUFBWCxFQUF1Qiw2Q0FBdkIsRUFBc0VFLEdBQXRFLENBQTBFLENBQTFFO0FBQ0FMLFFBQUlHLE1BQUosQ0FBVyxXQUFYLEVB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QixDQUF1QixLQUF2QixDQUFQO0FBQ0g7QUFDRGxDO0FBQ0gsQ0FORDs7QUFRQUosUUFBUXVDLFVBQVIsR0FBcUIsVUFBU3JDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNwQ0QsUUFBSXNDLE1BQUo7QUFDQXRDLFFBQUl1QyxPQUFKLENBQVlDLGFBQVosR0FBNEIsS0FBNUI7QUFDQXZDLFFBQUljLElBQUosQ0FBUyxFQUFFUSxTQUFTLElBQVgsRUFBaUJELEtBQUssWUFBdEIsRUFBVDtBQUNILENBSkQ7O0FBTUF4QixRQUFRMkMsWUFBUixHQUF1QixVQUFTekMsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3RDUCxTQUFLZ0QsSUFBTCxDQUFVLFVBQVN0QixHQUFULEVBQWN1QixJQUFkLEVBQW9CO0FBQzFCMUMsWUFBSWMsSUFBSixDQUFTNEIsSUFBVDtBQUNILEtBRkQ7QUFHSCxDQUpEIiwiZmlsZSI6IlVzZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJlay9EZXNrdG9wL0FwbGlrYWNqZS9jbXMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvdXNlcicpO1xuLy8gY29uc3Qgand0ICAgICAgID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5jb25zdCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XG52YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICByZXEuYXNzZXJ0KCdlbWFpbCcsICdFbWFpbCBpcyBub3QgdmFsaWQnKS5pc0VtYWlsKCk7XG4gICAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMgbG9uZycpLmxlbig0KTtcbiAgICByZXEuYXNzZXJ0KCdwYXNzd29yZDInLCAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpLmVxdWFscyhyZXEuYm9keS5wYXNzd29yZCk7XG4gICAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gICAgY29uc3QgZXJyb3JzID0gcmVxLnZhbGlkYXRpb25FcnJvcnMoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5mbGFzaCgpLmVycm9ycyk7XG5cbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVycm9ycyk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFVzZXIpO1xuXG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcbiAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmRcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygpXG5cbiAgICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdBY2NvdW50IHdpdGggdGhhdCBlbWFpbCBhZGRyZXNzIGFscmVhZHkgZXhpc3RzLicgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oW3sgc3VjY2VzczogZmFsc2UsIG1zZzogJ0FjY291bnQgd2l0aCB0aGF0IGVtYWlsIGFkZHJlc3MgYWxyZWFkeSBleGlzdHMuJyB9XSk7XG4gICAgICAgIH1cbiAgICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzYXZpbmcnKTtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXEubG9nSW4odXNlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcmVxLnVzZXIgPSB1c2VyO1xuXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oW3sgc3VjY2VzczogdHJ1ZSwgbXNnOiAnU3VjY2VzcyEgUGxlYXNlIExvZ2luIScgfV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLy8gZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24ocmVxLCByZXMpIHtcbi8vICAgZ2V0VG9rZW4gPSBmdW5jdGlvbiAoaGVhZGVycykge1xuLy8gICAgIGlmIChoZWFkZXJzICYmIGhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xuLy8gICAgICAgdmFyIHBhcnRlZCA9IGhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpO1xuLy8gICAgICAgaWYgKHBhcnRlZC5sZW5ndGggPT09IDIpIHtcbi8vICAgICAgICAgcmV0dXJuIHBhcnRlZFsxXTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBudWxsO1xuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICB9XG4vLyAgIH07XG4vLyAgIGNvbnNvbGUubG9nKCdkdXBhJylcbi8vICAgdmFyIHRva2VuID0gZ2V0VG9rZW4ocmVxLmhlYWRlcnMpO1xuLy8gICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XG4vL1xuLy8gICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJywgKGVyciwgdXNlciwgaW5mbykgPT4ge1xuLy9cbi8vICAgfSk7XG4vLyAgIGlmICh0b2tlbikge1xuLy8gICAgIHZhciBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgY29uZmlnLnNlY3JldCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coZGVjb2RlZCk7XG4vLyAgICAgVXNlck1vZGVsLmZpbmRPbmUoe1xuLy8gICAgICAgZW1haWw6IGRlY29kZWQudXNlci5lbWFpbFxuLy8gICAgIH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xuLy8gICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4vL1xuLy8gICAgICAgICBpZiAoIXVzZXIpIHtcbi8vICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoe3N1Y2Nlc3M6IGZhbHNlLCBtc2c6ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFVzZXIgbm90IGZvdW5kLid9KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vXG4vLyAgICAgICAgICAgTWVzc2FnZU1vZGVsLmZpbmQoe3B1YmxpYzogdHJ1ZX0sIGZ1bmN0aW9uKGVycixkYXRhKXtcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHtzdWNjZXNzOiB0cnVlLCB1c2VyOnVzZXIsIGRhdGE6IGRhdGF9KTtcbi8vICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7c3VjY2VzczogZmFsc2UsIG1zZzogJ05vIHRva2VuIHByb3ZpZGVkLid9KTtcbi8vICAgfVxuLy8gfTtcblxuZXhwb3J0cy5wb3N0TG9naW4gPSBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5zZXNzaW9uKTtcbiAgICByZXEuYXNzZXJ0KCdlbWFpbCcsICdFbWFpbCBpcyBub3QgdmFsaWQnKS5pc0VtYWlsKCk7XG4gICAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAnUGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJykubm90RW1wdHkoKTtcbiAgICByZXEuc2FuaXRpemUoJ2VtYWlsJykubm9ybWFsaXplRW1haWwoeyByZW1vdmVfZG90czogZmFsc2UgfSk7XG5cbiAgICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gICAgaWYgKGVycm9ycykge1xuICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IGVycm9ycyB9KTtcbiAgICB9XG5cbiAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJywgKGVyciwgdXNlciwgaW5mbykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIGluZm8pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogJ0ludmFsaWQgcGFzc3dvcmQgb3IgZW1haWwhJyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEubG9nSW4odXNlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICAgICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ1N1Y2Nlc3MhIFlvdSBhcmUgbG9nZ2VkIGluLicgfSk7XG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtc2c6ICdTdWNjZXNzISBZb3UgYXJlIGxvZ2dlZCBpbi4nLFxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KShyZXEsIHJlcywgbmV4dCk7XG59XG5cbmV4cG9ydHMuYXV0aCA9IGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS51c2VyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlcS51c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDMpO1xuICAgIH1cbn1cbmV4cG9ydHMuYXV0aGVudGljYXRlID0gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICBpZiAoIXJlcS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICAvLyByZXMuc3RhdHVzKDQwMyk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykucmVuZGVyKCc0MDMnKTtcbiAgICB9XG4gICAgbmV4dCgpO1xufVxuXG5leHBvcnRzLnBvc3RMb2dvdXQgPSBmdW5jdGlvbihyZXEsIHJlcykge1xuICAgIHJlcS5sb2dvdXQoKTtcbiAgICByZXEuc2Vzc2lvbi5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtc2c6ICdMb2dlZCBvdXQhJyB9KVxufVxuXG5leHBvcnRzLkdldFVzZXJzTGlzdCA9IGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgVXNlci5maW5kKGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICByZXMuanNvbihkYXRhKTtcbiAgICB9KTtcbn0iXX0=

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
var slugHero = __webpack_require__(39);

// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/

// set up a mongoose model
var PostSchema = new Schema({
  title: {
    type: String
  },
  // image: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Image',
  // },
  content: {
    type: String
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // comments: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Comment'
  // },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category'
  // },
  // tags: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Tag'
  // },
  public: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

PostSchema.plugin(slugHero, { field: 'title' });

module.exports = mongoose.model('Post', PostSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9tb2RlbHMvcG9zdC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJzbHVnSGVybyIsIlBvc3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJjb250ZW50IiwiY3JlYXRlZEJ5IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInVwZGF0ZWRCeSIsInB1YmxpYyIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsInBsdWdpbiIsImZpZWxkIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVdDLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBSUMsU0FBU0YsU0FBU0UsTUFBdEI7QUFDQTtBQUNBLElBQUlDLFdBQVdGLFFBQVEsb0JBQVIsQ0FBZjs7QUFFQTs7QUFFQTtBQUNBLElBQUlHLGFBQWEsSUFBSUYsTUFBSixDQUFXO0FBQzFCRyxTQUFPO0FBQ0xDLFVBQU1DO0FBREQsR0FEbUI7QUFJMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsV0FBUztBQUNQRixVQUFNQztBQURDLEdBUmlCO0FBVzFCRSxhQUFXO0FBQ1RILFVBQU1KLE9BQU9RLEtBQVAsQ0FBYUMsUUFEVjtBQUVUQyxTQUFLO0FBRkksR0FYZTtBQWUxQkMsYUFBVztBQUNUUCxVQUFNSixPQUFPUSxLQUFQLENBQWFDLFFBRFY7QUFFVEMsU0FBSztBQUZJLEdBZmU7QUFtQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRSxVQUFRO0FBQ05SLFVBQU1TLE9BREE7QUFFTkMsYUFBUztBQUZIO0FBL0JrQixDQUFYLEVBbUNkO0FBQ0RDLGNBQVk7QUFEWCxDQW5DYyxDQUFqQjs7QUF1Q0FiLFdBQVdjLE1BQVgsQ0FBa0JmLFFBQWxCLEVBQTRCLEVBQUVnQixPQUFPLE9BQVQsRUFBNUI7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJyQixTQUFTc0IsS0FBVCxDQUFlLE1BQWYsRUFBdUJsQixVQUF2QixDQUFqQiIsImZpbGUiOiJwb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJlay9EZXNrdG9wL0FwbGlrYWNqZS9jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xudmFyIFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcbi8vIHZhciBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcbnZhciBzbHVnSGVybyA9IHJlcXVpcmUoJ21vbmdvb3NlLXNsdWctaGVybycpO1xuXG4vLyBUaGFua3MgdG8gaHR0cDovL2Jsb2cubWF0b3NraS5jb20vYXJ0aWNsZXMvand0LWV4cHJlc3Mtbm9kZS1tb25nb29zZS9cblxuLy8gc2V0IHVwIGEgbW9uZ29vc2UgbW9kZWxcbnZhciBQb3N0U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIC8vIGltYWdlOiB7XG4gIC8vICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAvLyAgIHJlZjogJ0ltYWdlJyxcbiAgLy8gfSxcbiAgY29udGVudDoge1xuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBjcmVhdGVkQnk6IHtcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnVXNlcidcbiAgfSxcbiAgdXBkYXRlZEJ5OiB7XG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogJ1VzZXInXG4gIH0sXG4gIC8vIGNvbW1lbnRzOiB7XG4gIC8vICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAvLyAgIHJlZjogJ0NvbW1lbnQnXG4gIC8vIH0sXG4gIC8vIGNhdGVnb3J5OiB7XG4gIC8vICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAvLyAgIHJlZjogJ0NhdGVnb3J5J1xuICAvLyB9LFxuICAvLyB0YWdzOiB7XG4gIC8vICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAvLyAgIHJlZjogJ1RhZydcbiAgLy8gfSxcbiAgcHVibGljOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9XG59LCB7XG4gIHRpbWVzdGFtcHM6IHRydWVcbn0pO1xuXG5Qb3N0U2NoZW1hLnBsdWdpbihzbHVnSGVybywgeyBmaWVsZDogJ3RpdGxlJyB9KTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ1Bvc3QnLCBQb3N0U2NoZW1hKTtcbiJdfQ==

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    'secret': 'uihuihiuhuoiohoiutydrtyjiou78ut65edghhonu'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb25maWcvZGF0YWJhc2UuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNiLGNBQVU7QUFERyxDQUFqQiIsImZpbGUiOiJkYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFyZWsvRGVza3RvcC9BcGxpa2FjamUvY21zIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ3NlY3JldCc6ICd1aWh1aWhpdWh1b2lvaG9pdXR5ZHJ0eWppb3U3OHV0NjVlZGdoaG9udScsXG4gICAgLy8gJ2RhdGFiYXNlJzogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcGFzcy1hcHAnXG4gICAgLy8gJ2RhdGFiYXNlJzogJ21vbmdvZGI6Ly9tbzE0NzEzX2phcmVrOnphcTFAV1NYQG1vbmdvMC5teWRldmlsLm5ldC9tbzE0NzEzX2phcmVrJ1xufTsiXX0=

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(5);
var LocalStrategy = __webpack_require__(41).Strategy;
var GoogleStrategy = __webpack_require__(40).OAuth2Strategy;

// load up the user model
var User = __webpack_require__(3);
var config = __webpack_require__(8); // get db config file

var configAuth = __webpack_require__(33);

// console.log(User);
// module.exports = function(passport) {
//   var opts = {};
//   opts.secretOrKey = config.secret;
//   passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.id}, function(err, user) {
//           if (err) {
//               return done(err, false);
//           }
//           if (user) {
//               done(null, user);
//           } else {
//               done(null, false);
//           }
//       });
//   }));
// };

// module.exports = function(passport) {
passport.serializeUser(function (user, done) {
    // console.log(user);
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    session: true,
    passReqToCallback: true
}, function (req, email, password, done) {
    // console.log(email);

    User.findOne({ email: email.toLowerCase() }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { msg: 'Email ' + email + ' not found.' });
        }
        if (!user.password) {
            return done(null, false, { msg: 'Password not found, log in to your social account' });
        }
        user.comparePassword(password, function (err, isMatch) {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                req.session.authenticated = true;
                return done(null, user);
            }
            return done(null, false, { msg: 'Invalid email or password.' });
        });
    });
}));

passport.use(new GoogleStrategy({

    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL

}, function (token, refreshToken, profile, done) {

    // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Google
    process.nextTick(function () {

        // try to find the user based on their google id
        User.findOne({ 'google.id': profile.id }, function (err, user) {
            if (err) return done(err);

            if (user) {

                // if a user is found, log them in
                return done(null, user);
            } else {
                // if the user isnt in our database, create a new user
                var newUser = new User();

                // set all of the relevant information
                newUser.google.id = profile.id;
                newUser.google.token = token;
                // newUser.google.name = profile.displayName;
                newUser.name = profile.displayName;
                // newUser.google.email = profile.emails[0].value; // pull the first email
                newUser.email = profile.emails[0].value;

                // save the user
                newUser.save(function (err) {
                    if (err) {
                        throw err;
                    }
                    return done(null, newUser);
                });
            }
        });
    });
}));

// }


/**
 * Login Required middleware.
 */
exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({ authentication: true });
};

// exports.auth = (req, res, next) => {
//   // console.log(req.session);
// };

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = function (req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];
    var token = req.user.tokens.find(function (token) {
        return token.kind === provider;
    });
    if (token) {
        next();
    } else {
        res.json({ authentication: true });
        // res.redirect(`/auth/${provider}`);
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb25maWcvcGFzc3BvcnQuanMiXSwibmFtZXMiOlsicGFzc3BvcnQiLCJyZXF1aXJlIiwiTG9jYWxTdHJhdGVneSIsIlN0cmF0ZWd5IiwiR29vZ2xlU3RyYXRlZ3kiLCJPQXV0aDJTdHJhdGVneSIsIlVzZXIiLCJjb25maWciLCJjb25maWdBdXRoIiwic2VyaWFsaXplVXNlciIsInVzZXIiLCJkb25lIiwiaWQiLCJkZXNlcmlhbGl6ZVVzZXIiLCJmaW5kQnlJZCIsImVyciIsInVzZSIsInVzZXJuYW1lRmllbGQiLCJzZXNzaW9uIiwicGFzc1JlcVRvQ2FsbGJhY2siLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmluZE9uZSIsInRvTG93ZXJDYXNlIiwibXNnIiwiY29tcGFyZVBhc3N3b3JkIiwiaXNNYXRjaCIsImF1dGhlbnRpY2F0ZWQiLCJjbGllbnRJRCIsImdvb2dsZUF1dGgiLCJjbGllbnRTZWNyZXQiLCJjYWxsYmFja1VSTCIsInRva2VuIiwicmVmcmVzaFRva2VuIiwicHJvZmlsZSIsInByb2Nlc3MiLCJuZXh0VGljayIsIm5ld1VzZXIiLCJnb29nbGUiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJlbWFpbHMiLCJ2YWx1ZSIsInNhdmUiLCJleHBvcnRzIiwiaXNBdXRoZW50aWNhdGVkIiwicmVzIiwibmV4dCIsImpzb24iLCJhdXRoZW50aWNhdGlvbiIsImlzQXV0aG9yaXplZCIsInByb3ZpZGVyIiwicGF0aCIsInNwbGl0Iiwic2xpY2UiLCJ0b2tlbnMiLCJmaW5kIiwia2luZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxnQkFBZ0JELFFBQVEsZ0JBQVIsRUFBMEJFLFFBQWhEO0FBQ0EsSUFBTUMsaUJBQWlCSCxRQUFRLHVCQUFSLEVBQWlDSSxjQUF4RDs7QUFFQTtBQUNBLElBQUlDLE9BQU9MLFFBQVEsZ0JBQVIsQ0FBWDtBQUNBLElBQUlNLFNBQVNOLFFBQVEsWUFB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O0FBQ1BlO0FBQ0gsS0FGRCxNQUVPO0FBQ0hELFlBQUlFLElBQUosQ0FBUyxFQUFFQyxnQkFBZ0IsSUFBbEIsRUFBVDtBQUNBO0FBQ0g7QUFDSixDQVREIiwiZmlsZSI6InBhc3Nwb3J0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJlay9EZXNrdG9wL0FwbGlrYWNqZS9jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XG5jb25zdCBMb2NhbFN0cmF0ZWd5ID0gcmVxdWlyZSgncGFzc3BvcnQtbG9jYWwnKS5TdHJhdGVneTtcbmNvbnN0IEdvb2dsZVN0cmF0ZWd5ID0gcmVxdWlyZSgncGFzc3BvcnQtZ29vZ2xlLW9hdXRoJykuT0F1dGgyU3RyYXRlZ3k7XG5cbi8vIGxvYWQgdXAgdGhlIHVzZXIgbW9kZWxcbnZhciBVc2VyID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXInKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2RhdGFiYXNlJyk7IC8vIGdldCBkYiBjb25maWcgZmlsZVxuXG52YXIgY29uZmlnQXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpO1xuXG4vLyBjb25zb2xlLmxvZyhVc2VyKTtcbi8vIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFzc3BvcnQpIHtcbi8vICAgdmFyIG9wdHMgPSB7fTtcbi8vICAgb3B0cy5zZWNyZXRPcktleSA9IGNvbmZpZy5zZWNyZXQ7XG4vLyAgIHBhc3Nwb3J0LnVzZShuZXcgSnd0U3RyYXRlZ3kob3B0cywgZnVuY3Rpb24oand0X3BheWxvYWQsIGRvbmUpIHtcbi8vICAgICBVc2VyLmZpbmRPbmUoe2lkOiBqd3RfcGF5bG9hZC5pZH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xuLy8gICAgICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCBmYWxzZSk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlmICh1c2VyKSB7XG4vLyAgICAgICAgICAgICAgIGRvbmUobnVsbCwgdXNlcik7XG4vLyAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgZG9uZShudWxsLCBmYWxzZSk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgfSk7XG4vLyAgIH0pKTtcbi8vIH07XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFzc3BvcnQpIHtcbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXIsIGRvbmUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBkb25lKG51bGwsIHVzZXIuaWQpO1xufSk7XG5cbnBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcigoaWQsIGRvbmUpID0+IHtcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgICAgIGRvbmUoZXJyLCB1c2VyKTtcbiAgICB9KTtcbn0pO1xuXG5wYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koe1xuICAgIHVzZXJuYW1lRmllbGQ6ICdlbWFpbCcsXG4gICAgc2Vzc2lvbjogdHJ1ZSxcbiAgICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSxcbn0sIChyZXEsIGVtYWlsLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVtYWlsKTtcblxuICAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0sIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbXNnOiBgRW1haWwgJHtlbWFpbH0gbm90IGZvdW5kLmAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtc2c6ICdQYXNzd29yZCBub3QgZm91bmQsIGxvZyBpbiB0byB5b3VyIHNvY2lhbCBhY2NvdW50JyB9KVxuICAgICAgICB9XG4gICAgICAgIHVzZXIuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkLCAoZXJyLCBpc01hdGNoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmVxLnNlc3Npb24uYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtc2c6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLicgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KSk7XG5cbnBhc3Nwb3J0LnVzZShuZXcgR29vZ2xlU3RyYXRlZ3koe1xuXG4gICAgICAgIGNsaWVudElEOiBjb25maWdBdXRoLmdvb2dsZUF1dGguY2xpZW50SUQsXG4gICAgICAgIGNsaWVudFNlY3JldDogY29uZmlnQXV0aC5nb29nbGVBdXRoLmNsaWVudFNlY3JldCxcbiAgICAgICAgY2FsbGJhY2tVUkw6IGNvbmZpZ0F1dGguZ29vZ2xlQXV0aC5jYWxsYmFja1VSTCxcblxuICAgIH0sXG4gICAgZnVuY3Rpb24odG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkge1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIGNvZGUgYXN5bmNocm9ub3VzXG4gICAgICAgIC8vIFVzZXIuZmluZE9uZSB3b24ndCBmaXJlIHVudGlsIHdlIGhhdmUgYWxsIG91ciBkYXRhIGJhY2sgZnJvbSBHb29nbGVcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgdGhlIHVzZXIgYmFzZWQgb24gdGhlaXIgZ29vZ2xlIGlkXG4gICAgICAgICAgICBVc2VyLmZpbmRPbmUoeyAnZ29vZ2xlLmlkJzogcHJvZmlsZS5pZCB9LCBmdW5jdGlvbihlcnIsIHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhIHVzZXIgaXMgZm91bmQsIGxvZyB0aGVtIGluXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIGlzbnQgaW4gb3VyIGRhdGFiYXNlLCBjcmVhdGUgYSBuZXcgdXNlclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VXNlciA9IG5ldyBVc2VyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGFsbCBvZiB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgbmV3VXNlci5nb29nbGUuaWQgPSBwcm9maWxlLmlkO1xuICAgICAgICAgICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdVc2VyLmdvb2dsZS5uYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VXNlci5uYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3VXNlci5nb29nbGUuZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTsgLy8gcHVsbCB0aGUgZmlyc3QgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgbmV3VXNlci5lbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIHVzZXJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXNlci5zYXZlKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIG5ld1VzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9KSk7XG5cblxuLy8gfVxuXG5cblxuXG4vKipcbiAqIExvZ2luIFJlcXVpcmVkIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydHMuaXNBdXRoZW50aWNhdGVkID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgaWYgKHJlcS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cbiAgICByZXMuanNvbih7IGF1dGhlbnRpY2F0aW9uOiB0cnVlIH0pO1xufTtcblxuLy8gZXhwb3J0cy5hdXRoID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlcS5zZXNzaW9uKTtcbi8vIH07XG5cbi8qKlxuICogQXV0aG9yaXphdGlvbiBSZXF1aXJlZCBtaWRkbGV3YXJlLlxuICovXG5leHBvcnRzLmlzQXV0aG9yaXplZCA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gcmVxLnBhdGguc3BsaXQoJy8nKS5zbGljZSgtMSlbMF07XG4gICAgY29uc3QgdG9rZW4gPSByZXEudXNlci50b2tlbnMuZmluZCh0b2tlbiA9PiB0b2tlbi5raW5kID09PSBwcm92aWRlcik7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuanNvbih7IGF1dGhlbnRpY2F0aW9uOiB0cnVlIH0pO1xuICAgICAgICAvLyByZXMucmVkaXJlY3QoYC9hdXRoLyR7cHJvdmlkZXJ9YCk7XG4gICAgfVxufTsiXX0=

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostController = __webpack_require__(2);
var express = __webpack_require__(4);
var MessageModel = __webpack_require__(1);
var fs = __webpack_require__(9);
var mongoose = __webpack_require__(0);
// var multiparty = require('connect-multiparty')();
// Router
var controllers = {};
var Post = __webpack_require__(7);

controllers.user = __webpack_require__(6);
var ChatController = __webpack_require__(34);
var UserController = __webpack_require__(6);

// PostController = new PostController();
// console.log(PostController);

var API_AUTHENTICATION = controllers.user.authenticate;

module.exports = function () {
    var admin = express.Router();
    // admin.get('/checksession', (req, res, next) => {
    //     // console.log(req.user);
    //     res.json(req.user);
    // });

    admin.post('/signup', controllers.user.create);
    admin.get('/auth', function (req, res) {
        // console.log()
        if (!req.isAuthenticated()) {
            return res.sendStatus(401);
        }
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    admin.post('/logout', controllers.user.postLogout);

    admin.post('/login', controllers.user.postLogin);

    admin.get('/listusers', API_AUTHENTICATION, controllers.user.GetUsersList);
    // View messages to and from authenticated user
    admin.get('/chat', API_AUTHENTICATION, ChatController.getConversations);

    // Retrieve single conversation
    admin.get('/chat/:conversationId', API_AUTHENTICATION, ChatController.getConversation);

    // Send reply in conversation
    admin.post('/chat/:conversationId', API_AUTHENTICATION, ChatController.sendReply);

    // Start new conversation
    admin.post('/chat/new/:recipient', API_AUTHENTICATION, ChatController.newConversation);

    // passportConfig.isAuthenticated,

    admin.get('/memberinfo', API_AUTHENTICATION, UserController.auth);

    // admin.get('/chat', API_AUTHENTICATION, function(req, res) {
    //     // console.log('ddd');
    //     MessageModel.find({ public: true }, function(err, data) {
    //         res.status(200).json({
    //             success: true,
    //             data: data,
    //         });
    //     });
    // });


    // Create Post
    admin.post('/post', API_AUTHENTICATION, PostController.create);
    admin.get('/post', API_AUTHENTICATION, PostController.listAll);
    // Read post
    admin.get('/post/:id', API_AUTHENTICATION, PostController.getPostBySlug);
    admin.put('/post/:id', API_AUTHENTICATION, PostController.update);

    // admin.post('/upload/:id', multiparty, function(req, res) {
    //     var db = mongoose.connection.db;
    //     var mongoDriver = mongoose.mongo;
    //     var gfs = new Gridfs(db, mongoDriver);
    //     var writestream = gfs.createWriteStream({
    //         filename: req.files.file.name,
    //         mode: 'w',
    //         content_type: req.files.file.mimetype,
    //         metadata: req.body
    //     });
    //     fs.createReadStream(req.files.file.path).pipe(writestream);
    //     writestream.on('close', function(file) {
    //         Post.findById(req.params.id, function(err, post) {
    //             // handle error
    //             post.file = file._id;
    //             post.save(function(err, updatedPost) {
    //                 // handle error
    //                 return res.json(200, updatedPost)
    //             })
    //         });
    //         fs.unlink(req.files.file.path, function(err) {
    //             // handle error
    //             console.log('success!')
    //         });
    //     });
    // });

    return admin;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9yb3V0ZXMvYWRtaW4ucm91dGVzLmpzIl0sIm5hbWVzIjpbIlBvc3RDb250cm9sbGVyIiwicmVxdWlyZSIsImV4cHJlc3MiLCJNZXNzYWdlTW9kZWwiLCJmcyIsIm1vbmdvb3NlIiwiY29udHJvbGxlcnMiLCJQb3N0IiwidXNlciIsIkNoYXRDb250cm9sbGVyIiwiVXNlckNvbnRyb2xsZXIiLCJBUElfQVVUSEVOVElDQVRJT04iLCJhdXRoZW50aWNhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRtaW4iLCJSb3V0ZXIiLCJwb3N0IiwiY3JlYXRlIiwiZ2V0IiwicmVxIiwicmVzIiwiaXNBdXRoZW50aWNhdGVkIiwic2VuZFN0YXR1cyIsInNlbmQiLCJwb3N0TG9nb3V0IiwicG9zdExvZ2luIiwiR2V0VXNlcnNMaXN0IiwiZ2V0Q29udmVyc2F0aW9ucyIsImdldENvbnZlcnNhdGlvbiIsInNlbmRSZXBseSIsIm5ld0NvbnZlcnNhdGlvbiIsImF1dGgiLCJsaXN0QWxsIiwiZ2V0UG9zdEJ5U2x1ZyIsInB1dCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0EsSUFBTUEsaUJBQWlCQyxRQUFRLGtDQUFSLENBQXZCO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUUsZUFBZUYsUUFBUSxtQkFBUixDQUFyQjtBQUNBLElBQUlHLEtBQUtILFFBQVEsSUFBUixDQUFUO0FBQ0EsSUFBSUksV0FBV0osUUFBUSxVQUFSLENBQWY7QUFDQTtBQUNBO0FBQ0EsSUFBTUssY0FBYyxFQUFwQjtBQUNBLElBQUlDLE9BQU9OLFFBQVEsbUJBQVIsQ0FBWDs7QUFHQUssWUFBWUUsSUFBWixHQUFtQlAsUUFBUSxrQ0FBUixDQUFuQjtBQUNBLElBQUlRLGlCQUFpQlIsUUFBUSwrQkFBUixDQUFyQjtBQUNBLElBQU1TLGlCQUFpQlQsUUFBUSxrQ0FBUixDQUF2Qjs7QUFHQTtBQUNBOztBQUVBLElBQU1VLHFCQUFxQkwsWUFBWUUsSUFBWixDQUFpQkksWUFBNUM7O0FBR0FDLE9BQU9DLE9BQVAsR0FBa0IsWUFBVztBQUN6QixRQUFJQyxRQUFRYixRQUFRYyxNQUFSLEVBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUQsVUFBTUUsSUFBTixDQUFXLFNBQVgsRUFBc0JYLFlBQVlFLElBQVosQ0FBaUJVLE1BQXZDO0FBQ0FILFVBQU1JLEdBQU4sQ0FBVSxPQUFWLEVBQW1CLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNsQztBQUNBLFlBQUksQ0FBQ0QsSUFBSUUsZUFBSixFQUFMLEVBQTRCO0FBQ3hCLG1CQUFPRCxJQUFJRSxVQUFKLENBQWUsR0FBZixDQUFQO0FBQ0g7QUFDREYsWUFBSUcsSUFBSixDQUFTSixJQUFJRSxlQUFKLEtBQXdCRixJQUFJWixJQUE1QixHQUFtQyxHQUE1QztBQUNILEtBTkQ7O0FBUUFPLFVBQU1FLElBQU4sQ0FBVyxTQUFYLEVBQXNCWCxZQUFZRSxJQUFaLENBQWlCaUIsVUFBdkM7O0FBRUFWLFVBQU1FLElBQU4sQ0FBVyxRQUFYLEVBQXFCWCxZQUFZRSxJQUFaLENBQWlCa0IsU0FBdEM7O0FBRUFYLFVBQU1JLEdBQU4sQ0FBVSxZQUFWLEVBQXdCUixrQkFBeEIsRUFBNENMLFlBQVlFLElBQVosQ0FBaUJtQixZQUE3RDtBQUNBO0FBQ0FaLFVBQU1JLEdBQU4sQ0FBVSxPQUFWLEVBQW1CUixrQkFBbkIsRUFBdUNGLGVBQWVtQixnQkFBdEQ7O0FBRUE7QUFDQWIsVUFBTUksR0FBTixDQUFVLHVCQUFWLEVBQW1DUixrQkFBbkMsRUFBdURGLGVBQWVvQixlQUF0RTs7QUFFQTtBQUNBZCxVQUFNRSxJQUFOLENBQVcsdUJBQVgsRUFBb0NOLGtCQUFwQyxFQUF3REYsZUFBZXFCLFNBQXZFOztBQUVBO0FBQ0FmLFVBQU1FLElBQU4sQ0FBVyxzQkFBWCxFQUFtQ04sa0JBQW5DLEVBQXVERixlQUFlc0IsZUFBdEU7O0FBRUE7O0FBRUFoQixVQUFNSSxHQUFOLENBQVUsYUFBVixFQUF5QlIsa0JBQXpCLEVBQTZDRCxlQUFlc0IsSUFBNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBakIsVUFBTUUsSUFBTixDQUFXLE9BQVgsRUFBb0JOLGtCQUFwQixFQUF3Q1gsZUFBZWtCLE1BQXZEO0FBQ0FILFVBQU1JLEdBQU4sQ0FBVSxPQUFWLEVBQW1CUixrQkFBbkIsRUFBdUNYLGVBQWVpQyxPQUF0RDtBQUNBO0FBQ0FsQixVQUFNSSxHQUFOLENBQVUsV0FBVixFQUF1QlIsa0JBQXZCLEVBQTJDWCxlQUFla0MsYUFBMUQ7QUFDQW5CLFVBQU1vQixHQUFOLENBQVUsV0FBVixFQUF1QnhCLGtCQUF2QixFQUEyQ1gsZUFBZW9DLE1BQTFEOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBT3JCLEtBQVA7QUFDSCxDQXRGZ0IsRUFBakIiLCJmaWxlIjoiYWRtaW4ucm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJlay9EZXNrdG9wL0FwbGlrYWNqZS9jbXMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmNvbnN0IFBvc3RDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIuanMnKTtcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBNZXNzYWdlTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbHMvbWVzc2FnZScpO1xudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4vLyB2YXIgbXVsdGlwYXJ0eSA9IHJlcXVpcmUoJ2Nvbm5lY3QtbXVsdGlwYXJ0eScpKCk7XG4vLyBSb3V0ZXJcbmNvbnN0IGNvbnRyb2xsZXJzID0ge307XG52YXIgUG9zdCA9IHJlcXVpcmUoJy4uL21vZGVscy9wb3N0LmpzJyk7XG5cblxuY29udHJvbGxlcnMudXNlciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzJyk7XG52YXIgQ2hhdENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycy9DaGF0Q29udHJvbGxlcicpO1xuY29uc3QgVXNlckNvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcycpO1xuXG5cbi8vIFBvc3RDb250cm9sbGVyID0gbmV3IFBvc3RDb250cm9sbGVyKCk7XG4vLyBjb25zb2xlLmxvZyhQb3N0Q29udHJvbGxlcik7XG5cbmNvbnN0IEFQSV9BVVRIRU5USUNBVElPTiA9IGNvbnRyb2xsZXJzLnVzZXIuYXV0aGVudGljYXRlO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBhZG1pbiA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgLy8gYWRtaW4uZ2V0KCcvY2hlY2tzZXNzaW9uJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlcS51c2VyKTtcbiAgICAvLyAgICAgcmVzLmpzb24ocmVxLnVzZXIpO1xuICAgIC8vIH0pO1xuXG4gICAgYWRtaW4ucG9zdCgnL3NpZ251cCcsIGNvbnRyb2xsZXJzLnVzZXIuY3JlYXRlKTtcbiAgICBhZG1pbi5nZXQoJy9hdXRoJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICBpZiAoIXJlcS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnNlbmQocmVxLmlzQXV0aGVudGljYXRlZCgpID8gcmVxLnVzZXIgOiAnMCcpO1xuICAgIH0pO1xuXG4gICAgYWRtaW4ucG9zdCgnL2xvZ291dCcsIGNvbnRyb2xsZXJzLnVzZXIucG9zdExvZ291dCk7XG5cbiAgICBhZG1pbi5wb3N0KCcvbG9naW4nLCBjb250cm9sbGVycy51c2VyLnBvc3RMb2dpbik7XG5cbiAgICBhZG1pbi5nZXQoJy9saXN0dXNlcnMnLCBBUElfQVVUSEVOVElDQVRJT04sIGNvbnRyb2xsZXJzLnVzZXIuR2V0VXNlcnNMaXN0KTtcbiAgICAvLyBWaWV3IG1lc3NhZ2VzIHRvIGFuZCBmcm9tIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgIGFkbWluLmdldCgnL2NoYXQnLCBBUElfQVVUSEVOVElDQVRJT04sIENoYXRDb250cm9sbGVyLmdldENvbnZlcnNhdGlvbnMpO1xuXG4gICAgLy8gUmV0cmlldmUgc2luZ2xlIGNvbnZlcnNhdGlvblxuICAgIGFkbWluLmdldCgnL2NoYXQvOmNvbnZlcnNhdGlvbklkJywgQVBJX0FVVEhFTlRJQ0FUSU9OLCBDaGF0Q29udHJvbGxlci5nZXRDb252ZXJzYXRpb24pO1xuXG4gICAgLy8gU2VuZCByZXBseSBpbiBjb252ZXJzYXRpb25cbiAgICBhZG1pbi5wb3N0KCcvY2hhdC86Y29udmVyc2F0aW9uSWQnLCBBUElfQVVUSEVOVElDQVRJT04sIENoYXRDb250cm9sbGVyLnNlbmRSZXBseSk7XG5cbiAgICAvLyBTdGFydCBuZXcgY29udmVyc2F0aW9uXG4gICAgYWRtaW4ucG9zdCgnL2NoYXQvbmV3LzpyZWNpcGllbnQnLCBBUElfQVVUSEVOVElDQVRJT04sIENoYXRDb250cm9sbGVyLm5ld0NvbnZlcnNhdGlvbik7XG5cbiAgICAvLyBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsXG5cbiAgICBhZG1pbi5nZXQoJy9tZW1iZXJpbmZvJywgQVBJX0FVVEhFTlRJQ0FUSU9OLCBVc2VyQ29udHJvbGxlci5hdXRoKTtcblxuICAgIC8vIGFkbWluLmdldCgnL2NoYXQnLCBBUElfQVVUSEVOVElDQVRJT04sIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdkZGQnKTtcbiAgICAvLyAgICAgTWVzc2FnZU1vZGVsLmZpbmQoeyBwdWJsaWM6IHRydWUgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgLy8gICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pO1xuXG5cbiAgICAvLyBDcmVhdGUgUG9zdFxuICAgIGFkbWluLnBvc3QoJy9wb3N0JywgQVBJX0FVVEhFTlRJQ0FUSU9OLCBQb3N0Q29udHJvbGxlci5jcmVhdGUpO1xuICAgIGFkbWluLmdldCgnL3Bvc3QnLCBBUElfQVVUSEVOVElDQVRJT04sIFBvc3RDb250cm9sbGVyLmxpc3RBbGwpO1xuICAgIC8vIFJlYWQgcG9zdFxuICAgIGFkbWluLmdldCgnL3Bvc3QvOmlkJywgQVBJX0FVVEhFTlRJQ0FUSU9OLCBQb3N0Q29udHJvbGxlci5nZXRQb3N0QnlTbHVnKTtcbiAgICBhZG1pbi5wdXQoJy9wb3N0LzppZCcsIEFQSV9BVVRIRU5USUNBVElPTiwgUG9zdENvbnRyb2xsZXIudXBkYXRlKTtcblxuXG5cblxuICAgIC8vIGFkbWluLnBvc3QoJy91cGxvYWQvOmlkJywgbXVsdGlwYXJ0eSwgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICAvLyAgICAgdmFyIGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbi5kYjtcbiAgICAvLyAgICAgdmFyIG1vbmdvRHJpdmVyID0gbW9uZ29vc2UubW9uZ287XG4gICAgLy8gICAgIHZhciBnZnMgPSBuZXcgR3JpZGZzKGRiLCBtb25nb0RyaXZlcik7XG4gICAgLy8gICAgIHZhciB3cml0ZXN0cmVhbSA9IGdmcy5jcmVhdGVXcml0ZVN0cmVhbSh7XG4gICAgLy8gICAgICAgICBmaWxlbmFtZTogcmVxLmZpbGVzLmZpbGUubmFtZSxcbiAgICAvLyAgICAgICAgIG1vZGU6ICd3JyxcbiAgICAvLyAgICAgICAgIGNvbnRlbnRfdHlwZTogcmVxLmZpbGVzLmZpbGUubWltZXR5cGUsXG4gICAgLy8gICAgICAgICBtZXRhZGF0YTogcmVxLmJvZHlcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGZzLmNyZWF0ZVJlYWRTdHJlYW0ocmVxLmZpbGVzLmZpbGUucGF0aCkucGlwZSh3cml0ZXN0cmVhbSk7XG4gICAgLy8gICAgIHdyaXRlc3RyZWFtLm9uKCdjbG9zZScsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAvLyAgICAgICAgIFBvc3QuZmluZEJ5SWQocmVxLnBhcmFtcy5pZCwgZnVuY3Rpb24oZXJyLCBwb3N0KSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgLy8gICAgICAgICAgICAgcG9zdC5maWxlID0gZmlsZS5faWQ7XG4gICAgLy8gICAgICAgICAgICAgcG9zdC5zYXZlKGZ1bmN0aW9uKGVyciwgdXBkYXRlZFBvc3QpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigyMDAsIHVwZGF0ZWRQb3N0KVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIGZzLnVubGluayhyZXEuZmlsZXMuZmlsZS5wYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyEnKVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pO1xuXG4gICAgcmV0dXJuIGFkbWluO1xufSkoKTsiXX0=

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostController = __webpack_require__(2);
var express = __webpack_require__(4);
var MessageModel = __webpack_require__(1);
// Router
var controllers = {};

var passport = __webpack_require__(5);

controllers.user = __webpack_require__(6);

// PostController = new PostController();
// console.log(PostController);

var API_AUTHENTICATION = controllers.user.authenticate;

module.exports = function () {
    var auth = express.Router();

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    auth.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // the callback after google has authenticated the user
    auth.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/admin/dashboard',
        failureRedirect: '/'
    }));

    return auth;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9yb3V0ZXMvYXV0aC5yb3V0ZXMuanMiXSwibmFtZXMiOlsiUG9zdENvbnRyb2xsZXIiLCJyZXF1aXJlIiwiZXhwcmVzcyIsIk1lc3NhZ2VNb2RlbCIsImNvbnRyb2xsZXJzIiwicGFzc3BvcnQiLCJ1c2VyIiwiQVBJX0FVVEhFTlRJQ0FUSU9OIiwiYXV0aGVudGljYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImF1dGgiLCJSb3V0ZXIiLCJnZXQiLCJzY29wZSIsInN1Y2Nlc3NSZWRpcmVjdCIsImZhaWx1cmVSZWRpcmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0EsSUFBTUEsaUJBQWlCQyxRQUFRLGtDQUFSLENBQXZCO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUUsZUFBZUYsUUFBUSxtQkFBUixDQUFyQjtBQUNBO0FBQ0EsSUFBTUcsY0FBYyxFQUFwQjs7QUFFQSxJQUFNQyxXQUFXSixRQUFRLFVBQVIsQ0FBakI7O0FBR0FHLFlBQVlFLElBQVosR0FBbUJMLFFBQVEsa0NBQVIsQ0FBbkI7O0FBR0E7QUFDQTs7QUFFQSxJQUFNTSxxQkFBcUJILFlBQVlFLElBQVosQ0FBaUJFLFlBQTVDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWtCLFlBQVc7QUFDekIsUUFBSUMsT0FBT1QsUUFBUVUsTUFBUixFQUFYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRCxTQUFLRSxHQUFMLENBQVMsY0FBVCxFQUF5QlIsU0FBU0csWUFBVCxDQUFzQixRQUF0QixFQUFnQyxFQUFFTSxPQUFPLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBVCxFQUFoQyxDQUF6Qjs7QUFFQTtBQUNBSCxTQUFLRSxHQUFMLENBQVMsdUJBQVQsRUFDSVIsU0FBU0csWUFBVCxDQUFzQixRQUF0QixFQUFnQztBQUM1Qk8seUJBQWlCLGtCQURXO0FBRTVCQyx5QkFBaUI7QUFGVyxLQUFoQyxDQURKOztBQU1BLFdBQU9MLElBQVA7QUFDSCxDQW5CZ0IsRUFBakIiLCJmaWxlIjoiYXV0aC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuY29uc3QgUG9zdENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcycpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IE1lc3NhZ2VNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVscy9tZXNzYWdlJyk7XG4vLyBSb3V0ZXJcbmNvbnN0IGNvbnRyb2xsZXJzID0ge307XG5cbmNvbnN0IHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcblxuXG5jb250cm9sbGVycy51c2VyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMnKTtcblxuXG4vLyBQb3N0Q29udHJvbGxlciA9IG5ldyBQb3N0Q29udHJvbGxlcigpO1xuLy8gY29uc29sZS5sb2coUG9zdENvbnRyb2xsZXIpO1xuXG5jb25zdCBBUElfQVVUSEVOVElDQVRJT04gPSBjb250cm9sbGVycy51c2VyLmF1dGhlbnRpY2F0ZTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGF1dGggPSBleHByZXNzLlJvdXRlcigpO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEdPT0dMRSBST1VURVMgPT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gc2VuZCB0byBnb29nbGUgdG8gZG8gdGhlIGF1dGhlbnRpY2F0aW9uXG4gICAgLy8gcHJvZmlsZSBnZXRzIHVzIHRoZWlyIGJhc2ljIGluZm9ybWF0aW9uIGluY2x1ZGluZyB0aGVpciBuYW1lXG4gICAgLy8gZW1haWwgZ2V0cyB0aGVpciBlbWFpbHNcbiAgICBhdXRoLmdldCgnL2F1dGgvZ29vZ2xlJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdnb29nbGUnLCB7IHNjb3BlOiBbJ3Byb2ZpbGUnLCAnZW1haWwnXSB9KSk7XG5cbiAgICAvLyB0aGUgY2FsbGJhY2sgYWZ0ZXIgZ29vZ2xlIGhhcyBhdXRoZW50aWNhdGVkIHRoZSB1c2VyXG4gICAgYXV0aC5nZXQoJy9hdXRoL2dvb2dsZS9jYWxsYmFjaycsXG4gICAgICAgIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJywge1xuICAgICAgICAgICAgc3VjY2Vzc1JlZGlyZWN0OiAnL2FkbWluL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvJ1xuICAgICAgICB9KSk7XG5cbiAgICByZXR1cm4gYXV0aDtcbn0pKCk7Il19

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostController = __webpack_require__(2);
var express = __webpack_require__(4);
var MessageModel = __webpack_require__(1);
var Post = __webpack_require__(7);
// Router
var controllers = {};

controllers.user = __webpack_require__(6);

// PostController = new PostController();
// console.log(PostController);

var API_AUTHENTICATION = controllers.user.authenticate;

module.exports = function () {
    var PublicRoute = express.Router();
    //   public.get('/checksession', (req, res, next) => {
    //     // console.log(req.user);
    //     res.json(req.user);
    //   });

    PublicRoute.get('/', function (req, res) {
        Post.find(function (err, data) {
            res.render('pages/index', { posts: data });
        });
    });

    PublicRoute.get('/photodiary', function (req, res) {
        return res.render('pages/photodiary');
    });
    PublicRoute.get('/lifestyle', function (req, res) {
        return res.render('pages/lifestyle');
    });
    PublicRoute.get('/music', function (req, res) {
        return res.render('pages/music');
    });
    PublicRoute.get('/travel', function (req, res) {
        return res.render('pages/travel');
    });

    // Read post
    PublicRoute.get('/post/:slug', function (req, res) {
        var query = Post.findOne({
            slug: req.params.slug
        });
        // query.select(publicFields);
        query.exec(function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }

            if (result != null) {
                result.update({
                    $inc: {
                        read: 1
                    }
                }, function (err, nbRows, raw) {
                    // console.log(result);
                    // console.log(req);
                    res.render('single/single', { post: result });
                });
            } else {
                return res.sendStatus(400);
            }
        });
    });
    // Create Post

    PublicRoute.get('/postListAll', API_AUTHENTICATION, PostController.listAll);

    return PublicRoute;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9yb3V0ZXMvcHVibGljLnJvdXRlcy5qcyJdLCJuYW1lcyI6WyJQb3N0Q29udHJvbGxlciIsInJlcXVpcmUiLCJleHByZXNzIiwiTWVzc2FnZU1vZGVsIiwiUG9zdCIsImNvbnRyb2xsZXJzIiwidXNlciIsIkFQSV9BVVRIRU5USUNBVElPTiIsImF1dGhlbnRpY2F0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJQdWJsaWNSb3V0ZSIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsImZpbmQiLCJlcnIiLCJkYXRhIiwicmVuZGVyIiwicG9zdHMiLCJxdWVyeSIsImZpbmRPbmUiLCJzbHVnIiwicGFyYW1zIiwiZXhlYyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3RhdHVzIiwidXBkYXRlIiwiJGluYyIsInJlYWQiLCJuYlJvd3MiLCJyYXciLCJwb3N0IiwibGlzdEFsbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0EsSUFBTUEsaUJBQWlCQyxRQUFRLGtDQUFSLENBQXZCO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUUsZUFBZUYsUUFBUSxtQkFBUixDQUFyQjtBQUNBLElBQUlHLE9BQU9ILFFBQVEsbUJBQVIsQ0FBWDtBQUNBO0FBQ0EsSUFBTUksY0FBYyxFQUFwQjs7QUFJQUEsWUFBWUMsSUFBWixHQUFtQkwsUUFBUSxrQ0FBUixDQUFuQjs7QUFHQTtBQUNBOztBQUVBLElBQU1NLHFCQUFxQkYsWUFBWUMsSUFBWixDQUFpQkUsWUFBNUM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBa0IsWUFBVztBQUN6QixRQUFJQyxjQUFjVCxRQUFRVSxNQUFSLEVBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFELGdCQUFZRSxHQUFaLENBQWdCLEdBQWhCLEVBQXFCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNwQ1gsYUFBS1ksSUFBTCxDQUFVLFVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQjtBQUMxQkgsZ0JBQUlJLE1BQUosQ0FBVyxhQUFYLEVBQTBCLEVBQUVDLE9BQU9GLElBQVQsRUFBMUI7QUFDSCxTQUZEO0FBR0gsS0FKRDs7QUFNQVAsZ0JBQVlFLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsZUFBY0EsSUFBSUksTUFBSixDQUFXLGtCQUFYLENBQWQ7QUFBQSxLQUEvQjtBQUNBUixnQkFBWUUsR0FBWixDQUFnQixZQUFoQixFQUE4QixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxlQUFjQSxJQUFJSSxNQUFKLENBQVcsaUJBQVgsQ0FBZDtBQUFBLEtBQTlCO0FBQ0FSLGdCQUFZRSxHQUFaLENBQWdCLFFBQWhCLEVBQTBCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLGVBQWNBLElBQUlJLE1BQUosQ0FBVyxhQUFYLENBQWQ7QUFBQSxLQUExQjtBQUNBUixnQkFBWUUsR0FBWixDQUFnQixTQUFoQixFQUEyQixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxlQUFjQSxJQUFJSSxNQUFKLENBQVcsY0FBWCxDQUFkO0FBQUEsS0FBM0I7O0FBR0E7QUFDQVIsZ0JBQVlFLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekMsWUFBSU0sUUFBUWpCLEtBQUtrQixPQUFMLENBQWE7QUFDckJDLGtCQUFNVCxJQUFJVSxNQUFKLENBQVdEO0FBREksU0FBYixDQUFaO0FBR0E7QUFDQUYsY0FBTUksSUFBTixDQUFXLFVBQVNSLEdBQVQsRUFBY1MsTUFBZCxFQUFzQjtBQUM3QixnQkFBSVQsR0FBSixFQUFTO0FBQ0xVLHdCQUFRQyxHQUFSLENBQVlYLEdBQVo7QUFDQSx1QkFBT0YsSUFBSWMsVUFBSixDQUFlLEdBQWYsQ0FBUDtBQUNIOztBQUVELGdCQUFJSCxVQUFVLElBQWQsRUFBb0I7QUFDaEJBLHVCQUFPSSxNQUFQLENBQWM7QUFDVkMsMEJBQU07QUFDRkMsOEJBQU07QUFESjtBQURJLGlCQUFkLEVBSUcsVUFBU2YsR0FBVCxFQUFjZ0IsTUFBZCxFQUFzQkMsR0FBdEIsRUFBMkI7QUFDMUI7QUFDQTtBQUNBbkIsd0JBQUlJLE1BQUosQ0FBVyxlQUFYLEVBQTRCLEVBQUVnQixNQUFNVCxNQUFSLEVBQTVCO0FBQ0gsaUJBUkQ7QUFTSCxhQVZELE1BVU87QUFDSCx1QkFBT1gsSUFBSWMsVUFBSixDQUFlLEdBQWYsQ0FBUDtBQUNIO0FBQ0osU0FuQkQ7QUFzQkgsS0EzQkQ7QUE0QkE7O0FBRUFsQixnQkFBWUUsR0FBWixDQUFnQixjQUFoQixFQUFnQ04sa0JBQWhDLEVBQW9EUCxlQUFlb0MsT0FBbkU7O0FBRUEsV0FBT3pCLFdBQVA7QUFDSCxDQXJEZ0IsRUFBakIiLCJmaWxlIjoicHVibGljLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFyZWsvRGVza3RvcC9BcGxpa2FjamUvY21zIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5jb25zdCBQb3N0Q29udHJvbGxlciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLmpzJyk7XG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgTWVzc2FnZU1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWxzL21lc3NhZ2UnKTtcbnZhciBQb3N0ID0gcmVxdWlyZSgnLi4vbW9kZWxzL3Bvc3QuanMnKTtcbi8vIFJvdXRlclxuY29uc3QgY29udHJvbGxlcnMgPSB7fTtcblxuXG5cbmNvbnRyb2xsZXJzLnVzZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcycpO1xuXG5cbi8vIFBvc3RDb250cm9sbGVyID0gbmV3IFBvc3RDb250cm9sbGVyKCk7XG4vLyBjb25zb2xlLmxvZyhQb3N0Q29udHJvbGxlcik7XG5cbmNvbnN0IEFQSV9BVVRIRU5USUNBVElPTiA9IGNvbnRyb2xsZXJzLnVzZXIuYXV0aGVudGljYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgUHVibGljUm91dGUgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIC8vICAgcHVibGljLmdldCgnL2NoZWNrc2Vzc2lvbicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyZXEudXNlcik7XG4gICAgLy8gICAgIHJlcy5qc29uKHJlcS51c2VyKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgUHVibGljUm91dGUuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICAgICAgUG9zdC5maW5kKGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgcmVzLnJlbmRlcigncGFnZXMvaW5kZXgnLCB7IHBvc3RzOiBkYXRhIH0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUHVibGljUm91dGUuZ2V0KCcvcGhvdG9kaWFyeScsIChyZXEsIHJlcykgPT4gcmVzLnJlbmRlcigncGFnZXMvcGhvdG9kaWFyeScpKTtcbiAgICBQdWJsaWNSb3V0ZS5nZXQoJy9saWZlc3R5bGUnLCAocmVxLCByZXMpID0+IHJlcy5yZW5kZXIoJ3BhZ2VzL2xpZmVzdHlsZScpKTtcbiAgICBQdWJsaWNSb3V0ZS5nZXQoJy9tdXNpYycsIChyZXEsIHJlcykgPT4gcmVzLnJlbmRlcigncGFnZXMvbXVzaWMnKSk7XG4gICAgUHVibGljUm91dGUuZ2V0KCcvdHJhdmVsJywgKHJlcSwgcmVzKSA9PiByZXMucmVuZGVyKCdwYWdlcy90cmF2ZWwnKSk7XG5cblxuICAgIC8vIFJlYWQgcG9zdFxuICAgIFB1YmxpY1JvdXRlLmdldCgnL3Bvc3QvOnNsdWcnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gUG9zdC5maW5kT25lKHtcbiAgICAgICAgICAgIHNsdWc6IHJlcS5wYXJhbXMuc2x1Z1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcXVlcnkuc2VsZWN0KHB1YmxpY0ZpZWxkcyk7XG4gICAgICAgIHF1ZXJ5LmV4ZWMoZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJGluYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyLCBuYlJvd3MsIHJhdykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEpO1xuICAgICAgICAgICAgICAgICAgICByZXMucmVuZGVyKCdzaW5nbGUvc2luZ2xlJywgeyBwb3N0OiByZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgfSk7XG4gICAgLy8gQ3JlYXRlIFBvc3RcblxuICAgIFB1YmxpY1JvdXRlLmdldCgnL3Bvc3RMaXN0QWxsJywgQVBJX0FVVEhFTlRJQ0FUSU9OLCBQb3N0Q29udHJvbGxlci5saXN0QWxsKTtcblxuICAgIHJldHVybiBQdWJsaWNSb3V0ZTtcbn0pKCk7Il19

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express-flash");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("nunjucks");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("universal-analytics");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    'googleAuth': {
        'clientID': '503533517399-fa0iva2h4ghr9s4slcmi6s98gjnl7aq6.apps.googleusercontent.com',
        'clientSecret': 'Q6EftthvFpxRIbw8CymGkNHx',
        'callbackURL': 'http://localhost:3000/auth/google/callback'
        // 'callbackURL': 'https://app.jarekk1011.usermd.net/auth/google/callback'
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb25maWcvYXV0aC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Isa0JBQWM7QUFDVixvQkFBWSwwRUFERjtBQUVWLHdCQUFnQiwwQkFGTjtBQUdWLHVCQUFlO0FBQ1g7QUFKTTtBQURELENBQWpCIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdnb29nbGVBdXRoJzoge1xuICAgICAgICAnY2xpZW50SUQnOiAnNTAzNTMzNTE3Mzk5LWZhMGl2YTJoNGdocjlzNHNsY21pNnM5OGdqbmw3YXE2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgICAgJ2NsaWVudFNlY3JldCc6ICdRNkVmdHRodkZweFJJYnc4Q3ltR2tOSHgnLFxuICAgICAgICAnY2FsbGJhY2tVUkwnOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvZ29vZ2xlL2NhbGxiYWNrJ1xuICAgICAgICAgICAgLy8gJ2NhbGxiYWNrVVJMJzogJ2h0dHBzOi8vYXBwLmphcmVrazEwMTEudXNlcm1kLm5ldC9hdXRoL2dvb2dsZS9jYWxsYmFjaydcbiAgICB9XG59Il19

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Conversation = __webpack_require__(36),
    Message = __webpack_require__(1),
    User = __webpack_require__(3);

module.exports.getConversations = function (req, res, next) {
    // console.log(req.user);
    // Only return one message from each conversation to display as snippet
    Conversation.find({ participants: req.user._id }).select('_id').exec(function (err, conversations) {
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        // Set up empty array to hold conversations + most recent message
        var fullConversations = [];
        conversations.forEach(function (conversation) {
            Message.find({ 'conversationId': conversation._id }).sort('-createdAt').limit(1).populate({
                path: "author",
                select: "name"
            }).exec(function (err, message) {
                if (err) {
                    res.send({ error: err });
                    return next(err);
                }
                fullConversations.push(message);
                if (fullConversations.length === conversations.length) {
                    return res.status(200).json({ conversations: fullConversations });
                }
            });
        });
    });
};
module.exports.getConversation = function (req, res, next) {
    Message.find({ conversationId: req.params.conversationId }).select('createdAt body author').sort('-createdAt').populate({
        path: 'author',
        select: 'name'
    }).exec(function (err, messages) {
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        res.status(200).json({ conversation: messages });
    });
};
module.exports.newConversation = function (req, res, next) {
    if (!req.params.recipient) {
        res.status(422).send({ error: 'Please choose a valid recipient for your message.' });
        return next();
    }

    if (!req.body.composedMessage) {
        res.status(422).send({ error: 'Please enter a message.' });
        return next();
    }

    var conversation = new Conversation({
        participants: [req.user._id, req.params.recipient]
    });

    conversation.save(function (err, newConversation) {
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        var message = new Message({
            conversationId: newConversation._id,
            body: req.body.composedMessage,
            author: req.user._id
        });

        message.save(function (err, newMessage) {
            if (err) {
                res.send({ error: err });
                return next(err);
            }

            res.status(200).json({ message: 'Conversation started!', conversationId: conversation._id });
            return next();
        });
    });
};
module.exports.sendReply = function (req, res, next) {
    var reply = new Message({
        conversationId: req.params.conversationId,
        body: req.body.composedMessage,
        author: req.user._id
    });

    reply.save(function (err, sentReply) {
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        res.status(200).json({ message: 'Reply successfully sent!' });
        return next;
    });
};
// DELETE Route to Delete Conversation
module.exports.deleteConversation = function (req, res, next) {
    Conversation.findOneAndRemove({
        $and: [{ '_id': req.params.conversationId }, { 'participants': req.user._id }]
    }, function (err) {
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        res.status(200).json({ message: 'Conversation removed!' });
        return next();
    });
};

// // PUT Route to Update Message
// exports.updateMessage = function(req, res, next) {
//     Conversation.find({
//         $and: [
//             { '_id': req.params.messageId }, { 'author': req.user._id }
//         ]
//     }, function(err, message) {
//         if (err) {
//             res.send({ error: err });
//             return next(err);
//         }

//         message.body = req.body.composedMessage;

//         message.save(function(err, updatedMessage) {
//             if (err) {
//                 res.send({ error: err });
//                 return next(err);
//             }

//             res.status(200).json({ message: 'Message updated!' });
//             return next();
//         });
//     });
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb250cm9sbGVycy9DaGF0Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb252ZXJzYXRpb24iLCJyZXF1aXJlIiwiTWVzc2FnZSIsIlVzZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0Q29udmVyc2F0aW9ucyIsInJlcSIsInJlcyIsIm5leHQiLCJmaW5kIiwicGFydGljaXBhbnRzIiwidXNlciIsIl9pZCIsInNlbGVjdCIsImV4ZWMiLCJlcnIiLCJjb252ZXJzYXRpb25zIiwic2VuZCIsImVycm9yIiwiZnVsbENvbnZlcnNhdGlvbnMiLCJmb3JFYWNoIiwiY29udmVyc2F0aW9uIiwic29ydCIsImxpbWl0IiwicG9wdWxhdGUiLCJwYXRoIiwibWVzc2FnZSIsInB1c2giLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwiZ2V0Q29udmVyc2F0aW9uIiwiY29udmVyc2F0aW9uSWQiLCJwYXJhbXMiLCJtZXNzYWdlcyIsIm5ld0NvbnZlcnNhdGlvbiIsInJlY2lwaWVudCIsImJvZHkiLCJjb21wb3NlZE1lc3NhZ2UiLCJzYXZlIiwiYXV0aG9yIiwibmV3TWVzc2FnZSIsInNlbmRSZXBseSIsInJlcGx5Iiwic2VudFJlcGx5IiwiZGVsZXRlQ29udmVyc2F0aW9uIiwiZmluZE9uZUFuZFJlbW92ZSIsIiRhbmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQU1BLGVBQWVDLFFBQVEsd0JBQVIsQ0FBckI7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLG1CQUFSLENBRGQ7QUFBQSxJQUVJRSxPQUFPRixRQUFRLGdCQUFSLENBRlg7O0FBSUFHLE9BQU9DLE9BQVAsQ0FBZUMsZ0JBQWYsR0FBa0MsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUN2RDtBQUNBO0FBQ0FULGlCQUFhVSxJQUFiLENBQWtCLEVBQUVDLGNBQWNKLElBQUlLLElBQUosQ0FBU0MsR0FBekIsRUFBbEIsRUFDS0MsTUFETCxDQUNZLEtBRFosRUFFS0MsSUFG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UixZQUFJc0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUVKLFNBQVMsMEJBQVgsRUFBckI7QUFDQSxlQUFRbEIsSUFBUjtBQUNILEtBUkQ7QUFTSCxDQWhCTDtBQWlCSTtBQUNKTCxPQUFPQyxPQUFQLENBQWV5QyxrQkFBZixHQUFvQyxVQUFTdkMsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUN6RFQsaUJBQWErQyxnQkFBYixDQUE4QjtBQUMxQkMsY0FBTSxDQUNGLEVBQUUsT0FBT3pDLElBQUkyQixNQUFKLENBQVdELGNBQXBCLEVBREUsRUFDb0MsRUFBRSxnQkFBZ0IxQixJQUFJSyxJQUFKLENBQVNDLEdBQTNCLEVBRHBDO0FBRG9CLEtBQTlCLEVBSUcsVUFBU0csR0FBVCxFQUFjO0FBQ2IsWUFBSUEsR0FBSixFQUFTO0FBQ0xSLGdCQUFJVSxJQUFKLENBQVMsRUFBRUMsT0FBT0gsR0FBVCxFQUFUO0FBQ0EsbUJBQU9QLEtBQUtPLEdBQUwsQ0FBUDtBQUNIOztBQUVEUixZQUFJc0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUVKLFNBQVMsdUJBQVgsRUFBckI7QUFDQSxlQUFPbEIsTUFBUDtBQUNILEtBWkQ7QUFhSCxDQWREOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJDaGF0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFyZWsvRGVza3RvcC9BcGxpa2FjamUvY21zIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcbmNvbnN0IENvbnZlcnNhdGlvbiA9IHJlcXVpcmUoJy4uL21vZGVscy9jb252ZXJzYXRpb24nKSxcbiAgICBNZXNzYWdlID0gcmVxdWlyZSgnLi4vbW9kZWxzL21lc3NhZ2UnKSxcbiAgICBVc2VyID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXInKTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0Q29udmVyc2F0aW9ucyA9IGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgLy8gY29uc29sZS5sb2cocmVxLnVzZXIpO1xuICAgIC8vIE9ubHkgcmV0dXJuIG9uZSBtZXNzYWdlIGZyb20gZWFjaCBjb252ZXJzYXRpb24gdG8gZGlzcGxheSBhcyBzbmlwcGV0XG4gICAgQ29udmVyc2F0aW9uLmZpbmQoeyBwYXJ0aWNpcGFudHM6IHJlcS51c2VyLl9pZCB9KVxuICAgICAgICAuc2VsZWN0KCdfaWQnKVxuICAgICAgICAuZXhlYyhmdW5jdGlvbihlcnIsIGNvbnZlcnNhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc2VuZCh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHVwIGVtcHR5IGFycmF5IHRvIGhvbGQgY29udmVyc2F0aW9ucyArIG1vc3QgcmVjZW50IG1lc3NhZ2VcbiAgICAgICAgICAgIGxldCBmdWxsQ29udmVyc2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgY29udmVyc2F0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbnZlcnNhdGlvbikge1xuICAgICAgICAgICAgICAgIE1lc3NhZ2UuZmluZCh7ICdjb252ZXJzYXRpb25JZCc6IGNvbnZlcnNhdGlvbi5faWQgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoJy1jcmVhdGVkQXQnKVxuICAgICAgICAgICAgICAgICAgICAubGltaXQoMSlcbiAgICAgICAgICAgICAgICAgICAgLnBvcHVsYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiYXV0aG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKGZ1bmN0aW9uKGVyciwgbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbENvbnZlcnNhdGlvbnMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdWxsQ29udmVyc2F0aW9ucy5sZW5ndGggPT09IGNvbnZlcnNhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29udmVyc2F0aW9uczogZnVsbENvbnZlcnNhdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xufVxubW9kdWxlLmV4cG9ydHMuZ2V0Q29udmVyc2F0aW9uID0gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICBNZXNzYWdlLmZpbmQoeyBjb252ZXJzYXRpb25JZDogcmVxLnBhcmFtcy5jb252ZXJzYXRpb25JZCB9KVxuICAgICAgICAuc2VsZWN0KCdjcmVhdGVkQXQgYm9keSBhdXRob3InKVxuICAgICAgICAuc29ydCgnLWNyZWF0ZWRBdCcpXG4gICAgICAgIC5wb3B1bGF0ZSh7XG4gICAgICAgICAgICBwYXRoOiAnYXV0aG9yJyxcbiAgICAgICAgICAgIHNlbGVjdDogJ25hbWUnXG4gICAgICAgIH0pXG4gICAgICAgIC5leGVjKGZ1bmN0aW9uKGVyciwgbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc2VuZCh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb252ZXJzYXRpb246IG1lc3NhZ2VzIH0pO1xuICAgICAgICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzLm5ld0NvbnZlcnNhdGlvbiA9IGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgaWYgKCFyZXEucGFyYW1zLnJlY2lwaWVudCkge1xuICAgICAgICByZXMuc3RhdHVzKDQyMikuc2VuZCh7IGVycm9yOiAnUGxlYXNlIGNob29zZSBhIHZhbGlkIHJlY2lwaWVudCBmb3IgeW91ciBtZXNzYWdlLicgfSk7XG4gICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXEuYm9keS5jb21wb3NlZE1lc3NhZ2UpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MjIpLnNlbmQoeyBlcnJvcjogJ1BsZWFzZSBlbnRlciBhIG1lc3NhZ2UuJyB9KTtcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBuZXcgQ29udmVyc2F0aW9uKHtcbiAgICAgICAgcGFydGljaXBhbnRzOiBbcmVxLnVzZXIuX2lkLCByZXEucGFyYW1zLnJlY2lwaWVudF1cbiAgICB9KTtcblxuICAgIGNvbnZlcnNhdGlvbi5zYXZlKGZ1bmN0aW9uKGVyciwgbmV3Q29udmVyc2F0aW9uKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uoe1xuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQ6IG5ld0NvbnZlcnNhdGlvbi5faWQsXG4gICAgICAgICAgICBib2R5OiByZXEuYm9keS5jb21wb3NlZE1lc3NhZ2UsXG4gICAgICAgICAgICBhdXRob3I6IHJlcS51c2VyLl9pZFxuICAgICAgICB9KTtcblxuICAgICAgICBtZXNzYWdlLnNhdmUoZnVuY3Rpb24oZXJyLCBuZXdNZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0NvbnZlcnNhdGlvbiBzdGFydGVkIScsIGNvbnZlcnNhdGlvbklkOiBjb252ZXJzYXRpb24uX2lkIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cy5zZW5kUmVwbHkgPSBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICBjb25zdCByZXBseSA9IG5ldyBNZXNzYWdlKHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiByZXEucGFyYW1zLmNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgYm9keTogcmVxLmJvZHkuY29tcG9zZWRNZXNzYWdlLFxuICAgICAgICAgICAgYXV0aG9yOiByZXEudXNlci5faWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVwbHkuc2F2ZShmdW5jdGlvbihlcnIsIHNlbnRSZXBseSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdSZXBseSBzdWNjZXNzZnVsbHkgc2VudCEnIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChuZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIERFTEVURSBSb3V0ZSB0byBEZWxldGUgQ29udmVyc2F0aW9uXG5tb2R1bGUuZXhwb3J0cy5kZWxldGVDb252ZXJzYXRpb24gPSBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgIENvbnZlcnNhdGlvbi5maW5kT25lQW5kUmVtb3ZlKHtcbiAgICAgICAgJGFuZDogW1xuICAgICAgICAgICAgeyAnX2lkJzogcmVxLnBhcmFtcy5jb252ZXJzYXRpb25JZCB9LCB7ICdwYXJ0aWNpcGFudHMnOiByZXEudXNlci5faWQgfVxuICAgICAgICBdXG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdDb252ZXJzYXRpb24gcmVtb3ZlZCEnIH0pO1xuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0pO1xufVxuXG4vLyAvLyBQVVQgUm91dGUgdG8gVXBkYXRlIE1lc3NhZ2Vcbi8vIGV4cG9ydHMudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4vLyAgICAgQ29udmVyc2F0aW9uLmZpbmQoe1xuLy8gICAgICAgICAkYW5kOiBbXG4vLyAgICAgICAgICAgICB7ICdfaWQnOiByZXEucGFyYW1zLm1lc3NhZ2VJZCB9LCB7ICdhdXRob3InOiByZXEudXNlci5faWQgfVxuLy8gICAgICAgICBdXG4vLyAgICAgfSwgZnVuY3Rpb24oZXJyLCBtZXNzYWdlKSB7XG4vLyAgICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVyciB9KTtcbi8vICAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBtZXNzYWdlLmJvZHkgPSByZXEuYm9keS5jb21wb3NlZE1lc3NhZ2U7XG5cbi8vICAgICAgICAgbWVzc2FnZS5zYXZlKGZ1bmN0aW9uKGVyciwgdXBkYXRlZE1lc3NhZ2UpIHtcbi8vICAgICAgICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgICAgICAgICByZXMuc2VuZCh7IGVycm9yOiBlcnIgfSk7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTWVzc2FnZSB1cGRhdGVkIScgfSk7XG4vLyAgICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH0iXX0=

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Dependencies

var session = __webpack_require__(21);
var bodyParser = __webpack_require__(14);
var morgan = __webpack_require__(26);
var mongoose = __webpack_require__(0);
var passport = __webpack_require__(5);
var http = __webpack_require__(23);
var https = __webpack_require__(24);
var nunjucks = __webpack_require__(29);
var express = __webpack_require__(4);
var app = express();
var fs = __webpack_require__(9);

var MongoStore = __webpack_require__(15)(session);
var flash = __webpack_require__(20);
var cookieParser = __webpack_require__(16);
var dotenv = __webpack_require__(18);
var expressValidator = __webpack_require__(22);
var config = __webpack_require__(8); // get db config file
var PORT = process.env.PORT || 3000;
var methodOverride = __webpack_require__(25);
var cors = __webpack_require__(17);
var path = __webpack_require__(30);
var errorHandler = __webpack_require__(19);
var PostController = __webpack_require__(2);
var multer = __webpack_require__(27);
// var sslOptions = {
//     key: fs.readFileSync(path.resolve('./server/localhost.key')),
//     // cert: fs.readFileSync(path.resolve('./server/localhost.csr'))
// };
var server = http.createServer(app);
var io = __webpack_require__(31)(server);

// google analitics
var ua = __webpack_require__(32);
var visitor = ua('UA-97074565-1');
visitor.pageview("/").send();

var root = process.cwd();

dotenv.load({ path: '.env.config' });

var passportConfig = __webpack_require__(10);

// console.log(passportConfig.isAuthenticated);
// Models
var UserModel = __webpack_require__(3); // get the mongoose model
var MessageModel = __webpack_require__(1);
// const RoomsModel       = require('./server/models/rooms');


// app.use('/uploads', express.static(root + '/uploads'));
var uuid = __webpack_require__(28);

io.on('connection', function (client) {
    io.sockets.emit('users-length', Object.keys(io.sockets.connected).length);
    client.on('disconnect', function () {
        io.sockets.emit('users-length', Object.keys(io.sockets.connected).length);
    });

    console.log('public socket connected');
});
//   client.on('join', (user) => {
//         console.log(user);
//         // people[client.id] = { "name": name, "room": roomID };
//         // client.emit("update", "You have connected to the server.");
//         // socket.sockets.emit("update", people[client.id].name + " is online.")
//         // socket.sockets.emit("update-people", people);
//         // client.emit("roomList", { rooms: rooms });
//         // clients.push(client);

//     });;


//     client.on('message', function(data) {
//         console.log(data);
//     });


app.use(function (req, res, next) {
    res.locals.url = req.protocol + '://' + req.get('host');
    next();
});

app.set('views', path.join(root, '/public/templates'));

nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});
app.set('view engine', 'nunjucks');

// app.use(multer({ dest: root + '/dist/uploads/' }).any());
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(root + '/dist'));
app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(cors());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 24 * 60 * 60
    }),
    rolling: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        ephemeral: true,
        maxAge: 300000 //5min
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(expressValidator());
// log to console
app.use(morgan('dev'));
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.Promise = Promise;

mongoose.connection.on('error', function (err) {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

mongoose.connection.on('connected', function () {
    return console.log('mongo connected');
});

// var count = 0;


// locals
// app.use('*', (req, res, next) => {
//   res.locals.posts = PostController.listAllPublic;
//   // console.log(PostController.listAllPublic);
//   next();
// });


//----- ROUTES-------
// app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
app.get('/admin*', function (req, res, next) {
    return res.sendFile(root + '/dist/admin.html');
});
// admin routes
app.use('/api/admin', __webpack_require__(11));
app.use('/', __webpack_require__(12));
// public routes
app.use('/', __webpack_require__(13));

// 404
app.get('*', function (req, res) {
    return res.status(404).render('404');
});

// console.log(io);
app.use(errorHandler());
server.listen(PORT, function () {
    return console.log('Listen on port: https://localhost:' + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbInNlc3Npb24iLCJyZXF1aXJlIiwiYm9keVBhcnNlciIsIm1vcmdhbiIsIm1vbmdvb3NlIiwicGFzc3BvcnQiLCJodHRwIiwiaHR0cHMiLCJudW5qdWNrcyIsImV4cHJlc3MiLCJhcHAiLCJmcyIsIk1vbmdvU3RvcmUiLCJmbGFzaCIsImNvb2tpZVBhcnNlciIsImRvdGVudiIsImV4cHJlc3NWYWxpZGF0b3IiLCJjb25maWciLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIm1ldGhvZE92ZXJyaWRlIiwiY29ycyIsInBhdGgiLCJlcnJvckhhbmRsZXIiLCJQb3N0Q29udHJvbGxlciIsIm11bHRlciIsInNlcnZlciIsImNyZWF0ZVNlcnZlciIsImlvIiwidWEiLCJ2aXNpdG9yIiwicGFnZXZpZXciLCJzZW5kIiwicm9vdCIsImN3ZCIsImxvYWQiLCJwYXNzcG9ydENvbmZpZyIsIlVzZXJNb2RlbCIsIk1lc3NhZ2VNb2RlbCIsInV1aWQiLCJvbiIsImNsaWVudCIsInNvY2tldHMiLCJlbWl0IiwiT2JqZWN0Iiwia2V5cyIsImNvbm5lY3RlZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwibG9jYWxzIiwidXJsIiwicHJvdG9jb2wiLCJnZXQiLCJzZXQiLCJqb2luIiwiY29uZmlndXJlIiwiYXV0b2VzY2FwZSIsIm5vQ2FjaGUiLCJ3YXRjaCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInN0YXRpYyIsImpzb24iLCJTRVNTSU9OX1NFQ1JFVCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwic2VjcmV0Iiwic3RvcmUiLCJtb25nb29zZUNvbm5lY3Rpb24iLCJjb25uZWN0aW9uIiwidHRsIiwicm9sbGluZyIsImNvb2tpZSIsImh0dHBPbmx5IiwiZXBoZW1lcmFsIiwibWF4QWdlIiwiaW5pdGlhbGl6ZSIsImNvbm5lY3QiLCJNT05HT0RCX1VSSSIsIk1PTkdPTEFCX1VSSSIsIlByb21pc2UiLCJlcnIiLCJlcnJvciIsImNoYWxrIiwicmVkIiwiZXhpdCIsInNlbmRGaWxlIiwic3RhdHVzIiwicmVuZGVyIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBLElBQU1BLFVBQVVDLFFBQVEsaUJBQVIsQ0FBaEI7QUFDQSxJQUFNQyxhQUFhRCxRQUFRLGFBQVIsQ0FBbkI7QUFDQSxJQUFNRSxTQUFTRixRQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1HLFdBQVdILFFBQVEsVUFBUixDQUFqQjtBQUNBLElBQU1JLFdBQVdKLFFBQVEsVUFBUixDQUFqQjtBQUNBLElBQU1LLE9BQU9MLFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTU0sUUFBUU4sUUFBUSxPQUFSLENBQWQ7QUFDQSxJQUFNTyxXQUFXUCxRQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNUSxVQUFVUixRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNUyxNQUFNRCxTQUFaO0FBQ0EsSUFBTUUsS0FBS1YsUUFBUSxJQUFSLENBQVg7O0FBRUEsSUFBTVcsYUFBYVgsUUFBUSxlQUFSLEVBQXlCRCxPQUF6QixDQUFuQjtBQUNBLElBQU1hLFFBQVFaLFFBQVEsZUFBUixDQUFkO0FBQ0EsSUFBTWEsZUFBZWIsUUFBUSxlQUFSLENBQXJCO0FBQ0EsSUFBTWMsU0FBU2QsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFNZSxtQkFBbUJmLFFBQVEsbUJBQVIsQ0FBekI7QUFDQSxJQUFNZ0IsU0FBU2hCLFFBQVEsbUJBQVIsQ0FBZixDLENBQTZDO0FBQzdDLElBQU1pQixPQUFPQyxRQUFRQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7QUFDQSxJQUFNRyxpQkFBaUJwQixRQUFRLGlCQUFSLENBQXZCO0FBQ0EsSUFBTXFCLE9BQU9yQixRQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1zQixPQUFPdEIsUUFBUSxNQUFSLENBQWI7QUFDQSxJQUFNdUIsZUFBZXZCLFFBQVEsY0FBUixDQUFyQjtBQUNBLElBQU13QixpQkFBaUJ4QixR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RUFBbUIsVUFBQ04sR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVg7QUFBQSxXQUFvQkQsSUFBSXVDLFFBQUosQ0FBYTFELE9BQU8sa0JBQXBCLENBQXBCO0FBQUEsQ0FBbkI7QUFDQTtBQUNBeEIsSUFBSXlDLEdBQUosQ0FBUSxZQUFSLEVBQXNCbEQsUUFBUSx1QkFBUixDQUF0QjtBQUNBUyxJQUFJeUMsR0FBSixDQUFRLEdBQVIsRUFBYWxELFFBQVEsc0JBQVIsQ0FBYjtBQUNBO0FBQ0FTLElBQUl5QyxHQUFKLENBQVEsR0FBUixFQUFhbEQsUUFBUSx3QkFBUixDQUFiOztBQUVBO0FBQ0FTLElBQUlnRCxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNOLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFdBQWNBLElBQUl3QyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBZDtBQUFBLENBQWI7O0FBR0E7QUFDQXBGLElBQUl5QyxHQUFKLENBQVEzQixjQUFSO0FBQ0FHLE9BQU9vRSxNQUFQLENBQWM3RSxJQUFkLEVBQW9CO0FBQUEsV0FBTStCLFFBQVFDLEdBQVIsd0NBQWlEaEMsSUFBakQsQ0FBTjtBQUFBLENBQXBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuLy8gRGVwZW5kZW5jaWVzXG5jb25zdCBzZXNzaW9uID0gcmVxdWlyZSgnZXhwcmVzcy1zZXNzaW9uJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmNvbnN0IG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IG51bmp1Y2tzID0gcmVxdWlyZSgnbnVuanVja3MnKTtcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IE1vbmdvU3RvcmUgPSByZXF1aXJlKCdjb25uZWN0LW1vbmdvJykoc2Vzc2lvbik7XG5jb25zdCBmbGFzaCA9IHJlcXVpcmUoJ2V4cHJlc3MtZmxhc2gnKTtcbmNvbnN0IGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuY29uc3QgZXhwcmVzc1ZhbGlkYXRvciA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9kYXRhYmFzZScpOyAvLyBnZXQgZGIgY29uZmlnIGZpbGVcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBtZXRob2RPdmVycmlkZSA9IHJlcXVpcmUoJ21ldGhvZC1vdmVycmlkZScpO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBlcnJvckhhbmRsZXIgPSByZXF1aXJlKCdlcnJvcmhhbmRsZXInKTtcbmNvbnN0IFBvc3RDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcycpO1xuY29uc3QgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG4vLyB2YXIgc3NsT3B0aW9ucyA9IHtcbi8vICAgICBrZXk6IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoJy4vc2VydmVyL2xvY2FsaG9zdC5rZXknKSksXG4vLyAgICAgLy8gY2VydDogZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZSgnLi9zZXJ2ZXIvbG9jYWxob3N0LmNzcicpKVxuLy8gfTtcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG52YXIgaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8nKShzZXJ2ZXIpO1xuXG5cbi8vIGdvb2dsZSBhbmFsaXRpY3NcbmNvbnN0IHVhID0gcmVxdWlyZSgndW5pdmVyc2FsLWFuYWx5dGljcycpO1xuY29uc3QgdmlzaXRvciA9IHVhKCdVQS05NzA3NDU2NS0xJyk7XG52aXNpdG9yLnBhZ2V2aWV3KFwiL1wiKS5zZW5kKCk7XG5cblxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5cbmRvdGVudi5sb2FkKHsgcGF0aDogJy5lbnYuY29uZmlnJyB9KTtcblxuXG5cblxuY29uc3QgcGFzc3BvcnRDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9wYXNzcG9ydCcpO1xuXG4vLyBjb25zb2xlLmxvZyhwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQpO1xuLy8gTW9kZWxzXG5jb25zdCBVc2VyTW9kZWwgPSByZXF1aXJlKCcuL21vZGVscy91c2VyJyk7IC8vIGdldCB0aGUgbW9uZ29vc2UgbW9kZWxcbmNvbnN0IE1lc3NhZ2VNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWxzL21lc3NhZ2UnKTtcbi8vIGNvbnN0IFJvb21zTW9kZWwgICAgICAgPSByZXF1aXJlKCcuL3NlcnZlci9tb2RlbHMvcm9vbXMnKTtcblxuXG4vLyBhcHAudXNlKCcvdXBsb2FkcycsIGV4cHJlc3Muc3RhdGljKHJvb3QgKyAnL3VwbG9hZHMnKSk7XG52YXIgdXVpZCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpO1xuXG5cbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgaW8uc29ja2V0cy5lbWl0KCd1c2Vycy1sZW5ndGgnLCBPYmplY3Qua2V5cyhpby5zb2NrZXRzLmNvbm5lY3RlZCkubGVuZ3RoKTtcbiAgICBjbGllbnQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaW8uc29ja2V0cy5lbWl0KCd1c2Vycy1sZW5ndGgnLCBPYmplY3Qua2V5cyhpby5zb2NrZXRzLmNvbm5lY3RlZCkubGVuZ3RoKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdwdWJsaWMgc29ja2V0IGNvbm5lY3RlZCcpO1xufSk7XG4vLyAgIGNsaWVudC5vbignam9pbicsICh1c2VyKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuLy8gICAgICAgICAvLyBwZW9wbGVbY2xpZW50LmlkXSA9IHsgXCJuYW1lXCI6IG5hbWUsIFwicm9vbVwiOiByb29tSUQgfTtcbi8vICAgICAgICAgLy8gY2xpZW50LmVtaXQoXCJ1cGRhdGVcIiwgXCJZb3UgaGF2ZSBjb25uZWN0ZWQgdG8gdGhlIHNlcnZlci5cIik7XG4vLyAgICAgICAgIC8vIHNvY2tldC5zb2NrZXRzLmVtaXQoXCJ1cGRhdGVcIiwgcGVvcGxlW2NsaWVudC5pZF0ubmFtZSArIFwiIGlzIG9ubGluZS5cIilcbi8vICAgICAgICAgLy8gc29ja2V0LnNvY2tldHMuZW1pdChcInVwZGF0ZS1wZW9wbGVcIiwgcGVvcGxlKTtcbi8vICAgICAgICAgLy8gY2xpZW50LmVtaXQoXCJyb29tTGlzdFwiLCB7IHJvb21zOiByb29tcyB9KTtcbi8vICAgICAgICAgLy8gY2xpZW50cy5wdXNoKGNsaWVudCk7XG5cbi8vICAgICB9KTs7XG5cblxuLy8gICAgIGNsaWVudC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgfSk7XG5cblxuXG5hcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmxvY2Fscy51cmwgPSByZXEucHJvdG9jb2wgKyAnOi8vJyArIHJlcS5nZXQoJ2hvc3QnKTtcbiAgICBuZXh0KCk7XG59KTtcblxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4ocm9vdCwgJy9wdWJsaWMvdGVtcGxhdGVzJykpO1xuXG5udW5qdWNrcy5jb25maWd1cmUoYXBwLmdldCgndmlld3MnKSwge1xuICAgIGF1dG9lc2NhcGU6IHRydWUsXG4gICAgbm9DYWNoZTogdHJ1ZSxcbiAgICB3YXRjaDogdHJ1ZSxcbiAgICBleHByZXNzOiBhcHBcbn0pO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnbnVuanVja3MnKTtcblxuLy8gYXBwLnVzZShtdWx0ZXIoeyBkZXN0OiByb290ICsgJy9kaXN0L3VwbG9hZHMvJyB9KS5hbnkoKSk7XG4vLyBnZXQgb3VyIHJlcXVlc3QgcGFyYW1ldGVyc1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHJvb3QgKyAnL2Rpc3QnKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgMSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcihwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCkpXG5hcHAudXNlKHNlc3Npb24oe1xuICAgIHJlc2F2ZTogdHJ1ZSxcbiAgICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVULFxuICAgIHN0b3JlOiBuZXcgTW9uZ29TdG9yZSh7XG4gICAgICAgIG1vbmdvb3NlQ29ubmVjdGlvbjogbW9uZ29vc2UuY29ubmVjdGlvbixcbiAgICAgICAgdHRsOiAyNCAqIDI0ICogNjAgKiA2MFxuICAgIH0pLFxuICAgIHJvbGxpbmc6IHRydWUsXG4gICAgY29va2llOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAvLyBzZWN1cmU6IHRydWUsXG4gICAgICAgIGVwaGVtZXJhbDogdHJ1ZSxcbiAgICAgICAgbWF4QWdlOiAzMDAwMDAgLy81bWluXG4gICAgfVxufSkpO1xuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuYXBwLnVzZShmbGFzaCgpKTtcbmFwcC51c2UoZXhwcmVzc1ZhbGlkYXRvcigpKTtcbi8vIGxvZyB0byBjb25zb2xlXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xubW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCBwcm9jZXNzLmVudi5NT05HT0xBQl9VUkkpO1xubW9uZ29vc2UuUHJvbWlzZSA9IFByb21pc2U7XG5cbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBjb25zb2xlLmxvZygnJXMgTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yLiBQbGVhc2UgbWFrZSBzdXJlIE1vbmdvREIgaXMgcnVubmluZy4nLCBjaGFsay5yZWQoJ+KclycpKTtcbiAgICBwcm9jZXNzLmV4aXQoKTtcbn0pO1xuXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnbW9uZ28gY29ubmVjdGVkJykpO1xuXG5cbi8vIHZhciBjb3VudCA9IDA7XG5cblxuLy8gbG9jYWxzXG4vLyBhcHAudXNlKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4vLyAgIHJlcy5sb2NhbHMucG9zdHMgPSBQb3N0Q29udHJvbGxlci5saXN0QWxsUHVibGljO1xuLy8gICAvLyBjb25zb2xlLmxvZyhQb3N0Q29udHJvbGxlci5saXN0QWxsUHVibGljKTtcbi8vICAgbmV4dCgpO1xuLy8gfSk7XG5cblxuXG4vLy0tLS0tIFJPVVRFUy0tLS0tLS1cbi8vIGFwcC5hbGwoJy9hcGkvdjEvKicsIFtyZXF1aXJlKCcuL21pZGRsZXdhcmVzL3ZhbGlkYXRlUmVxdWVzdCcpXSk7XG5hcHAuZ2V0KCcvYWRtaW4qJywgKHJlcSwgcmVzLCBuZXh0KSA9PiByZXMuc2VuZEZpbGUocm9vdCArICcvZGlzdC9hZG1pbi5odG1sJykpO1xuLy8gYWRtaW4gcm91dGVzXG5hcHAudXNlKCcvYXBpL2FkbWluJywgcmVxdWlyZSgnLi9yb3V0ZXMvYWRtaW4ucm91dGVzJykpO1xuYXBwLnVzZSgnLycsIHJlcXVpcmUoJy4vcm91dGVzL2F1dGgucm91dGVzJykpO1xuLy8gcHVibGljIHJvdXRlc1xuYXBwLnVzZSgnLycsIHJlcXVpcmUoJy4vcm91dGVzL3B1YmxpYy5yb3V0ZXMnKSk7XG5cbi8vIDQwNFxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4gcmVzLnN0YXR1cyg0MDQpLnJlbmRlcignNDA0JykpO1xuXG5cbi8vIGNvbnNvbGUubG9nKGlvKTtcbmFwcC51c2UoZXJyb3JIYW5kbGVyKCkpO1xuc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgTGlzdGVuIG9uIHBvcnQ6IGh0dHBzOi8vbG9jYWxob3N0OiR7UE9SVH1gKSk7Il19

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
var ConversationSchema = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Conversation', ConversationSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9tb2RlbHMvY29udmVyc2F0aW9uLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsIkNvbnZlcnNhdGlvblNjaGVtYSIsInBhcnRpY2lwYW50cyIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjtBQUFBLElBQ0lDLFNBQVNGLFNBQVNFLE1BRHRCOztBQUdBO0FBQ0EsSUFBTUMscUJBQXFCLElBQUlELE1BQUosQ0FBVztBQUNsQ0Usa0JBQWMsQ0FBQyxFQUFFQyxNQUFNSCxPQUFPSSxLQUFQLENBQWFDLFFBQXJCLEVBQStCQyxLQUFLLE1BQXBDLEVBQUQ7QUFEb0IsQ0FBWCxDQUEzQjs7QUFJQUMsT0FBT0MsT0FBUCxHQUFpQlYsU0FBU1csS0FBVCxDQUFlLGNBQWYsRUFBK0JSLGtCQUEvQixDQUFqQiIsImZpbGUiOiJjb252ZXJzYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcmVrL0Rlc2t0b3AvQXBsaWthY2plL2NtcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKSxcbiAgICBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbi8vIFNjaGVtYSBkZWZpbmVzIGhvdyBjaGF0IG1lc3NhZ2VzIHdpbGwgYmUgc3RvcmVkIGluIE1vbmdvREJcbmNvbnN0IENvbnZlcnNhdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIHBhcnRpY2lwYW50czogW3sgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJyB9XSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdDb252ZXJzYXRpb24nLCBDb252ZXJzYXRpb25TY2hlbWEpOyJdfQ==

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("mongoose-slug-hero");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map