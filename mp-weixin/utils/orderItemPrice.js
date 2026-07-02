"use strict";exports.getOrderItemOriginPrice=function(r){const i=r.originPrice;if(null!=i&&""!==i){const r=Number(i);if(Number.isFinite(r)&&r>=0)return i}return r.price??0};
