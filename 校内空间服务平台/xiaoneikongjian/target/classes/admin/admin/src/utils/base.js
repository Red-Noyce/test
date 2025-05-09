const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanchangdi/",
            name: "xiaoyuanchangdi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanchangdi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校内空间服务平台"
        } 
    }
}
export default base
