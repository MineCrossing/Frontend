class Endpoints {
    static BASE = 'http://localhost:8081/';
   // static BASE = 'https://api.minecrossing.xyz/';
    static BLOG_POSTS = this.BASE + 'blogposts/';
    static BLOG_POSTS_PREVIEW = this.BLOG_POSTS + 'preview/';
    static BLOG_POSTS_PREVIEW_ALL = this.BLOG_POSTS + 'previewAll/';
    static BLOG_POSTS_CREATE = this.BLOG_POSTS + 'create/';
}

export default Endpoints;
