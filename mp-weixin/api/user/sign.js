"use strict";const e=require("../../utils/request.js");exports.getSignList=(s,t)=>e.request({url:s,method:"get",params:t}),exports.signIn=()=>e.request({url:"user/sign/sign",method:"get"});
