/*
jQWidgets v2.9.3 (2013-July-11)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function ($) {
    $.extend($.jqx._jqxGrid.prototype, {
        _initpager: function () {
            var me = this;
            var pagergotopagestring = this.gridlocalization.pagergotopagestring;
            var pagerrangestring = this.gridlocalization.pagerrangestring;
            var pagershowrowsstring = this.gridlocalization.pagershowrowsstring;

            var top = (this.pagerheight - 17) / 2;

            this.pagerdiv = this.pagerdiv || $('<div style="width: 100%; height: 100%; position: relative;"></div>');
            if (!this.pageable) {
                this.pagerdiv.remove();
                this.vScrollBar.jqxScrollBar({ thumbSize: 0 });
                return;
            }

            if (!this.pagerrenderer) {
                this.pagerdiv.css('top', top);
                this.pagergotoinput = this.pagergotoinput || $('<div style="margin-right: 7px; width: 27px; height: 17px; float: right;"><input style="margin-top: 0px; text-align: right; width: 27px;" type="text"/></div>');
                this.pagergoto = this.pagergoto || $('<div style="float: right; margin-right: 7px;"></div>');
                this.pagerrightbutton = this.pagerrightbutton || $('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>');
                this.pagerleftbutton = this.pagerleftbutton || $('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>');
                this.pagerdetails = this.pagerdetails || $('<div style="margin-right: 7px; float: right;"></div>');
                this.pagershowrows = this.pagershowrows || $('<div style="margin-right: 7px; float: right;"></div>');
                if (this.pagershowrowscombo && this.pagershowrowscombo.jqxDropDownList) {
                    this.pagershowrowscombo.remove();
                    this.pagershowrowscombo = null;
                }
                this.pagergotoinput.attr('disabled', this.disabled);

                this.pagershowrowscombo = this.pagershowrowscombo || $('<div id="gridpagerlist" style="margin-top: 0px; margin-right: 7px; float: right;"></div>');
                this.pagerdiv.children().remove();
                this.pagershowrowscombo[0].id = "gridpagerlist" + this.element.id;
                this.removeHandler(this.pagerrightbutton, 'mousedown');
                this.removeHandler(this.pagerrightbutton, 'mouseup');
                this.removeHandler(this.pagerrightbutton, 'click');
                this.removeHandler(this.pagerleftbutton, 'mousedown');
                this.removeHandler(this.pagerleftbutton, 'mouseup');
                this.removeHandler(this.pagerleftbutton, 'click');

                this.pagerleftbutton.attr('title', this.gridlocalization.pagerpreviousbuttonstring);
                this.pagerrightbutton.attr('title', this.gridlocalization.pagernextbuttonstring);

                this.pagerdiv.append(this.pagerrightbutton);
                this.pagerdiv.append(this.pagerleftbutton);
                this.pagerrightbutton.jqxButton({ cursor: 'pointer', disabled: this.disabled, theme: this.theme });
                this.pagerleftbutton.jqxButton({ cursor: 'pointer', disabled: this.disabled, theme: this.theme });

                this.pagerleftbutton.find('.jqx-icon-arrow-left').remove();
                this.pagerrightbutton.find('.jqx-icon-arrow-right').remove();

                var leftarrow = $("<div style='margin-left: 6px; width: 15px; height: 15px;'></div>");
                leftarrow.addClass(this.toThemeProperty('jqx-icon-arrow-left'));
                this.pagerleftbutton.wrapInner(leftarrow);

                var rightarrow = $("<div style='margin-left: 6px; width: 15px; height: 15px;'></div>");
                rightarrow.addClass(this.toThemeProperty('jqx-icon-arrow-right'));
                this.pagerrightbutton.wrapInner(rightarrow);

                this.pagerdiv.append(this.pagerdetails);
                this.pagerdiv.append(this.pagershowrowscombo);
                this.pagerdiv.append(this.pagershowrows);
                this.pagerdiv.append(this.pagergotoinput);
                this.pagerdiv.append(this.pagergoto);

                var source = this.pagesizeoptions;
                if (!this.pagershowrowscombo.jqxDropDownList) {
                    throw new Error('jqxGrid: jqxdropdownlist.js is not loaded.');
                    return;
                }

                this.pagershowrowscombo.jqxDropDownList({rtl: this.rtl, disabled: this.disabled, source: source, enableBrowserBoundsDetection: true, keyboardSelection: false, autoDropDownHeight: true, width: 44, height: 16, theme: this.theme });
                var selectedindex = 0;
                for (var i = 0; i < source.length; i++) {
                    if (this.pagesize >= source[i]) {
                        selectedindex = i;
                    }
                }
                this.pagershowrows[0].innerHTML = pagershowrowsstring;
                this.pagergoto[0].innerHTML = pagergotopagestring;
                this.updatepagerdetails();
                this.pager.append(this.pagerdiv);
                this.pagershowrowscombo.jqxDropDownList({ selectedIndex: selectedindex });
                this.pagerpageinput = this.pagergotoinput.find('input');
                this.pagerpageinput.addClass(this.toThemeProperty('jqx-input'));
                this.pagerpageinput.addClass(this.toThemeProperty('jqx-widget-content'));
                if (this.rtl) {
                    this.pagerpageinput.css('direction', 'rtl');
                }

                var me = this;
                this.removeHandler(this.pagershowrowscombo, 'select');
                this.addHandler(this.pagershowrowscombo, 'select', function (event) {
                    if (event.args) {
                        if (me.vScrollInstance) {
                            me.vScrollInstance.setPosition(0);
                        }

                        if (me.editcell != null && me.endcelledit) {
                            me.endcelledit(me.editcell.row, me.editcell.column, true, false);
                        }

                        var index = event.args.index;
                        var recordindex = me.dataview.pagenum * me.dataview.pagesize;
                        var pagesize = source[index];
                        var oldpagesize = me.pagesize;
                        me.pagesize = parseInt(pagesize);
                        if (isNaN(me.pagesize)) {
                            me.pagesize = 10;
                        }
                        if (pagesize >= 100) {
                            me.pagershowrowscombo.jqxDropDownList({ width: 55 });
                        }
                        else {
                            me.pagershowrowscombo.jqxDropDownList({ width: 44 });
                        }

                        me.dataview.pagesize = me.pagesize;
                        var pagenum = Math.floor(recordindex / me.dataview.pagesize);
                        me.prerenderrequired = true;
                        me._requiresupdate = true;
                        me._raiseEvent(10, { pagenum: pagenum, oldpagesize: oldpagesize, pagesize: me.dataview.pagesize });
                        me.gotopage(pagenum);
                        if (me.autoheight && me._updatesizeonwindowresize) {
                            me._updatesize(true);
                            setTimeout(function () {
                                me._updatesize(true);
                            }, 500);
                        }
                    }
                });

                var input = this.pagergotoinput.find('input');
                input.addClass(this.toThemeProperty('jqx-grid-pager-input'));
                input.addClass(this.toThemeProperty('jqx-rc-all'));
                this.removeHandler(input, 'keydown');
                this.removeHandler(input, 'change');
        
                this.addHandler(input, 'keydown', function (event) {
                    if (event.keyCode >= 65 && event.keyCode <= 90)
                        return false;

                    if (event.keyCode == '13') {
                        var val = input.val();
                        val = parseInt(val);
                        if (!isNaN(val)) {
                            me.gotopage(val - 1);
                        }
                        return false;
                    }
                });
                this.addHandler(input, 'change', function () {
                    var val = input.val();
                    val = parseInt(val);
                    if (!isNaN(val)) {
                        me.gotopage(val - 1);
                    }
                });

                this.addHandler(this.pagerrightbutton, 'mouseenter', function () {
                    rightarrow.addClass(me.toThemeProperty('jqx-icon-arrow-right-hover'));
                });

                this.addHandler(this.pagerleftbutton, 'mouseenter', function () {
                    leftarrow.addClass(me.toThemeProperty('jqx-icon-arrow-left-hover'));
                });

                this.addHandler(this.pagerrightbutton, 'mouseleave', function () {
                    rightarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-right-hover'));
                });

                this.addHandler(this.pagerleftbutton, 'mouseleave', function () {
                    leftarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-left-hover'));
                });

                this.addHandler(this.pagerrightbutton, 'mousedown', function () {
                    rightarrow.addClass(me.toThemeProperty('jqx-icon-arrow-right-selected'));
                });

                this.addHandler(this.pagerrightbutton, 'mouseup', function () {
                    rightarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-right-selected'));
                });

                this.addHandler(this.pagerleftbutton, 'mousedown', function () {
                    leftarrow.addClass(me.toThemeProperty('jqx-icon-arrow-left-selected'));
                });

                this.addHandler(this.pagerleftbutton, 'mouseup', function () {
                    leftarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-left-selected'));
                });

                this.addHandler($(document), 'mouseup.pagerbuttons' + this.element.id, function () {
                    rightarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-right-selected'));
                    leftarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-left-selected'));
                });

                this.addHandler(this.pagerrightbutton, 'click', function () {
                    if (!me.pagerrightbutton.jqxButton('disabled')) {
                        me.gotonextpage();
                    }
                });
                this.addHandler(this.pagerleftbutton, 'click', function () {
                    if (!me.pagerleftbutton.jqxButton('disabled')) {
                        me.gotoprevpage();
                    }
                });
            }
            else {
                this.pagerdiv.children().remove();
                var element = this.pagerrenderer();
                if (element != null) {
                    this.pagerdiv.append($(element));
                }
                this.pager.append(this.pagerdiv);
            }

            this.vScrollBar.jqxScrollBar({ thumbSize: this.host.height() / 5 });
            this.vScrollBar.jqxScrollBar('refresh');
            this._arrange();
        },

        _updatepagertheme: function () {
            if (this.pagershowrowscombo == null)
                return;

            this.pagershowrowscombo.jqxDropDownList({ theme: this.theme });
            this.pagerrightbutton.jqxButton({ theme: this.theme });
            this.pagerleftbutton.jqxButton({ theme: this.theme });

            this.pagerpageinput.removeClass();

            var input = this.pagergotoinput.find('input');
            input.removeClass();
            input.addClass(this.toThemeProperty('jqx-grid-pager-input'));
            input.addClass(this.toThemeProperty('jqx-rc-all'));
            this.pagerpageinput.addClass(this.toThemeProperty('jqx-input'));
            this.pagerpageinput.addClass(this.toThemeProperty('jqx-widget-content'));

            this.pagerleftbutton.find('.jqx-icon-arrow-left').remove();
            this.pagerrightbutton.find('.jqx-icon-arrow-right').remove();

            var leftarrow = $("<div style='width: 27px; height: 15px;'></div>");
            leftarrow.addClass(this.toThemeProperty('jqx-icon-arrow-left'));
            this.pagerleftbutton.wrapInner(leftarrow);

            var rightarrow = $("<div style='width: 27px; height: 15px;'></div>");
            rightarrow.addClass(this.toThemeProperty('jqx-icon-arrow-right'));
            this.pagerrightbutton.wrapInner(rightarrow);

            var removeHandlers = function (me, button) {
                me.removeHandler(button, 'mouseenter');
                me.removeHandler(button, 'mouseleave');
                me.removeHandler(button, 'mousedown');
                me.removeHandler(button, 'mouseup');
            }
            removeHandlers(this, this.pagerrightbutton);
            removeHandlers(this, this.pagerleftbutton);
            var me = this;
            this.addHandler(this.pagerrightbutton, 'mouseenter', function () {
                rightarrow.addClass(me.toThemeProperty('jqx-icon-arrow-right-hover'));
            });

            this.addHandler(this.pagerleftbutton, 'mouseenter', function () {
                leftarrow.addClass(me.toThemeProperty('jqx-icon-arrow-left-hover'));
            });

            this.addHandler(this.pagerrightbutton, 'mouseleave', function () {
                rightarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-right-hover'));
            });

            this.addHandler(this.pagerleftbutton, 'mouseleave', function () {
                leftarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-left-hover'));
            });

            this.addHandler(this.pagerrightbutton, 'mousedown', function () {
                rightarrow.addClass(me.toThemeProperty('jqx-icon-arrow-right-selected'));
            });

            this.addHandler(this.pagerrightbutton, 'mouseup', function () {
                rightarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-right-selected'));
            });

            this.addHandler(this.pagerleftbutton, 'mousedown', function () {
                leftarrow.addClass(me.toThemeProperty('jqx-icon-arrow-left-selected'));
            });

            this.addHandler(this.pagerleftbutton, 'mouseup', function () {
                leftarrow.removeClass(me.toThemeProperty('jqx-icon-arrow-left-selected'));
            });
        },

        gotopage: function (pagenum) {
            if (pagenum == null || pagenum == undefined)
                pagenum = 0;

            if (pagenum == -1)
                pagenum = 0;

            if (pagenum < 0)
                return;

            var totalrecords = this.dataview.totalrecords;
            if (this.summaryrows) {
                totalrecords += this.summaryrows.length;
            }

            var oldpagenum = this.pagenum;
            this._raiseEvent(25, { oldpagenum: this.dataview.pagenum, pagenum: pagenum, pagesize: this.dataview.pagesize });

            var pages = Math.ceil(totalrecords / this.pagesize);
            if (pagenum >= pages) {
                if (this.dataview.totalrecords == 0) {
                    this.dataview.pagenum = 0;
                    this.updatepagerdetails();
                }
                if (pagenum > 0) {
                    pagenum = pages - 1;
                }
            }

            if (this.dataview.pagenum != pagenum || this._requiresupdate) {
                if (this.pageable) {
                    if (this.source.pager) {
                        this.source.pager(pagenum, this.dataview.pagesize, this.dataview.pagenum);
                    }

                    this.dataview.pagenum = pagenum;

                    if (this.virtualmode) {
                        this.hiddens = new Array();
                        this.expandedgroups = new Array();
                        if (this.rendergridrows) {
                            var startboundindex = pagenum * this.dataview.pagesize;
                            var endboundindex = startboundindex + this.dataview.pagesize;
                            if (startboundindex != null && endboundindex != null) {
                                if (this.pagerrightbutton) {
                                    this.pagerrightbutton.jqxButton({ disabled: true });
                                    this.pagerleftbutton.jqxButton({ disabled: true });
                                    this.pagershowrowscombo.jqxDropDownList({ disabled: true });
                                }
                                this.updatebounddata('pagechanged');
                                this._raiseEvent(9, { pagenum: pagenum, oldpagenum: oldpagenum, pagesize: this.dataview.pagesize });
                                this.updatepagerdetails();
                                if (this.autosavestate) {
                                    if (this.savestate) this.savestate();
                                }
                                return;
                            }
                        }
                    }
                    else this.dataview.updateview();

                    this._loadrows();

                    this._updatepageviews();
                    this.tableheight = null;
                    this._updatecolumnwidths();
                    this._updatecellwidths();
                    this._renderrows(this.virtualsizeinfo);
                    this.updatepagerdetails();
                    if (this.autoheight) {
                        var newheight = this.host.height() - this._gettableheight();
                        height = newheight + this._pageviews[0].height;
                        if (height != this.host.height()) {
                            this._arrange();
                            this._updatepageviews();
                            if (this.autorowheight) {
                                this._renderrows(this.virtualsizeinfo);
                            }
                            //               if (totalrecords == 0 && !this.virtualmode) this._renderrows(this.virtualsizeinfo);               
                        }
                    }

                    if (this.editcell != null && this.endcelledit) {
                        this.endcelledit(this.editcell.row, this.editcell.column, true, false);
                    }

                    this._raiseEvent(9, { pagenum: pagenum, oldpagenum: oldpagenum, pagesize: this.dataview.pagesize });
                    if (this.autosavestate) {
                        if (this.savestate) this.savestate();
                    }
                }
            }
        },

        // goes to a previous page.
        gotoprevpage: function () {
            if (this.dataview.pagenum > 0) {
                this.gotopage(this.dataview.pagenum - 1);
            }
            else {
                var totalrecords = this.dataview.totalrecords;
                if (this.summaryrows) {
                    totalrecords += this.summaryrows.length;
                }
                var pages = Math.ceil(totalrecords / this.pagesize);
                this.gotopage(pages - 1);
            }
        },

        // goes to a next page.
        gotonextpage: function () {
            var totalrecords = this.dataview.totalrecords;
            if (this.summaryrows) {
                totalrecords += this.summaryrows.length;
            }
            var pages = Math.ceil(totalrecords / this.pagesize);
            if (this.dataview.pagenum < pages - 1) {
                this.gotopage(this.dataview.pagenum + 1);
            }
            else {
                this.gotopage(0);
            }
        },

        // updates a pager details.
        updatepagerdetails: function () {
            if (this.pagerdetails != null && this.pagerdetails.length > 0) {
                var currentrecord = this.dataview.pagenum * this.pagesize;
                var lastrecord = (this.dataview.pagenum + 1) * this.pagesize;
                if (lastrecord >= this.dataview.totalrecords) {
                    lastrecord = this.dataview.totalrecords;
                }
                var totalrecords = this.dataview.totalrecords;
                if (this.summaryrows) {
                    totalrecords += this.summaryrows.length;
                    if ((this.dataview.pagenum + 1) * this.pagesize > this.dataview.totalrecords)
                    { lastrecord = totalrecords; }
                }

                currentrecord++;
                var input = this.pagergotoinput.find('input');
                input.val(this.dataview.pagenum + 1);
                var pagescount = Math.round(totalrecords / this.dataview.pagesize);
                if (pagescount > 1) pagescount--;
                pagescount++;

                this.pagergotoinput.attr('title', '1 - ' + pagescount);
                if (lastrecord == 0 && lastrecord < currentrecord) {
                    currentrecord = 0;
                }

                this.pagerdetails[0].innerHTML = currentrecord + '-' + lastrecord + this.gridlocalization.pagerrangestring + totalrecords;

                if (currentrecord > lastrecord) {
                    this.gotoprevpage();
                }
            }
        },

        _updatepagedview: function (totalrows, virtualheight, currentheight) {
            var self = this;
            if (this.dataview.rows.length != this.dataview.pagesize) {
                this.dataview.updateview();
            }

            var rowslength = this.dataview.rows.length;
            for (var i = 0; i < rowslength; i++) {
                var index = this.dataview.rows[i].visibleindex;
                var rowinfo = { index: index, height: this.heights[index], hidden: this.hiddens[index], details: this.details[index] }
                if (this.heights[index] == undefined) {
                    this.heights[index] = this.rowsheight;
                    rowinfo.height = this.rowsheight;
                }
                if (this.hiddens[index] == undefined) {
                    this.hiddens[index] = false;
                    rowinfo.hidden = false;
                }
                if (this.details[index] == undefined) {
                    this.details[index] = null;
                }
                if (rowinfo.height != self.rowsheight) {
                    virtualheight -= self.rowsheight;
                    virtualheight += rowinfo.height;
                }

                if (rowinfo.hidden) {
                    virtualheight -= rowinfo.height;
                }
                else {
                    currentheight += rowinfo.height;
                    var detailsheight = 0;
                    if (this.rowdetails) {
                        if (rowinfo.details && rowinfo.details.rowdetails && !rowinfo.details.rowdetailshidden) {
                            detailsheight = rowinfo.details.rowdetailsheight;
                            currentheight += detailsheight;
                            virtualheight += detailsheight;
                        }
                    }
                }
            }
            this._pageviews[0] = { top: 0, height: currentheight };
            return virtualheight;
        }
    });
})(jQuery);