/*
jQWidgets v2.9.3 (2013-July-11)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

/*
* Depends:
*   jqxcore.js
*/

(function ($) {

    $.jqx.response = function () {
        this.defineInstance();
    }

    $.jqx.response.prototype = {

        defineInstance: function () {
            this._handlers = new Array();
            this.refresh();
            var that = this;
            this.addHandler($(document), 'scroll.jqxresponse', function () {
                that.scroll = that.getScroll();
            });
        },

        refresh: function()
        {
            this.os = this.getOS();
            this.browser = this.getBrowser();
            this.device = this.getDevice();
            this.viewPort = this.getViewPort();
            this.document = this.getDocument();
            this.scroll = this.getScroll();
            this.media = window.matchMedia || window.msMatchMedia || function () { return {}; };
        },

        refreshSize: function()
        {
            this.viewPort = this.getViewPort();
            this.document = this.getDocument();
        },

        addHandler: function (source, event, func, data) {
            switch (event) {
                case 'mousemove':
                    if (window.addEventListener && !data) {
                        source[0].addEventListener('mousemove', func, false);
                        return false;
                    }
                    break;
            }

            if (source.on) {
                source.on(event, func);
            }
            else {
                source.bind(event, func);
            }
        },

        removeHandler: function (source, event, func) {
            if (event == undefined) {
                if (source.off) {
                    source.off();
                }
                else source.unbind();
                return;
            }

            if (func == undefined) {
                if (source.off) {
                    source.off(event);
                }
                else {
                    source.unbind(event);
                }
            }
            else {
                if (source.off) {
                    source.off(event, func);
                }
                else {
                    source.unbind(event, func);
                }
            }
        },

        destroy: function()
        {
            this.removeHandler($(window), 'resize.jqxresponse');
            this.removeHandler($(document), 'scroll.jqxresponse');
            for (var i = 0; i < this._handlers.length; i++) {
                var element = this._handlers[i];
                this.removeHandler($(element), 'mousedown.response' + element[0].id);
                this.removeHandler($(element), 'touchstart.response' + element[0].id);
                this.removeHandler($(element), 'mousemove.response' + element[0].id);
                this.removeHandler($(element), 'touchmove.response' + element[0].id);
                this.removeHandler($(element), 'mouseup.response' + element[0].id);
                this.removeHandler($(element), 'touchend.response' + element[0].id);
            }
        },

        resize: function (resizeFuncs) {
            var that = this;
            this.removeHandler($(window), 'resize.jqxresponse');
            this.addHandler($(window), 'resize.jqxresponse', function (event) {
                if (resizeFuncs) {
                    if ($.isArray(resizeFuncs)) {
                        for (var i = 0; i < resizeFuncs.length; i++) {
                            resizeFuncs[i]();
                        }
                    }
                    else {
                        resizeFuncs();
                    }
                }
                that.refreshSize();
            });
            if (resizeFuncs == null) {
                this.removeHandler($(window), 'resize.jqxresponse');
            }
        },

        pointerDown: function(element, func)
        {
            if (element && func) {
                var touchDevice = $.jqx.mobile.isTouchDevice();
                var that = this;
                var canCallFunc = true;

                if (touchDevice) {
                    var touchstart = $.jqx.mobile.getTouchEventName('touchstart') + '.response' + element[0].id;

                    if (func != null) {
                        this.addHandler($(element), touchstart, function (event) {
                            var position = $.jqx.position(event);
                            var result = func(event, position, "touch");
                            canCallFunc = false;
                            setTimeout(function () {
                                canCallFunc = true;
                            }, 500);
                            return result;
                        });
                    }
                    else {
                        this.removeHandler($(element), touchstart);
                    }
                }
                if (func != null) {
                    this.addHandler($(element), 'mousedown.response' + element[0].id, function (event) {
                        var position = $.jqx.position(event);
                        if (canCallFunc) {
                            return func(event, position, "mouse");
                        }
                    });
                } else {
                    this.removeHandler($(element), 'mousedown.response' + element[0].id);
                }
                this._handlers.push(element);
            }
        },

        pointerUp: function (element, func) {
            if (element) {
                var touchDevice = $.jqx.mobile.isTouchDevice();
                var that = this;
                var canCallFunc = true;

                if (touchDevice) {
                    var touchend = $.jqx.mobile.getTouchEventName('touchend') + '.response' + element[0].id;

                    if (func != null) {
                        this.addHandler($(element), touchend, function (event) {
                            var position = $.jqx.position(event);
                            var result = func(event, position, "touch");
                            canCallFunc = false;
                            setTimeout(function () {
                                canCallFunc = true;
                            }, 500);
                            return result;
                        });
                    }
                    else {
                        this.removeHandler($(element), touchend);
                     
                    }
                }
                if (func != null) {
                    this.addHandler($(element), 'mouseup.response' + element[0].id, function (event) {
                        var position = $.jqx.position(event);
                        if (canCallFunc) {
                            return func(event, position, "mouse");
                        }
                    });
                }
                else {
                    this.removeHandler($(element), 'mouseup.response' + element[0].id);
                }
                this._handlers.push(element);
            }
        },

        pointerMove: function (element, func) {
            if (element) {
                var touchDevice = $.jqx.mobile.isTouchDevice();
          
                if (touchDevice) {
                    var touchmove = $.jqx.mobile.getTouchEventName('touchmove') + '.response' + element[0].id;

                    if (func != null) {
                        this.addHandler($(element), touchmove, function (event) {
                            var touches = $.jqx.mobile.getTouches(event);
                            if (touches.length == 1) {
                                var position = $.jqx.position(event);
                                return func(event, position, "touch");
                            }
                        });
                    }
                    else {
                        this.removeHandler($(element), touchmove);
                    }
                }
                else {
                    if (func != null) {
                        this.addHandler($(element), 'mousemove.response' + element[0].id, function (event) {
                            var position = $.jqx.position(event);
                            return func(event, position, "mouse");
                        });
                    }
                    else {
                        this.removeHandler($(element), 'mousemove.response' + element[0].id);
                    }
                }
                this._handlers.push(element);
            }
        },

        isHidden: function(element)
        {
            return $.jqx.isHidden($(element));
        },

        inViewPort: function(element)
        {
            var viewPort = this.viewPort;

            if (element.getBoundingClientRect) {
                var r = element.getBoundingClientRect ? element.getBoundingClientRect() : {};
                return r && (r.bottom >= 0 && r.top <= viewPort.height && r.right >= 0 && r.left <= viewPort.width);
            }
            return false;
        },

        getScroll: function()
        {
            var obj = { left: window.pageXOffset || document.scrollLeft, top: window.pageYOffset || document.scrollTop };
            if (obj.left == undefined) obj.left = 0;
            if (obj.top == undefined) obj.top = 0;

            return obj;
        },

        getDocument: function()
        {
            return { width: $(document).width(), height: $(document).height() }
        },

        getViewPort: function ()
        {
            return { width: $(window).width(), height: $(window).height() }
        },

        getTouch: function()
        {
            var eventName = 'ontouchstart';
            var supported = (eventName in window);
            if (supported) {
                return true;
            }
            else {
                var eventName = 'MSPointerDown';
                var supported = (eventName in window);
                if (supported) {
                    return true;
                }
            }
            if ($.jqx.mobile.isWindowsPhone())
                return true;

            return false;
        },

        getDevice: function()
        {
            var osName = this.os.name;
            var match = window.location.search.match(/deviceType=(Tablet|Phone)/),
               nativeDeviceType = window.deviceType;
            var deviceType = "";
            if (match && match[1]) {
                deviceType = match[1];
            }
            else if (nativeDeviceType === 'iPhone') {
                deviceType = 'Phone';
            }
            else if (nativeDeviceType === 'iPad') {
                deviceType = 'Tablet';
            }
            else {
                if (osName != "Android" && osName != "iOS" && /Windows|Linux|MacOS/.test(osName)) {
                    deviceType = 'Desktop';
                }
                else if (osName == "iOS" && navigator.userAgent.toLowerCase().indexOf('ipad') >= 0) {
                    deviceType = 'Tablet';
                }
                else if (osName == "RIMTablet") {
                    deviceType = 'Tablet';
                }
                else if (osName == "Android") {
                    if (this.os.version.indexOf("3") >= 0) {
                        deviceType = 'Tablet';
                    }
                    else if (this.os.version.indexOf("4") >= 0 && navigator.userAgent.search(/mobile/i) == -1) {
                        deviceType = 'Tablet';
                    }
                }
                else {
                    deviceType = 'Phone';
                }
            }

            if (/Windows/.test(osName)) {
                if (navigator.userAgent.indexOf('Windows Phone') >= 0 || navigator.userAgent.indexOf('WPDesktop') >= 0 || navigator.userAgent.indexOf('IEMobile') >= 0 || navigator.userAgent.indexOf('ZuneWP7') >= 0) {
                    deviceType = 'Phone';
                }
                else {
                    if (navigator.userAgent.indexOf('Touch') >= 0) {
                        deviceType = 'Tablet';
                    }
                }
            }

            return {
                // for device width - width, height for device height. The .availWidth/.availHeight methods give you the device size minus UI taskbars Device size is static and does not change when the page is resized or rotated.
                type: deviceType, touch: this.getTouch(), width: window.screen.width, height: window.screen.height,
                availWidth: window.screen.availWidth, availHeight: window.screen.availHeight
            }
        },

        canvas: function()
        {
            var canvasSupport = false;
            var canvas = document.createElement('canvas');
            if (canvas && canvas.getContext && canvas.getContext('2d')) {
                canvasSupport = true;
            }
            return canvasSupport;
        },

        vml: function () {
            if (this._vmlSupport == undefined) {
                var a = document.body.appendChild(document.createElement('div'));
                a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
                var b = a.firstChild;
                b.style.behavior = "url(#default#VML)";
                this._vmlSupport = b ? typeof b.adj == "object" : true;
                a.parentNode.removeChild(a);
            }
            return this._vmlSupport;
        },

        svg: function()
        {
            return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"); 
        },

        getBrowser: function()
        {
            var ua = navigator.userAgent.toLowerCase();
            var name = "";
            var match = null;
            var that = this;

            browserNames = {
                msie: { name: 'Internet Explorer', eval: /(msie) ([\w.]+)/.exec(ua) },
                webkit: { name: 'Webkit', eval: /(webkit)[ \/]([\w.]+)/.exec(ua) },
                chrome: { name: 'Chrome', eval: /(chrome)[ \/]([\w.]+)/.exec(ua) },
                safari: { name: 'Safari', eval: /(safari)[ \/]([\w.]+)/.exec(ua) },
                opera: { name: 'Opera', eval: /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) },
                operamobile: {name: 'Opera Mobile', eval: /(opera mobi)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(opera tablet)(?:.*version|)[ \/]([\w.]+)/.exec(ua)},
                dolphin: { name: 'Dolphin', eval: /(dolphin)[ \/]([\w.]+)/.exec(ua) },
                webosbrowser: {name: 'webOSBrowser', eval: /(wosbrowser)(?:.*version|)[ \/]([\w.]+)/.exec(ua)},
                chromemobile: {name: 'Chrome Mobile', eval: /(crmo)[ \/]([\w.]+)/.exec(ua)},
                silk: {name: 'Silk', eval: /(silk)[ \/]([\w.]+)/.exec(ua)},
                firefox: { name: 'Firefox', eval: /(firefox)[ \/]([\w.]+)/.exec(ua) },
                other: { name: 'Other', eval: ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) }
            }
            
            $.each(browserNames, function (index, value) {
                if (this.eval) {
                    if (this.name == "Other") {
                        if (!match) {
                            match = this.eval;
                            name = this.name;
                        }
                    }
                    else {
                        if (name == "Chrome" && this.name == "Safari")
                            return true;

                        match = this.eval;
                        name = this.name;
                    }
                }
            });

            if (match) {
                var browser = {
                    name: name,
                    accessName: match[1] || "",
                    version: match[2] || "0",
                    canvas: this.canvas(),
                    svg: this.svg(),
                    vml: this.vml()
                };

                browser[match[1]] = match[1];
            }
            else {
                browser = { name: 'Other', browser: 'other', version: '' };
            }

            return browser;
        },

        getOS: function () {
            var match = null;
            var version = "";
            var userAgent = navigator.userAgent;
            var os = "Other";
            var osTypes = {
                ios: { name: 'iOS', regex: new RegExp('(?:' + 'i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ' + ')([^\\s;]+)') },
                android: {name: 'Android', regex: new RegExp('(?:'+'(Android |HTC_|Silk/)'+')([^\\s;]+)')},
                webos: {name: 'webOS', regex: new RegExp('(?:'+'(?:webOS|hpwOS)\/'+')([^\\s;]+)')},
                blackberry: {name: 'BlackBerry', regex: new RegExp('(?:'+'BlackBerry(?:.*)Version\/'+')([^\\s;]+)')},
                rimTablet: {name: 'RIMTablet', regex:  new RegExp('(?:'+'RIM Tablet OS '+')([^\\s;]+)')},
                chrome: { name: 'Chrome OS', regex: new RegExp('CrOS') },
                mac: { name: 'MacOS', regex: new RegExp('mac') },
                win: {name: 'Windows', regex: new RegExp('win')},
                linux: { name: 'Linux', regex: new RegExp('linux') },
                bada: {name: 'Bada', regex: new RegExp('(?:'+'Bada\/'+')([^\\s;]+)')},
                other: {name: 'Other'}
            }

            $.each(osTypes, function (index, value) {
                match = userAgent.match(this.regex) || userAgent.toLowerCase().match(this.regex);

                if (match) {                    
                    if (!this.name.match(/Windows|Linux|MaxOS/))
                    {
                        if (match[1] && (match[1] == "HTC_" || match[1] == "Silk/")) {
                            version = "2.3";
                        } else {
                            version = match[match.length - 1];
                        }
                    }

                    os = { name: this.name, version: version, platform: navigator.platform };
                    return false;
                }
            });
            return os;
        }
    }
})(jQuery);