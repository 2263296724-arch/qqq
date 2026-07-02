"use strict";const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};exports.escapeHtml=function(e){return null==e?"":String(e).replace(/[&<>"']/g,e=>t[e]??e)};
