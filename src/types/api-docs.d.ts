/**
 * 整个接口文档的数据
 */
type ApiDocs = {
    /**
     * swagger 版本号
     */
    swagger: string;

    /**
     * 文档信息
     */
    info: {
        description: string;
        version: string;
        title: string;
        termsOfService: string;
        contact: {
            name: string;
            url: string;
            email: string;
        };
        license: {
            name: string;
            url: string;
        };
    };

    host: string;

    basePath: string;

    /**
     * 接口模块
     */
    tags: {
        /**
         * 模块名称
         */
        name: string;

        "x-order": string;
    }[];

    /**
     * 全部接口的列表
     */
    paths: Record<
        string,
        {
            get?: {
                /**
                 * 关联的模块名称
                 */
                tags: string[];
                summary: string;
                operationId: string;
                produces: string[];
                responses: Record<
                    string,
                    {
                        description: string;
                        schema?: {
                            $ref: "#/definitions/R«Kv»";
                            originalRef: "R«Kv»";
                        };
                    }
                >;

                security: [
                    {
                        "": [];
                    }
                ];
                deprecated: false;
                "x-order": "2147483647";
            };

            post?: {
                tags: ["【驾驶舱登录】"];
                summary: "获取当前登录用户的信息";
                description: "获取当前登录用户的信息";
                operationId: "userInfoUsingPOST";
                consumes: ["application/json"];
                produces: ["*/*"];
                parameters: [
                    {
                        in: "body";
                        name: "loginForm";
                        description: "loginForm";
                        required: true;
                        schema: {
                            $ref: "#/definitions/LoginForm";
                            originalRef: "LoginForm";
                        };
                    }
                ];
                responses: {
                    "200": {
                        description: "OK";
                        schema: {
                            $ref: "#/definitions/R«BaseUser»";
                            originalRef: "R«BaseUser»";
                        };
                    };
                    "201": {
                        description: "Created";
                    };
                    "401": {
                        description: "Unauthorized";
                    };
                    "403": {
                        description: "Forbidden";
                    };
                    "404": {
                        description: "Not Found";
                    };
                };
                security: [
                    {
                        "": [];
                    }
                ];
                deprecated: false;
                "x-order": "1";
            };
        }
    >;

    securityDefinitions: {
        "": {
            type: "oauth2";
        };
    };

    definitions: Record<
        string,
        {
            type: "object";
            properties: Record<
                string,
                {
                    type: string;
                    format?: string;
                    description?: string;
                }
            >;
            title: string;
            description: string;
        }
    >;
    "x-openapi": {
        "x-markdownFiles": null;
        "x-setting": {
            language: "zh-CN";
            enableSwaggerModels: true;
            swaggerModelName: "Swagger Models";
            enableReloadCacheParameter: false;
            enableAfterScript: true;
            enableDocumentManage: true;
            enableVersion: false;
            enableRequestCache: true;
            enableFilterMultipartApis: false;
            enableFilterMultipartApiMethodType: "POST";
            enableHost: false;
            enableHostText: "http://localhost";
            enableDynamicParameter: false;
            enableDebug: true;
            enableFooter: false;
            enableFooterCustom: true;
            footerCustomContent: "Copyright © 2021 SpringBlade All Rights Reserved";
            enableSearch: true;
            enableOpenApi: true;
            enableHomeCustom: false;
            homeCustomLocation: null;
            enableGroup: true;
        };
    };
};

/**
 * 接口文档的历史记录
 */
type ApiDocsHistory = {
    /**
     * 接口文档的数据
     */
    apiDocs: ApiDocs;

    /**
     * 检测到文档更新的时间（非实际接口更新时间）
     */
    diffTime: string;
}[];
