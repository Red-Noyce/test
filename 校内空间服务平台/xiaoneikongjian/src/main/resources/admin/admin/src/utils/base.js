const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoneikongjian/",
            name: "xiaoneikongjian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoneikongjian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校内场地（设施）使用管理网站"
        } 
    }
}
export default base
