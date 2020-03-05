define(["react","@grafana/ui","@grafana/data","emotion","@grafana/runtime","moment"],(function(e,t,n,r,a,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var r,a,o,i,u,s=n(2),c=n(0),l=n.n(c),f=n(1),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},d=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},y=/code=([\w]+)/,m=function(e){function t(n){var r=e.call(this,n)||this;r.updateDatasource=function(e){return d(r,void 0,void 0,(function(){var t,n;return v(this,(function(r){for(t in e.jsonData)0===e.jsonData[t].length&&delete e.jsonData[t];for(n in e.secureJsonData)0===e.secureJsonData[n].length&&delete e.secureJsonData[n];return this.props.onOptionsChange(h({},e)),[2]}))}))},r.onResetAccessToken=function(){r.updateDatasource(h(h({},r.state.config),{secureJsonFields:h(h({},r.state.config.secureJsonFields),{accessToken:!1})}))},r.onResetClientSecret=function(){r.updateDatasource(h(h({},r.state.config),{secureJsonFields:h(h({},r.state.config.secureJsonFields),{clientSecret:!1})}))},r.onResetAuthCode=function(){r.updateDatasource(h(h({},r.state.config),{secureJsonFields:h(h({},r.state.config.secureJsonFields),{authCode:!1})}))},r.onAccessTokenChange=function(e){r.updateDatasource(h(h({},r.state.config),{secureJsonData:h(h({},r.state.config.secureJsonData),{accessToken:e})}))},r.onClientIDChange=function(e){r.updateDatasource(h(h({},r.state.config),{jsonData:h(h({},r.state.config.jsonData),{clientID:e})}))},r.onClientSecretChange=function(e){r.updateDatasource(h(h({},r.state.config),{secureJsonData:h(h({},r.state.config.secureJsonData),{clientSecret:e})}))},r.onAuthCodeChange=function(e){r.updateDatasource(h(h({},r.state.config),{secureJsonData:h(h({},r.state.config.secureJsonData),{authCode:e})}))},r.isLocationContainsCode=function(){return y.test(window.location.search)},r.isLocationContainsError=function(){return/error=/.test(window.location.search)},r.fillAuthCodeFromLocation=function(){var e=y.exec(window.location.search),t=e&&e.length&&e[1];r.updateDatasource(h(h({},r.state.config),{secureJsonData:h(h({},r.state.config.secureJsonData),{authCode:t})}))},r.getConnectWithStravaHref=function(){var e=window.location.origin+window.location.pathname;return"https://www.strava.com/oauth/authorize?client_id="+r.state.config.jsonData.clientID+"&response_type=code&redirect_uri="+e+"&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all"};var a=r.props.options;return r.state={config:t.defaults(a)},r.updateDatasource(r.state.config),r}return p(t,e),t.getDerivedStateFromProps=function(e,n){return h(h({},n),{config:t.defaults(e.options)})},t.prototype.render=function(){var e=this,t=this.state.config,n=this.getConnectWithStravaHref();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"page-heading"},"Strava API Details"),l.a.createElement("div",{className:"gf-form-group"},l.a.createElement("div",{className:"gf-form-inline"},l.a.createElement("div",{className:"gf-form"},l.a.createElement(f.FormLabel,{className:"width-14"},"Client ID"),l.a.createElement("div",{className:"width-30"},l.a.createElement(f.Input,{className:"width-30",value:t.jsonData.clientID||"",onChange:function(t){return e.onClientIDChange(t.target.value)}})))),t.secureJsonFields.clientSecret?l.a.createElement("div",{className:"gf-form-inline"},l.a.createElement("div",{className:"gf-form"},l.a.createElement(f.FormLabel,{className:"width-14"},"Client Secret"),l.a.createElement(f.Input,{className:"width-25",placeholder:"Configured",disabled:!0})),l.a.createElement("div",{className:"gf-form"},l.a.createElement("div",{className:"max-width-30 gf-form-inline"},l.a.createElement(f.Button,{variant:"secondary",type:"button",onClick:this.onResetClientSecret},"Reset")))):l.a.createElement("div",{className:"gf-form-inline"},l.a.createElement("div",{className:"gf-form"},l.a.createElement(f.FormLabel,{className:"width-14"},"Client Secret"),l.a.createElement("div",{className:"width-30"},l.a.createElement(f.Input,{className:"width-30",value:t.secureJsonData.clientSecret||"",onChange:function(t){return e.onClientSecretChange(t.target.value)}}))))),l.a.createElement("div",{className:"gf-form-group"},l.a.createElement("a",{type:"button",href:n},l.a.createElement("img",{src:"public/plugins/grafana-strava-datasource/img/btn_strava_connectwith_orange.svg"}))))},t.defaults=function(e){return e.hasOwnProperty("secureJsonData")||(e.secureJsonData={}),e.hasOwnProperty("jsonData")||(e.jsonData={}),e.hasOwnProperty("secureJsonFields")||(e.secureJsonFields={}),e},t}(c.PureComponent);!function(e){e.TimeSeries="time_series",e.Table="table",e.WorldMap="worldmap"}(a||(a={})),function(e){e.No="no",e.Auto="auto",e.Hour="hour",e.Day="day",e.Week="week",e.Month="month"}(o||(o={})),function(e){e.Activities="Activities"}(i||(i={})),function(e){e.Distance="distance",e.MovingTime="moving_time",e.ElapsedTime="elapsed_time",e.ElevationGain="total_elevation_gain",e.AveragePower="average_watts"}(u||(u={}));var g,b,w=n(3),S=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},_=Object(f.stylesFactory)((function(e){return{athleteLabel:Object(w.css)(g||(g=S(["\n      height: 35px;\n      padding: 2px;\n      background-color: ",";\n    "],["\n      height: 35px;\n      padding: 2px;\n      background-color: ",";\n    "])),e.colors.dark4),athleteAvatar:Object(w.css)(b||(b=S(["\n      height: 32px;\n      border-radius: 50%;\n    "],["\n      height: 32px;\n      border-radius: 50%;\n    "])))}})),A=function(e){var t=e.athlete,n=Object(f.useTheme)(),r=_(n),a=Object(w.cx)("filter-table__avatar",r.athleteAvatar);return l.a.createElement("div",{className:"gf-form"},l.a.createElement("div",{className:r.athleteLabel},l.a.createElement("img",{className:a,src:t.profile_medium})),l.a.createElement(f.FormLabel,null,t.firstname," ",t.lastname))},T=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},C=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},D=[{value:i.Activities,label:"Activities",description:"Athlete Activities"}],O=[{value:u.Distance,label:"Distance"},{value:u.ElapsedTime,label:"Elapsed Time"},{value:u.MovingTime,label:"Moving Time"},{value:u.ElevationGain,label:"Elevation Gain"},{value:u.AveragePower,label:"Average Power"}],j=[{value:null,label:"All"},{value:"Run",label:"Run"},{value:"Ride",label:"Ride"},{value:"Other",label:"Other"}],q=[{label:"Time series",value:a.TimeSeries},{label:"Table",value:a.Table},{label:"World Map",value:a.WorldMap}],k=[{label:"Auto",value:o.Auto},{label:"No",value:o.No},{label:"Hour",value:o.Hour},{label:"Day",value:o.Day},{label:"Week",value:o.Week},{label:"Month",value:o.Month}],P={refId:"",athlete:{},queryType:i.Activities,activityType:null,activityStat:u.Distance,format:a.TimeSeries,interval:o.Auto},N=function(e){function t(t){var n=e.call(this,t)||this;return n.state=P,n.queryDefaults={format:a.TimeSeries,queryType:i.Activities,activityType:null,activityStat:u.Distance},n.getSelectedQueryType=function(){return D.find((function(e){return e.value===n.props.query.queryType}))},n.getSelectedActivityStat=function(){return O.find((function(e){return e.value===n.props.query.activityStat}))},n.getSelectedActivityType=function(){return j.find((function(e){return e.value===n.props.query.activityType}))},n.getFormatOption=function(){return q.find((function(e){return e.value===n.props.query.format}))},n.getIntervalOption=function(){return k.find((function(e){return e.value===n.props.query.interval}))},n.onQueryTypeChanged=function(e){var t=n.props.query;n.onChange(x(x({},t),{queryType:e.value}))},n.onActivityStatChanged=function(e){var t=n.props.query;n.onChange(x(x({},t),{activityStat:e.value}))},n.onActivityTypeChanged=function(e){var t=n.props.query;n.onChange(x(x({},t),{activityType:e.value}))},n.onFormatChange=function(e){var t=n.props.query;n.onChange(x(x({},t),{format:e.value}))},n.onIntervalChange=function(e){var t=n.props.query;n.onChange(x(x({},t),{interval:e.value}))},n}return T(t,e),t.prototype.componentDidMount=function(){return C(this,void 0,void 0,(function(){var e;return E(this,(function(t){switch(t.label){case 0:return[4,this.props.datasource.stravaApi.getAuthenticatedAthlete()];case 1:return e=t.sent(),this.setState({athlete:e}),[2]}}))}))},t.prototype.onChange=function(e){var t=this.props,n=t.onChange,r=t.onRunQuery;n(e),r()},t.prototype.render=function(){var e=this.props,t=(e.query,e.datasource,e.onChange,e.onRunQuery,e.data,this.state.athlete);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"gf-form-inline"},l.a.createElement(A,{athlete:t}),l.a.createElement(f.FormLabel,{width:5},"Type"),l.a.createElement(f.Select,{isSearchable:!1,width:10,value:this.getSelectedQueryType(),options:D,onChange:this.onQueryTypeChanged,className:"gf-form-select"}),l.a.createElement(f.FormLabel,{width:7},"Activity"),l.a.createElement(f.Select,{isSearchable:!1,width:10,value:this.getSelectedActivityType(),options:j,onChange:this.onActivityTypeChanged,className:"gf-form-select"}),l.a.createElement(f.FormLabel,{width:5},"Stat"),l.a.createElement(f.Select,{isSearchable:!1,width:10,value:this.getSelectedActivityStat(),options:O,onChange:this.onActivityStatChanged,className:"gf-form-select"})),l.a.createElement("div",{className:"gf-form-inline"},l.a.createElement(f.FormLabel,null,"Format"),l.a.createElement(f.Select,{isSearchable:!1,options:q,onChange:this.onFormatChange,value:this.getFormatOption()}),l.a.createElement(f.FormLabel,null,"Interval"),l.a.createElement(f.Select,{isSearchable:!1,options:k,onChange:this.onIntervalChange,value:this.getIntervalOption()})))},t}(c.PureComponent),F=n(4),R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},I=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},J=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},M=function(){function e(e){this.datasourceId=e,this.promises={}}return e.prototype.getAuthenticatedAthlete=function(e){return I(this,void 0,void 0,(function(){return J(this,(function(t){switch(t.label){case 0:return[4,this.tsdbRequest("athlete",e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getActivities=function(e){return I(this,void 0,void 0,(function(){return J(this,(function(t){switch(t.label){case 0:return[4,this.requestWithPagination("athlete/activities",e)];case 1:return[2,t.sent()]}}))}))},e.prototype.requestWithPagination=function(e,t){return I(this,void 0,void 0,(function(){var n,r,a,o,i;return J(this,(function(u){switch(u.label){case 0:n=[],r=[],a=1,o=t&&t.limit,i=t&&t.per_page||200,u.label=1;case 1:if(0===r.length&&1!==a||o&&n.length>=o)return[3,6];t=R(R({},t),{per_page:i,page:a}),u.label=2;case 2:return u.trys.push([2,4,,5]),[4,this.tsdbRequest(e,t)];case 3:return r=u.sent(),[3,5];case 4:throw u.sent();case 5:return n=n.concat(r),a++,[3,1];case 6:return[2,n]}}))}))},e.prototype.exchangeToken=function(e){return I(this,void 0,void 0,(function(){return J(this,(function(t){switch(t.label){case 0:return[4,this.tsdbAuthRequest({authCode:e})];case 1:return[2,t.sent()]}}))}))},e.prototype.request=function(e,t){return I(this,void 0,void 0,(function(){return J(this,(function(n){return[2,this.proxyfy(this._request,"_request",this)(e,t)]}))}))},e.prototype._request=function(e,t){return I(this,void 0,void 0,(function(){var n;return J(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Object(F.getBackendSrv)().datasourceRequest({url:this.apiUrl+"/strava/"+e,method:"GET",params:t})];case 1:return[2,r.sent().data];case 2:throw n=r.sent(),console.log(n),n;case 3:return[2]}}))}))},e.prototype.tsdbRequest=function(e,t){return I(this,void 0,void 0,(function(){return J(this,(function(n){return[2,this.proxyfy(this._tsdbRequest,"_tsdbRequest",this)(e,t)]}))}))},e.prototype._tsdbRequest=function(e,t){return I(this,void 0,void 0,(function(){var n,r,a;return J(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n={queries:[{datasourceId:this.datasourceId,queryType:"stravaAPI",target:{endpoint:e,params:t}}]},[4,Object(F.getBackendSrv)().datasourceRequest({url:"/api/tsdb/query",method:"POST",data:n})];case 1:return r=o.sent(),console.log(r),[2,this.handleTsdbResponse(r)];case 2:throw a=o.sent(),console.log(a),a;case 3:return[2]}}))}))},e.prototype.tsdbAuthRequest=function(e){return I(this,void 0,void 0,(function(){var t,n,r,a;return J(this,(function(o){switch(o.label){case 0:t="stravaAuth",n={queries:[{datasourceId:this.datasourceId,queryType:"stravaAuth",target:{params:e}}]},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(F.getBackendSrv)().datasourceRequest({url:"/api/tsdb/query",method:"POST",data:n})];case 2:return r=o.sent(),[2,this.handleTsdbResponse(r,t)];case 3:throw a=o.sent(),console.log(a),a;case 4:return[2]}}))}))},e.prototype.handleTsdbResponse=function(e,t){if(void 0===t&&(t="stravaAPI"),e&&(e.status>=400||e.status<0))throw Error(e.statusText);if(!e||!e.data||!e.data.results)return[];var n=e.data.results[t];if(n.error)throw Error(n.error);return n.meta},e.prototype.proxyfy=function(e,t,n){return this.promises[t]||(this.promises[t]={}),function(e,t,n){return function(){var r=L(arguments);return t[r]||(t[r]=Promise.resolve(e.apply(n,arguments).then((function(e){return t[r]=null,e})))),t[r]}}(e,this.promises[t],n)},e}();function L(e){return function(e){var t,n,r,a=0;if(0!==e.length)for(t=0,r=e.length;t<r;t++)n=e.charCodeAt(t),a=(a<<5)-a+n,a|=0;return a}(JSON.stringify(e))}var W=1e5;function G(e){return 1&e?~(e>>>1):e>>>1}var Q={decode:function(e){var t=[],n=0,r=0;return function(e,t){for(var n=0,r=0,a=0,o=0,i=0,u=0,s=0;s<e.length;s++)o=e.charCodeAt(s)-63,i|=(31&o)<<u,u+=5,o<32&&(1&++n?r=G(i):(a=G(i),t(r,a)),i=0,u=0)}(e,(function(e,a){n+=e,r+=a,t.push([n/W,r/W])})),t}},H=n(5),B=n.n(H),U=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),z=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},$=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},K=function(e){function t(t,n,r){var a=e.call(this,t)||this;return a.templateSrv=n,a.timeSrv=r,a.type="strava",a.datasourceId=t.id,a.apiUrl=t.url,a.stravaApi=new M(a.datasourceId),a}return t.$inject=["instanceSettings","templateSrv","timeSrv"],U(t,e),t.prototype.query=function(e){return z(this,void 0,void 0,(function(){var t,n,r,o,i,u,s,c,l;return $(this,(function(f){switch(f.label){case 0:return t=[],[4,this.stravaApi.getActivities({before:e.range.to.unix(),after:e.range.from.unix()})];case 1:for(n=f.sent(),r=0,o=e.targets;r<o.length;r++)switch(i=o[r],u=this.filterActivities(n,i.activityType),i.format){case a.Table:s=this.transformActivitiesToTable(u,i),t.push(s);break;case a.WorldMap:c=this.transformActivitiesToWorldMap(u,i),t.push(c);break;default:l=this.transformActivitiesToTimeseries(u,i,e.range),t.push(l)}return[2,{data:t}]}}))}))},t.prototype.testDatasource=function(){return z(this,void 0,void 0,(function(){var e,t;return $(this,(function(n){switch(n.label){case 0:if(!(e=this.getAuthCode()))return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.stravaApi.exchangeToken(e)];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),console.log(t),[3,4];case 4:return n.trys.push([4,6,,7]),[4,this.stravaApi.getActivities({per_page:2,limit:2})];case 5:return n.sent(),[2,{status:"success",message:"Data source is working"}];case 6:return n.sent(),[2,{status:"error",message:"Cannot connect to Strava API"}];case 7:return[2]}}))}))},t.prototype.getAuthCode=function(){var e=/code=([\w]+)/.exec(window.location.search);return e&&e.length&&e[1]},t.prototype.filterActivities=function(e,t){return t?e.filter((function(e){return"Other"===t?"Run"!==e.type&&"Ride"!==e.type:e.type===t})):e},t.prototype.transformActivitiesToTimeseries=function(e,t,n){for(var r=[],a=0,i=e;a<i.length;a++){var u=i[a];r.push([u[t.activityStat],Object(s.dateTime)(u.start_date).valueOf()])}if(r.sort((function(e,t){return e[1]-t[1]})),t.interval!==o.No){var c=t.interval&&t.interval!==o.Auto?function(e){switch(e.interval){case o.Hour:return X;case o.Day:return Y;case o.Week:return Z;case o.Month:default:return ee}}(t):function(e){var t=1e3*(e.to.unix()-e.from.unix());switch(!0){case t<=3456e5:return X;case t<=7776e6:return Y;case t<=31536e6:return Z;default:return ee}}(n);r=c>=ee?function(e,t){return ae(e,t,null,ue,se,re)}(r,n):c===Z?function(e,t){return ae(e,t,null,ce,le,re)}(r,n):function(e,t,n){return ae(e,t,n,oe,ie,re)}(r,n,c)}return{target:(t.activityType?t.activityType+"_":"")+t.activityStat,datapoints:r}},t.prototype.transformActivitiesToTable=function(e,t){for(var n={type:"table",columns:[{text:"Time"},{text:"name"},{text:"distance",unit:"lengthm"},{text:"moving_time",unit:"s"},{text:"elapsed_time",unit:"s"},{text:"total_elevation_gain",unit:"lengthm"},{text:"type"},{text:"kilojoules",unit:"joule"}],rows:[]},r=0,a=e;r<a.length;r++){var o=a[r],i=[Object(s.dateTime)(o.start_date),o.name,o.distance,o.moving_time,o.elapsed_time,o.total_elevation_gain,o.type,o.kilojoules];n.rows.push(i)}return n},t.prototype.transformActivitiesToWorldMap=function(e,t){for(var n={type:"table",columns:[{text:"value",unit:t.activityStat===u.Distance||t.activityStat===u.ElevationGain?"lengthm":"s"},{text:"name"},{text:"latitude"},{text:"longitude"}],rows:[]},r=0,a=e;r<a.length;r++){var o=a[r],i=V(o),s=i?i[0]:o.start_latitude,c=i?i[1]:o.start_longitude,l=[o[t.activityStat],o.name,s,c];o.start_latitude&&o.start_longitude&&n.rows.push(l)}return n},t}(s.DataSourceApi);function V(e){if(!e.map||!e.map.summary_polyline)return null;var t=e.map.summary_polyline,n=Q.decode(t);return n&&n.length?n[Math.floor(n.length/2)]:null}var X=36e5,Y=864e5,Z=6048e5,ee=24192e5;var te=0,ne=1,re=function(e){return e.reduce((function(e,t){return e+t}))};function ae(e,t,n,r,a,o){if(0===e.length)return[];for(var i,u,s=1e3*t.from.unix(),c=1e3*t.to.unix(),l=[],f=[],p=e.length?r(s,n):0,h=p,d=0;d<e.length;d++)if((h=r((u=e[d])[ne],n))===p)f.push(u[te]);else if(h>p){for(i=f.length?o(f):null,l.push([i,p]),p=a(p,n);p<h;)l.push([null,p]),p=a(p,n);f=[u[te]]}for(i=o(f),l.push([i,p]),p=a(p,n);p<c;)l.push([null,p]),p=a(p,n);return l}function oe(e,t){return Math.floor(e/t)*t}function ie(e,t){return e+t}function ue(e){return 1e3*B()(e).startOf("month").unix()}function se(e){return 1e3*B()(e).add(1,"month").unix()}function ce(e){var t=e-3456e5;return Math.floor(t/Z)*Z+3456e5}function le(e){return e+Z}n.d(t,"plugin",(function(){return pe}));var fe=function(){function e(){}return e.templateUrl="partials/annotations.editor.html",e}(),pe=new s.DataSourcePlugin(K).setConfigEditor(m).setQueryEditor(N).setExploreQueryField(N).setAnnotationQueryCtrl(fe)}])}));