declare global {
    /**
     * deep-diff 插件
     * @see https://www.npmjs.com/package/deep-diff
     */
    var DeepDiff: typeof import("deep-diff");

    // /**
    //  * 接口文档的默认 BaseUrl
    //  * @default undefined
    //  */
    // var apiDefaultBaseUrl: string | undefined;
}

// 这行代码使得这个文件被视为一个模块，从而允许使用 declare global
export {};
