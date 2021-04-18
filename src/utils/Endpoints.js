class Endpoints {
    //static BASE = 'http://localhost:8081/';
    static BASE = 'https://api.minecrossing.xyz/';

    static BLOG_POSTS = this.BASE + 'blogposts/';
    static BLOG_POSTS_PREVIEW = this.BLOG_POSTS + 'preview/';
    static BLOG_POSTS_PREVIEW_ALL = this.BLOG_POSTS + 'previewAll/';
    static BLOG_POSTS_CREATE = this.BLOG_POSTS + 'create/';
    static BLOG_POSTS_DELETE = this.BLOG_POSTS + 'delete/';
    static BLOG_POSTS_GET = this.BLOG_POSTS + 'get/';
    static BLOG_POSTS_GET_COMMENTS = this.BLOG_POSTS + 'getComments/';
    static BLOG_POSTS_CREATE_COMMENT = this.BLOG_POSTS + 'createComment/';
    static BLOG_POSTS_DELETE_COMMENT = this.BLOG_POSTS + 'deleteComment/';

    static CHECK_AUTH = this.BASE + 'checkAuth/';
    static LOGOUT = this.BASE + 'logout/';
}

export default Endpoints;
