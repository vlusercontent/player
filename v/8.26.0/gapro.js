!function(){"use strict";var t="2.1.5",e={universalga:"ga",trackerName:"",label:"file",trackingobject:"_gaq",gtag:"gtag"},i=function(){function t(t,i){var n=this;if(this.player=t,this.utils=t.utils,this._=t._,this._config=this._.extend({},e,i),this.onGaTrack=i.debug&&this._.isFunction(i.onGaTrack)?i.onGaTrack:this.utils.noop,this._universalWrapper=void 0,this._currItem=void 0,this._state=void 0,this._casting=!1,("string"!=typeof this._config.gtag||void 0===window[this._config.gtag])&&"function"!=typeof this._config.gtag){var a=this.getTrackingObject_();if(!a||"string"==typeof a)return void this.utils.log("Could not find Google Analytics Interface.",this._config)}this.player.on("playlistItem",(function(t){var e,i,a,r=t.item;n._currItem=n._.extend({played:!1},r),n._currItem.label=(e=n.utils,i=r,a=n._config.label,i?a&&i[a]&&i[a].length?"file"===a?e.getAbsolutePath(i[a]):i[a]:i.file?i.file:i.sources?function(t,e){for(var i=[],n=e.length-1;n--;)e[n].file&&i.push(e[n].file);return i.sort(),t.getAbsolutePath(i[0])}(e,i.sources):"":"")})),this.player.on("play",(function(t){n._currItem.played?"paused"===n._state&&n.trackEventNew("Resume","interaction"!==t.playReason):(n._currItem.played=!0,n.trackEventNew("Play","interaction"!==t.playReason)),n._state="playing"})),this.player.on("buffer",(function(){n.trackEventNew("Buffer",!0),n._state="buffering"})),this.player.on("pause",(function(t){n.trackEventNew("Pause","interaction"!==t.pauseReason),n._state="paused"})),this.player.on("seek",(function(){n.trackEventNew("Seek",!0)})),this.player.on("complete",(function(){n.trackEventNew("Complete",!0)})),this.player.on("cast",(function(t){n._casting=Boolean(t.active)}))}var i=t.prototype;return i.getTrackingObject_=function(){return window[this._config.universalga]?(this._universalWrapper||(this._universalWrapper={push:function(t){var e=window[this._config.universalga],i=this._config.trackerName?this._config.trackerName+".send":"send";t.splice(0,1,i,"event"),t[5]={nonInteraction:t[6]},t.length=6,e.apply(window,t)}}),this._universalWrapper):"string"==typeof this._config.trackingobject?window[this._config.trackingobject]:this._config.trackingobject},i.trackAsync=function(t,e,i,n){this.getTrackingObject_().push(["_trackEvent",t,e,i,void 0,n])},i.trackSync=function(t,e,i,n){this.getTrackingObject_()._trackEvent(t,e,i,void 0,n)},i.trackGtag=function(t,e,i,n,a){t("event",i,{event_category:e,event_label:n,event_action:i,non_interaction:a})},i.trackEventNew=function(t,e){var i="",n="function"==typeof this._config.gtag?this._config.gtag:window[this._config.gtag];this._casting||(n?(i="gtag",this.trackGtag(n,"JW Player Video",t,this._currItem.label,e)):void 0!==this.getTrackingObject_()._trackEvent?(i="sync",this.trackSync("JW Player Video",t,this._currItem.label,e)):void 0!==this.getTrackingObject_().push&&(i="async",this.trackAsync("JW Player Video",t,this._currItem.label,e)),this.onGaTrack({type:i,category:"JW Player Video",action:t,label:this._currItem.label,nonInteraction:e}))},t}();i.version=t,(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)("gapro","8.0.0",i)}();
