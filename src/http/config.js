/** global apiCfg **/
export const ApiCfg = {
    baseUrl: 
        process.env.API_ENV == "dev" ? 'https://yapi.boxuegu.cn/mock/209' : 
            process.env.API_ENV == "test" ? 'https://yapi.boxuegu.cn/mock/209' : 
                'https://yapi.boxuegu.cn/mock/209'
};