/*
jQWidgets v2.9.3 (2013-July-11)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/


(function ($) {

    $.jqx.jqxWidget("jqxInput", "", {});

    $.extend($.jqx._jqxInput.prototype, {
        defineInstance: function () {
            this.disabled = false;
            this.filter = this.filter || this._filter;
            this.sort = this.sort || this._sort;
            this.highlight = this.highlight || this._highlight;
            this.renderer = this.renderer || this._renderer;
            this.opened = false;
            this.$popup = $('<ul></ul>');
            this.items = 8;
            this.item = '<li><a href="#"></a></li>';
            this.minLength = 1;
            this.maxLength = null;
            this.source = [];
            this.roundedCorners = true;
            this.searchMode = 'default';
            this.placeHolder = "";
            this.width = null;
            this.height = null;
            this.value = "";
            this.rtl = false;
            this.displayMember = "";
            this.valueMember = "";
            this.events = ['select', 'open', 'close'];
            this.popupZIndex = 20000;
        },

        createInstance: function (args) {
            this.addHandlers();
            if (this.rtl) {
                this.host.addClass(this.toThemeProperty('jqx-rtl'));
            }
            this.host.attr('role', 'textbox');
            $.jqx.aria(this, "aria-autocomplete", "both");
            $.jqx.aria(this, "aria-disabled", this.disabled);
            $.jqx.aria(this, "aria-readonly", false);
            $.jqx.aria(this, "aria-multiline", false);
            if (this.source && this.source.length) {
                $.jqx.aria(this, "aria-haspopup", true);
            }
            if (this.value != "") {
                this.element.value = this.value;
            }

            this._oldsource = this.source;
            this._updateSource();
        },

        _updateSource: function()
        {
            var that = this;
            var mapItems = function (source) {
                var items = new Array;
                items = $.map(source, function (item) {
                    if (item == undefined)
                        return null;

                    if (typeof item === "string") {
                        return { label: item, value: item };
                    }

                    if (typeof item != "string") {
                        var label = "";
                        var value = "";

                        if (that.displayMember != "" && that.displayMember != undefined) {
                            if (item[that.displayMember]) {
                                label = item[that.displayMember];
                            }
                        }

                        if (that.valueMember != "" && that.valueMember != undefined) {
                            value = item[that.valueMember];
                        }

                        if (label == "") label = item.label;
                        if (value == "") value = item.value;

                        return { label: label, value: value };
                    }

                    return item;
                });
                return items;
            }

            if (this.source && this.source._source) {
                this.adapter = this.source;
                if (this.adapter._source.localdata != null) {
                    this.adapter.unbindBindingUpdate(this.element.id);
                    this.adapter.bindBindingUpdate(this.element.id, function (updatetype) {
                        that.source = mapItems(that.adapter.records);
                    });
                }
                else {
                    var postdata = {};
                    if (this.adapter._options.data) {
                        $.extend(that.adapter._options.data, postdata);
                    }
                    else {
                        if (this.source._source.data) {
                            $.extend(postdata, this.source._source.data);
                        }
                        this.adapter._options.data = postdata;
                    }
                    this.adapter.unbindDownloadComplete(this.element.id);
                    this.adapter.bindDownloadComplete(this.element.id, function (updatetype) {
                        that.source = mapItems(that.adapter.records);
                    });
                }
                this.source.dataBind();
                return;
            }

            if (!$.isFunction(this.source)) {
                this.source = mapItems(this.source);
            }
        },

        _refreshClasses: function (add) {
            var func = add ? 'addClass' : 'removeClass';
            this.host[func](this.toThemeProperty('jqx-widget-content'));
            this.host[func](this.toThemeProperty('jqx-input'));
            this.host[func](this.toThemeProperty('jqx-widget'));
            this.$popup[func](this.toThemeProperty('jqx-popup'));
            if ($.jqx.browser.msie) {
                this.$popup[func](this.toThemeProperty('jqx-noshadow'));
            }
            this.$popup[func](this.toThemeProperty('jqx-input-popup'));
            this.$popup[func](this.toThemeProperty('jqx-menu'));
            this.$popup[func](this.toThemeProperty('jqx-menu-vertical'));
            this.$popup[func](this.toThemeProperty('jqx-menu-dropdown'));
            this.$popup[func](this.toThemeProperty('jqx-widget'));
            this.$popup[func](this.toThemeProperty('jqx-widget-content'));
            if (this.roundedCorners) {
                this.host[func](this.toThemeProperty('jqx-rc-all'));
                this.$popup[func](this.toThemeProperty('jqx-rc-all'));
            }
            if (this.disabled) {
                this.host[func](this.toThemeProperty('jqx-fill-state-disabled'));
            }
            else {
                this.host.removeClass(this.toThemeProperty('jqx-fill-state-disabled'));
            }
        },

        selectAll: function()
        {
            var textbox = this.host;
            setTimeout(function () {
                if ('selectionStart' in textbox[0]) {
                    textbox[0].focus();
                    textbox[0].setSelectionRange(0, textbox[0].value.length);
                }
                else {
                    var range = textbox[0].createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', textbox[0].value.length);
                    range.moveStart('character', 0);
                    range.select();
                }
            }, 10);
        },

        selectLast: function () {
            var textbox = this.host;
            this.selectStart(textbox[0].value.length);
        },

        selectFirst: function () {
            var textbox = this.host;
            this.selectStart(0);
        },

        selectStart: function (index) {
            var textbox = this.host;
            setTimeout(function () {
                if ('selectionStart' in textbox[0]) {
                    textbox[0].focus();
                    textbox[0].setSelectionRange(index, index);
                }
                else {
                    var range = textbox[0].createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', index);
                    range.moveStart('character', index);
                    range.select();
                }
            }, 10);
        },

        focus: function () {
            try {
                this.host.focus();
            }
            catch (error) {
            }
        },

        refresh: function () {
            this._refreshClasses(false);
            this._refreshClasses(true);
            if (this.width) this.host.width(this.width);
            if (this.height) this.host.height(this.height);
            this.host.attr('disabled', this.disabled);
            if (this.maxLength) {
                this.host.attr("maxlength", this.maxLength);
            };

            if (!this.host.attr('placeholder')) {
                this._refreshPlaceHolder();
            }
        },

        _refreshPlaceHolder: function()
        {
            if ('placeholder' in this.element) {
                this.host.attr('placeHolder', this.placeHolder);
            }
            else {
                var that = this;
                if (this.host.val() == "") {
                    this.host.val(this.placeHolder);

                    this.host.focus(function () {
                        if (that.host.val() == that.placeHolder) {
                            that.host.val('');
                        }
                    });

                    this.host.blur(function () {
                        if (that.host.val() == '' || that.host.val() == that.placeHolder) {
                            that.host.val(that.placeHolder);
                        }
                    });
                }
            }
        },

        destroy: function () {
            this.removeHandlers();
            this.host.remove();
            if (this.$popup) {
                this.$popup.remove();
            }
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            if (key == 'placeHolder') {
                object._refreshPlaceHolder();
                return;
            }

            if (key == "opened") {
                if (value) object.open();
                else object.close();
                return;
            }
            if (key == "source") {
                object._oldsource = value;
                object._updateSource();
            }
            if (key == "displayMember" || key == "valueMember") {
                object.source = object._oldsource;
                object._updateSource();
            }
            if (key == "disabled") {
                $.jqx.aria(object, "aria-disabled", object.disabled);
            }

            if (key == "value") {
                object.element.value = value;
            }

            object.refresh();
        },

        select: function (event, ui) {
            var val = this.$popup.find('.jqx-fill-state-pressed').attr('data-value')
            var label = this.$popup.find('.jqx-fill-state-pressed').attr('data-name');
            this.host
            .val(this.renderer(label, this.host.val()));
            this._raiseEvent('0', {'item': { 'label': label, 'value': val }, 'label': label, 'value': val });
            return this.close();
        },

        val: function (value) {
            if (arguments.length == 0 || (value != null && typeof (value) == "object")) {
                return this.element.value;
            }

            this.value = value;
            this.element.value = value;
            return this.element.value;
        },

        _raiseEvent: function (id, arg) {
            if (arg == undefined)
                arg = { owner: null };

            var evt = this.events[id];
            arg.owner = this;

            var event = new jQuery.Event(evt);
            event.owner = this;
            event.args = arg;
            if (event.preventDefault)
                event.preventDefault();

            var result = this.host.trigger(event);
            return result;
        },

        _renderer: function (item) {
            return item;
        },

        open: function () {
            var position = $.extend({}, this.host.coord(true), {
                height: this.host[0].offsetHeight
            })

            if (this.$popup.parent().length == 0) {
                var popupId = this.element.id + "_" + "popup";
                this.$popup[0].id = popupId;
                $.jqx.aria(this, "aria-owns", popupId);
            }

            this.$popup
            .appendTo($(document.body))
            .css({
                position: 'absolute',
                zIndex: this.popupZIndex,
                top: position.top + position.height
            , left: position.left
            })
            .show();
            var height = 0;
            var children = this.$popup.children();
            $.each(children, function () {
                height += $(this).outerHeight(true) - 1;
            });
            this.$popup.height(height);

            this.opened = true;
            this._raiseEvent('1', { popup: this.$popup });
            $.jqx.aria(this, "aria-expanded", true);
            return this
        },

        close: function () {
            this.$popup.hide();
            this.opened = false;
            this._raiseEvent('2', { popup: this.$popup });
            $.jqx.aria(this, "aria-expanded", false);
            return this;
        },

        suggest: function (event) {
            var items;
            this.query = this.host.val();

            if (!this.query || this.query.length < this.minLength) {
                return this.opened ? this.close() : this
            }

            items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.load, this)) : this.source;

            return items ? this.load(items) : this;
        },

        load: function (items) {
            var that = this;

            items = $.grep(items, function (item) {
                return that.filter(item);
            })

            items = this.sort(items)

            if (!items.length) {
                return this.opened ? this.close() : this
            }

            return this.render(items.slice(0, this.items)).open();
        },

        _filter: function (item) {
            var value = this.query;
            var itemValue = item;
            if (item.label != null) {
                itemValue = item.label;
            }

            switch (this.searchMode) {
                case 'containsignorecase':
                default:
                    return $.jqx.string.containsIgnoreCase(itemValue, value);
                case 'contains':
                    return $.jqx.string.contains(itemValue, value);
                case 'equals':
                    return $.jqx.string.equals(itemValue, value);
                case 'equalsignorecase':
                    return $.jqx.string.equalsIgnoreCase(itemValue, value);
                case 'startswith':
                    return $.jqx.string.startsWith(itemValue, value);
                case 'startswithignorecase':
                    return $.jqx.string.startsWithIgnoreCase(itemValue, value);
                case 'endswith':
                    return $.jqx.string.endsWith(itemValue, value);
                case 'endswithignorecase':
                    return $.jqx.string.endsWithIgnoreCase(itemValue, value);
            }
        },

        _sort: function (items) {
            var beginswith = []
            , caseSensitive = []
            , caseInsensitive = []
            , item

            while (item = items.shift()) {
                var itemValue = item;
                if (item.label) {
                    itemValue = item.label;
                }

                if (!itemValue.toLowerCase().indexOf(this.query.toLowerCase())) {
                    beginswith.push(item);
                }
                else if (~itemValue.indexOf(this.query)) {
                    caseSensitive.push(item);
                }
                else {
                    caseInsensitive.push(item);
                }
            }

            return beginswith.concat(caseSensitive, caseInsensitive);
        },

        _highlight: function (item) {
            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>'
            })
        },

        render: function (items) {
            var that = this

            items = $(items).map(function (i, item) {
                var itemValue = item;
                if (item.value != undefined) {
                    if (item.label != undefined) {
                        i = $(that.item).attr({ 'data-name': item.label, 'data-value': item.value });
                    }
                    else {
                        i = $(that.item).attr({ 'data-name': item.value, 'data-value': item.value });
                    }
                }
                else if (item.label != undefined) {
                    i = $(that.item).attr({ 'data-value': item.label, 'data-name': item.label });
                }
                else {
                    i = $(that.item).attr({ 'data-value': item, 'data-name': item });
                }
                if (item.label) {
                    itemValue = item.label;
                }

                i.find('a').html(that.highlight(itemValue));
                var rtlClass = "";
                if (that.rtl) {
                    rtlClass = " " + that.toThemeProperty('jqx-rtl');
                }
                i[0].className = that.toThemeProperty('jqx-item') + " " + that.toThemeProperty('jqx-menu-item') + " " + that.toThemeProperty('jqx-rc-all') + rtlClass;
                return i[0];
            })

            items.first().addClass(this.toThemeProperty('jqx-fill-state-pressed'));
            this.$popup.html(items);
            this.$popup.width(this.host.width() - 4);
            return this;
        },

        next: function (event) {
            var active = this.$popup.find('.jqx-fill-state-pressed').removeClass(this.toThemeProperty('jqx-fill-state-pressed'))
            , next = active.next();

            if (!next.length) {
                next = $(this.$popup.find('li')[0]);
            }

            next.addClass(this.toThemeProperty('jqx-fill-state-pressed'));
        },

        prev: function (event) {
            var active = this.$popup.find('.jqx-fill-state-pressed').removeClass(this.toThemeProperty('jqx-fill-state-pressed'))
        , prev = active.prev()

            if (!prev.length) {
                prev = this.$popup.find('li').last()
            }

            prev.addClass(this.toThemeProperty('jqx-fill-state-pressed'));
        },

        addHandlers: function () {
            this.addHandler(this.host, 'focus', $.proxy(this.focus, this));
            this.addHandler(this.host, 'blur', $.proxy(this.blur, this));
            this.addHandler(this.host, 'keypress', $.proxy(this.keypress, this));
            this.addHandler(this.host, 'keyup', $.proxy(this.keyup, this));
            this.addHandler(this.host, 'keydown', $.proxy(this.keydown, this));
            this.addHandler(this.$popup, 'mousedown', $.proxy(this.click, this));
            if (this.host.on) {
                this.$popup.on('mouseenter', 'li', $.proxy(this.mouseenter, this));
            }
            else {
                this.$popup.bind('mouseenter', 'li', $.proxy(this.mouseenter, this));
            }
        },

        removeHandlers: function () {
            this.removeHandler(this.host, 'blur', $.proxy(this.blur, this));
            this.removeHandler(this.host, 'keypress', $.proxy(this.keypress, this));
            this.removeHandler(this.host, 'keyup', $.proxy(this.keyup, this));
            this.removeHandler(this.host, 'keydown', $.proxy(this.keydown, this));
            this.removeHandler(this.$popup, 'mousedown', $.proxy(this.click, this));
            if (this.host.off) {
                this.$popup.off('mouseenter', 'li', $.proxy(this.mouseenter, this));
            }
            else {
                this.$popup.unbind('mouseenter', 'li', $.proxy(this.mouseenter, this));
            }
        },

        move: function (e) {
            if (!this.opened) return

            switch (e.keyCode) {
                case 9: // tab
                case 13: // enter
                case 27: // escape
                    e.preventDefault()
                    break

                case 38: // up arrow
                    e.preventDefault()
                    this.prev()
                    break

                case 40: // down arrow
                    e.preventDefault()
                    this.next()
                    break
            }

            e.stopPropagation()
        },

        keydown: function (e) {
            this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27])
            this.move(e)
        },

        keypress: function (e) {
            if (this.suppressKeyPressRepeat) return
            this.move(e)
        },

        keyup: function (e) {
            switch (e.keyCode) {
                case 40: // down arrow
                case 38: // up arrow
                case 16: // shift
                case 17: // ctrl
                case 18: // alt
                    break

                case 9: // tab
                case 13: // enter
                    if (!this.opened) return;
                    this.select(e, this)
                    break

                case 27: // escape
                    if (!this.opened) return;
                    this.close()
                    break

                default:
                    {
                        var me = this;
                        if (this.timer) clearTimeout(this.timer);
                        this.timer = setTimeout(function () {
                            me.suggest();
                        }, 300);
                    }
            }

            e.stopPropagation()
            e.preventDefault()
        },

        clear: function()
        {
            this.host.val("");
        },

        blur: function (e) {
            var that = this;
            setTimeout(function () { that.close() }, 150)
            that.host.removeClass(that.toThemeProperty('jqx-fill-state-focus'));
        },

        focus: function (e) {
            var that = this;
            that.host.addClass(that.toThemeProperty('jqx-fill-state-focus'));
        },

        click: function (e) {
            e.stopPropagation()
            e.preventDefault()
            this.select(e, this)
        },

        mouseenter: function (e) {
            this.$popup.find('.jqx-fill-state-pressed').removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
            $(e.currentTarget).addClass(this.toThemeProperty('jqx-fill-state-pressed'));
        }

    });
})(jQuery);