"use strict";const t=require("../../utils/request.js");exports.getCmsBannerList=function(e){return t.request({url:"cms/banner/list",method:"get",params:e?{position:e}:void 0,noSkipLogin:!0})};
