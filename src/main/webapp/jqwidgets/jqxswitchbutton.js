/*
jQWidgets v2.9.3 (2013-July-11)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/



(function ($) {

    $.jqx.jqxWidget("jqxSwitchButton", "", {});

    $.extend($.jqx._jqxSwitchButton.prototype, {
        defineInstance: function () {

            this.disabled = false;
            this.checked = false;
            this.onLabel = 'On';
            this.offLabel = 'Off';
            this.toggleMode = 'default';    //default, slide, click
            this.animationDuration = 250;
            this.width = 90;
            this.height = 30;
            this.animationEnabled = true;
            this.thumbSize = '40%';
            this.orientation = 'horizontal';
            this.switchRatio = '50%';
            this.metroMode = false;
            this._isMouseDown = false;
            this.rtl = false;
            this._dimensions = {
                horizontal: {
                    size: 'width',
                    opSize: 'height',
                    oSize: 'outerWidth',
                    opOSize: 'outerHeight',
                    pos: 'left',
                    oPos: 'top',
                    opposite: 'vertical'
                },
                vertical: {
                    size: 'height',
                    opSize: 'width',
                    oSize: 'outerHeight',
                    opOSize: 'outerWidth',
                    pos: 'top',
                    oPos: 'left',
                    opposite: 'horizontal'
                }
            };
            this._touchEvents = {
                'mousedown': 'touchstart',
                'click': 'touchend',
                'mouseup': 'touchend',
                'mousemove': 'touchmove',
                'mouseenter': 'mouseenter',
                'mouseleave': 'mouseleave'
            };
            this._borders = {};
            this._isTouchDevice = false;
            this._distanceRequired = 3;
            this._isDistanceTraveled = false;
            this._thumb;
            this._onLabel;
            this._offLabel;
            this._wrapper;
            this._animationActive = false;
            this.aria =
            {
                "aria-checked": { name: "checked", type: "boolean" },
                "aria-disabled": { name: "disabled", type: "boolean" }
            };
            this._events = ['checked', 'unchecked', 'change'];
        },

        createInstance: function (args) {
            if (this.element.nodeName) {
                if (this.element.nodeName == "INPUT" || this.element.nodeName == "BUTTON") {
                    throw "jqxSwitchButton can be rendered only from a DIV tag.";
                }
            }
            this.host.attr('role', 'checkbox');
            $.jqx.aria(this);
            this.render();
        },

        render: function()
        {
            this.innerHTML = "";
            if (this.theme && this.theme != "" && (this.theme.indexOf('metro') != -1 || this.theme.indexOf('office') != -1)) {
                if (this.thumbSize == '40%') this.thumbSize = 12;
                this.metroMode = true;
            }

            var count = $.data(document.body, 'jqx-switchbutton') || 1;
            this._idHandler(count);
            $.data(document.body, 'jqx-draggables', ++count);
            this._isTouchDevice = $.jqx.mobile.isTouchDevice();
            this.switchRatio = parseInt(this.switchRatio, 10);
            this._render();
            this._addClasses();
            this._performLayout();
            this._removeEventHandles();
            this._addEventHandles();
            this._disableSelection();
            var self = this;
            if (!this.checked) {
                this._switchButton(false, 0, true);
            }
            if (this.disabled) {
                this.element.disabled = true;
            }
        },

        setOnLabel: function (text) {
            this._onLabel.html('<div style="display: inline-block;">' + text + '</div>');
            this._centerLabels();
        },

        setOffLabel: function (text) {
            this._offLabel.html('<div style="display: inline-block;">' + text + '</div>');
            this._centerLabels();
        },

        toggle: function () {
            if (this.checked) {
                this.uncheck();
            } else {
                this.check();
            }
        },

        val: function (value) {
            if (arguments.length == 0 || (value != null && typeof (value) == "object")) {
                return this.checked;
            }

            if (typeof value == "string") {
                if (value == "true") this.check();
                if (value == "false") this.uncheck();
                if (value == "") this.indeterminate();
            }
            else {
                if (value == true) this.check();
                if (value == false) this.uncheck();
                if (value == null) this.indeterminate();
            }
            return this.checked;
        },

        uncheck: function () {
            var self = this;
            this._switchButton(false);
            $.jqx.aria(this, "aria-checked", this.checked);
        },

        check: function () {
            var self = this;
            this._switchButton(true);
            $.jqx.aria(this, "aria-checked", this.checked);
        },

        _idHandler: function (count) {
            if (!this.element.id) {
                var id = 'jqx-switchbutton-' + count;
                this.element.id = id;
            }
        },

        _dir: function (prop) {
            return this._dimensions[this.orientation][prop];
        },

        _getEvent: function (event) {
            if (this._isTouchDevice) {
                var eventName = this._touchEvents[event];
                return $.jqx.mobile.getTouchEventName(eventName);
            } else {
                return event;
            }
        },

        _render: function () {
            this._thumb = $('<div/>');
            this._onLabel = $('<div/>');
            this._offLabel = $('<div/>');
            this._wrapper = $('<div/>');
            this._onLabel.appendTo(this.host);
            this._thumb.appendTo(this.host);
            this._offLabel.appendTo(this.host);
            this.host.wrapInner(this._wrapper);
            this._wrapper = this.host.children();
            this.setOnLabel(this.onLabel);
            this.setOffLabel(this.offLabel);
        },

        _addClasses: function () {
            var thumb = this._thumb,
                onLabel = this._onLabel,
                offLabel = this._offLabel;
            this.host.addClass(this.toThemeProperty('jqx-switchbutton'));
            this.host.addClass(this.toThemeProperty('jqx-widget'));
            this.host.addClass(this.toThemeProperty('jqx-widget-content'));
            this._wrapper.addClass(this.toThemeProperty('jqx-switchbutton-wrapper'));
            thumb.addClass(this.toThemeProperty('jqx-fill-state-normal'));
            thumb.addClass(this.toThemeProperty('jqx-switchbutton-thumb'));
            onLabel.addClass(this.toThemeProperty('jqx-switchbutton-label-on'));
            onLabel.addClass(this.toThemeProperty('jqx-switchbutton-label'));
            offLabel.addClass(this.toThemeProperty('jqx-switchbutton-label-off'));
            offLabel.addClass(this.toThemeProperty('jqx-switchbutton-label'));
        },

        _performLayout: function () {
            var el = this.host,
                opSize = this._dir('opSize'),
                size = this._dir('size'),
                wrapper = this._wrapper,
                border;
            el.css({
                width: this.width,
                height: this.height
            });
            wrapper.css(opSize, el[opSize]());
            this._thumbLayout();
            this._labelsLayout();
            border = this._borders[this._dir('opposite')];
            wrapper.css(size, el[size]() + this._offLabel[this._dir('oSize')]() + border);
            wrapper.css(opSize, el[opSize]());

            if (this.metroMode || (this.theme && this.theme != "" && (this.theme.indexOf('metro') != -1 || this.theme.indexOf('office') != -1))) {
                var thumb = this._thumb,
                 onLabel = this._onLabel,
                 offLabel = this._offLabel;
                onLabel.css('position', 'relative');
                onLabel.css('top', '1px');
                onLabel.css('margin-left', '1px');
                offLabel.css('position', 'relative');
                offLabel.css('top', '1px');
                offLabel.css('left', '-2px');
                offLabel.css('margin-right', '1px');
                offLabel.height(onLabel.height() - 2);
                offLabel.width(onLabel.width() - 3);

                onLabel.height(onLabel.height() - 2);
                onLabel.width(onLabel.width() - 3);
                this._thumb[this._dir('size')](this.thumbSize + 3);
                this._thumb.css('top', '-1px');
                this._thumb[this._dir('opSize')](el[this._dir('opSize')]() + 2);
                this._thumb.css('position', 'relative');
                this.host.css('overflow', 'visible');
                if (this.checked) {
                    this._onLabel.css('visibility', 'visible');
                    this._offLabel.css('visibility', 'hidden');
                    this._thumb.css('left', '0px');
                }
                else {
                    this._onLabel.css('visibility', 'hidden');
                    this._offLabel.css('visibility', 'visible');
                    this._thumb.css('left', '-2px');
                }
            }
        },

        _thumbLayout: function () {
            var size = this.thumbSize,
                el = this.host,
                verticalBorders = 0,
                borders = { horizontal: 0, vertical: 0 },
                self = this;
            if (size.toString().indexOf('%') >= 0) {
                size = el[this._dir('size')]() * parseInt(size, 10) / 100;
            }
            this._thumb[this._dir('size')](size);
            this._thumb[this._dir('opSize')](el[this._dir('opSize')]());
            this._handleThumbBorders();
        },

        //We guess that the left/right and bottom/top borders are with equal width because of easier computations
        _handleThumbBorders: function () {
            this._borders['horizontal'] = parseInt(this._thumb.css('border-left-width'), 10) || 0;
            this._borders['horizontal'] += parseInt(this._thumb.css('border-right-width'), 10) || 0;
            this._borders['vertical'] = parseInt(this._thumb.css('border-top-width'), 10) || 0;
            this._borders['vertical'] += parseInt(this._thumb.css('border-bottom-width'), 10) || 0;
            var border = this._borders[this._dir('opposite')];
            if (this.orientation === 'horizontal') {
                this._thumb.css('margin-top', -border / 2);
                this._thumb.css('margin-left', 0);
            } else {
                this._thumb.css('margin-left', -border / 2);
                this._thumb.css('margin-top', 0);
            }
        },

        _labelsLayout: function () {
            var el = this.host,
                thumb = this._thumb,
                opSize = this._dir('opSize'),
                dimension = this._dir('size'),
                outerDimension = this._dir('oSize'),
                size = el[dimension]() - thumb[outerDimension](),
                border = this._borders[this._dir('opposite')] / 2;
            this._onLabel[dimension](size + border);
            this._offLabel[dimension](size + border);
            if (this.rtl) {
                this._onLabel[dimension](size + 2*border);
            }

            this._onLabel[opSize](el[opSize]())
            this._offLabel[opSize](el[opSize]());
            this._orderLabels();
            this._centerLabels();
        },

        _orderLabels: function () {
            if (this.orientation === 'horizontal') {
                var fl = 'left';
                if (this.rtl) fl = 'right';
                this._onLabel.css('float', fl);
                this._thumb.css('float', fl);
                this._offLabel.css('float', fl);
            } else {
                this._onLabel.css('display', 'block');
                this._offLabel.css('display', 'block');
            }
        },

        _centerLabels: function () {
            var l1 = this._onLabel.children('div'),
                l2 = this._offLabel.children('div'),
                parent = l1.parent(),
                wrapperHeight = parent.height(),
                labelHeight = l1.outerHeight(),
                border = this._borders[this.orientation] / 2 || 0;
                if (labelHeight == 0) {
                    labelHeight = 14;
                }
                var distance = Math.floor((wrapperHeight - labelHeight) / 2) + border;
            l1.css('margin-top', distance);
            l2.css('margin-top', distance);
        },

        _removeEventHandles: function () {
            var namespace = '.' + this.element.id;
            this.removeHandler(this._wrapper, this._getEvent('click') + namespace + this.element.id, this._clickHandle);
            this.removeHandler(this._thumb, this._getEvent('mousedown') + namespace, this._mouseDown);
            this.removeHandler($(document), this._getEvent('mouseup') + namespace, this._mouseUp);
            this.removeHandler($(document), this._getEvent('mousemove') + namespace, this._mouseMove);
        },

        _addEventHandles: function () {
            var namespace = '.' + this.element.id,
                self = this;
            this.addHandler(this._thumb, 'mouseenter' + namespace, function () {
                self._thumb.addClass(self.toThemeProperty('jqx-fill-state-hover'));
            });
            this.addHandler(this._thumb, 'mouseleave' + namespace, function () {
                self._thumb.removeClass(self.toThemeProperty('jqx-fill-state-hover'));
            });
            this.addHandler(this._wrapper, this._getEvent('click') + namespace, this._clickHandle, { self: this });
            this.addHandler(this._thumb, this._getEvent('mousedown') + namespace, this._mouseDown, { self: this });
            this.addHandler($(document), this._getEvent('mouseup') + namespace, this._mouseUp, { self: this });
            this.addHandler($(document), this._getEvent('mousemove') + namespace, this._mouseMove, { self: this });
        },

        enable: function () {
            this.disabled = false;
            this.element.disabled = false;
            $.jqx.aria(this, "aria-disabled", this.disabled);
        },

        disable: function () {
            this.disabled = true;
            this.element.disabled = true;
            $.jqx.aria(this, "aria-disabled", this.disabled);
        },

        _clickHandle: function (event) {
            var self = event.data.self;
            if ((self.toggleMode === 'click' || self.toggleMode === 'default') && !self.disabled) {
                if (!self._isDistanceTraveled && !self._dragged) {
                    self._wrapper.stop();
                    self.toggle();
                }
            }
            self._thumb.removeClass(self.toThemeProperty('jqx-fill-state-pressed'));
        },

        _mouseDown: function (event) {
            var self = event.data.self,
                wrapper = self._wrapper;
            if (self.metroMode) {
                self.host.css('overflow', 'hidden');
                self._onLabel.css('visibility', 'visible');
                self._offLabel.css('visibility', 'visible');
            }
            self._mouseStartPosition = self._getMouseCoordinates(event);
            self._buttonStartPosition = {
                left: parseInt(wrapper.css('margin-left'), 10) || 0,
                top: parseInt(wrapper.css('margin-top'), 10) || 0
            };
            if (!self.disabled && (self.toggleMode === 'slide' || self.toggleMode === 'default')) {
                self._wrapper.stop();
                self._isMouseDown = true;
                self._isDistanceTraveled = false;
                self._dragged = false;
            }
            self._thumb.addClass(self.toThemeProperty('jqx-fill-state-pressed'));
        },

        _mouseUp: function (event) {
            var self = event.data.self;
            if (self.metroMode) {
                self.host.css('overflow', 'visible');
            }
            self._isMouseDown = false;
            self._thumb.removeClass(self.toThemeProperty('jqx-fill-state-pressed'));
            if (!self._isDistanceTraveled) {
                return;
            }
            var wrapper = self._wrapper,
                position = parseInt(wrapper.css('margin-' + self._dir('pos')), 10) || 0,
                distancePassed = self._dropHandler(position);
            if (distancePassed) {
                self._switchButton(!self.checked);
            } else {
                self._switchButton(self.checked, null, true);
            }
            self._isDistanceTraveled = false;
        },

        _mouseMove: function (event) {
            var self = event.data.self,
                mousePos = self._getMouseCoordinates(event);
            if (self._isMouseDown && self._distanceTraveled(mousePos)) {
                var dir = self._dir('pos'),
                    wrapper = self._wrapper,
                    btnPos = self._buttonStartPosition[dir],
                    pos = btnPos + mousePos[dir] - self._mouseStartPosition[dir],
                    pos = self._validatePosition(pos);
                self._dragged = true;
                wrapper.css('margin-' + self._dir('pos'), pos);
                self._onLabel.css('visibility', 'visible');
                self._offLabel.css('visibility', 'visible');

                return false;
            }
        },

        _distanceTraveled: function (mousePos) {
            if (this._isDistanceTraveled) {
                return true;
            } else if (!this._isMouseDown) {
                return false;
            } else {
                var start = this._mouseStartPosition,
                    distance = this._distanceRequired;
                this._isDistanceTraveled = Math.abs(mousePos.left - start.left) >= distance || Math.abs(mousePos.top - start.top) >= distance;
                return this._isDistanceTraveled;
            }
        },

        _validatePosition: function (position) {
            var border = this._borders[this._dir('opposite')],
                max = 0,
                min = -(this.host[this._dir('size')]() - this._thumb[this._dir('oSize')]()) - border;
            if (max < position) {
                return max;
            }
            if (min > position) {
                return min;
            }
            return position;
        },

        _dropHandler: function (position) {
            var max = 0,
                min = -(this.host[this._dir('size')]() - this._thumb[this._dir('oSize')]()),
                distance = Math.abs(min - max),
                distanceTraveled = Math.abs(position - this._buttonStartPosition[this._dir('pos')]),
                distanceRequired = distance * (this.switchRatio / 100);
            if (distanceTraveled >= distanceRequired) {
                return true;
            }
            return false;
        },

        _switchButton: function (check, duration, notTrigger) {
            if (this.metroMode) {
                this.host.css('overflow', 'hidden');
                this._onLabel.css('visibility', 'visible');
                this._offLabel.css('visibility', 'visible');
                if (check) {
                    this._thumb.css('left', '0px');
                }
                else {
                    this._thumb.css('left', '-2px');
                }
            }
            else {
                this._onLabel.css('visibility', 'visible');
                this._offLabel.css('visibility', 'visible');
            }

            var wrapper = this._wrapper,
                self = this,
                options = {},
                border = this._borders[this._dir('opposite')],
                position = 0;
            if (typeof duration === 'undefined') {
                duration = (this.animationEnabled ? this.animationDuration : 0);
            }

            if (!this.rtl) {
                if (!check) {
                    position = this.host[this._dir('size')]() - this._thumb[this._dir('oSize')]() + border;
                }
            }
            else {
                if (check) {
                    position = this.host[this._dir('size')]() - this._thumb[this._dir('oSize')]() + border;
                    if (this.metroMode) {
                        position += 5;
                    }
                }
                else
                    if (this.metroMode) {
                        position -= 3;;
                    }
            }


            options['margin-' + this._dir('pos')] = -position;
     
            wrapper.animate(options, duration, function () {
                if (!notTrigger) {
                    self._handleEvent(check);
                }
                if (self.metroMode) self.host.css('overflow', 'visible');
                if (check) {
                    self._onLabel.css('visibility', 'visible');
                    self._offLabel.css('visibility', 'hidden');
                }
                else {
                    self._onLabel.css('visibility', 'hidden');
                    self._offLabel.css('visibility', 'visible');
                }

                self.checked = check;
            });
        },

        _handleEvent: function (checked) {
            if (checked !== this.checked) {
                this._raiseEvent(2, { check: checked });
            }
            if (checked) {
                this._raiseEvent(0);
            } else {
                this._raiseEvent(1);
            }
        },

        _disableSelection: function () {
            var el = this.host,
                children = el.find('*');
            $.each(children, function (i, el) {
                el.onselectstart = function () { return false };
                $(el).addClass('jqx-disableselect');
            });
        },

        _getMouseCoordinates: function (event) {
            if (this._isTouchDevice) {
                return {
                    left: event.originalEvent.touches[0].pageX,
                    top: event.originalEvent.touches[0].pageY
                };
            } else {
                return {
                    left: event.pageX,
                    top: event.pageY
                };
            }
        },

        destroy: function () {
            this._removeEventHandlers();
            this.host.removeClass(this.toThemeProperty('jqx-switchbutton'));
            this._wrapper.remove();
        },

        _raiseEvent: function (id, args) {
            var event = $.Event(this._events[id]);
            event.args = args;
            return this.host.trigger(event);
        },

        _themeChanger: function (oldTheme, theme, element) {
            if (!oldTheme) {
                return;
            }
            if (typeof element === 'undefined') {
                element = this.host;
            }
            var classNames = element[0].className.split(' '),
                oldClasses = [], newClasses = [],
                children = element.children();
            for (var i = 0; i < classNames.length; i += 1) {
                if (classNames[i].indexOf(oldTheme) >= 0) {
                    oldClasses.push(classNames[i]);
                    newClasses.push(classNames[i].replace(oldTheme, theme));
                }
            }
            this._removeOldClasses(oldClasses, element);
            this._addNewClasses(newClasses, element);
            for (var i = 0; i < children.length; i += 1) {
                this._themeChanger(oldTheme, theme, $(children[i]));
            }
        },

        _removeOldClasses: function (classes, element) {
            for (var i = 0; i < classes.length; i += 1) {
                element.removeClass(classes[i]);
            }
        },

        _addNewClasses: function (classes, element) {
            for (var i = 0; i < classes.length; i += 1) {
                element.addClass(classes[i]);
            }
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            switch (key) {
                case 'disabled':
                    if (value) {
                        this.disable();
                    }
                    else {
                        this.enable();
                    }
                    break;
                case 'switchRatio':
                    this.switchRatio = parseInt(this.switchRatio, 10);
                    break;
                case 'checked':
                    if (value) {
                        this.check();
                    } else {
                        this.uncheck();
                    }
                    break;
                case 'onLabel':
                    this.setOnLabel(value);
                    break;
                case 'offLabel':
                    this.setOffLabel(value);
                    break;
                case 'theme':
                    $.jqx.utilities.setTheme(oldvalue, value, object.host);          
                    break;
                case 'width':
                case 'height':
                case 'thumbSize':
                case 'orientation':
                    this._performLayout();
                    this._wrapper.css('left', 0);
                    this._wrapper.css('top', 0);
                    this._switchButton(this.checked, 0, true);
                    break;
            }
        }
    });
})(jQuery);