(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  const Utils = $.fn.bootstrapTable.utils;

  Utils.extend($.fn.bootstrapTable.defaults, {
    classes: 'table table-hover',
    buttonsPrefix: '',
    buttonsClass: 'btn',
    iconsPrefix: 'bt-tailwind-icon',
    icons: {
      clearSearch: 'bt-tailwind-icon-clear',
      advancedSearchIcon: 'bt-tailwind-icon-search',
      autoRefresh: 'bt-tailwind-icon-refresh',
      collapseGroup: 'bt-tailwind-icon-minus',
      columns: 'bt-tailwind-icon-columns',
      copy: 'bt-tailwind-icon-copy',
      customViewOff: 'bt-tailwind-icon-toggle-off',
      customViewOn: 'bt-tailwind-icon-toggle-on',
      detailClose: 'bt-tailwind-icon-minus',
      detailOpen: 'bt-tailwind-icon-plus',
      expandGroup: 'bt-tailwind-icon-plus',
      export: 'bt-tailwind-icon-export',
      filterControlSwitchHide: 'bt-tailwind-icon-filter-hide',
      filterControlSwitchShow: 'bt-tailwind-icon-filter-show',
      fullscreen: 'bt-tailwind-icon-fullscreen',
      minus: 'bt-tailwind-icon-minus',
      paginationSwitchDown: 'bt-tailwind-icon-page-down',
      paginationSwitchUp: 'bt-tailwind-icon-page-up',
      plus: 'bt-tailwind-icon-plus',
      print: 'bt-tailwind-icon-print',
      refresh: 'bt-tailwind-icon-refresh',
      search: 'bt-tailwind-icon-search',
      sort: 'bt-tailwind-icon-sort',
      toggleOff: 'bt-tailwind-icon-toggle-off',
      toggleOn: 'bt-tailwind-icon-toggle-on'
    }
  });

  $.fn.bootstrapTable.theme = 'tailwind';

  $.BootstrapTable = class extends $.BootstrapTable {
    initConstants () {
      super.initConstants();

      this.constants.classes.buttonsGroup = 'btn-group';
      this.constants.classes.buttonsDropdown = 'btn-group dropdown';
      this.constants.classes.buttonActive = 'active';
      this.constants.classes.dropdownActive = 'active';
      this.constants.classes.dropup = 'dropup';
      this.constants.classes.input = 'form-control';
      this.constants.classes.inputGroup = 'input-group';
      this.constants.classes.inputPrefix = 'form-control-';
      this.constants.classes.paginationActive = 'active';
      this.constants.classes.paginationDropdown = 'btn-group dropdown';
      this.constants.classes.pull = 'float';
      this.constants.classes.select = 'form-select';

      this.constants.html.dropdownCaret = '<span class="caret"></span>';
      this.constants.html.icon = '<span class="%s %s" aria-hidden="true"></span>';
      this.constants.html.inputGroup = '<div class="input-group">%s%s</div>';
      this.constants.html.pageDropdown = ['<div class="dropdown-menu">', '</div>'];
      this.constants.html.pageDropdownItem = '<a class="dropdown-item %s" href="#">%s</a>';
      this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'];
      this.constants.html.paginationItem = '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>';
      this.constants.html.searchButton = '<button class="%s" type="button" name="search" title="%s">%s %s</button>';
      this.constants.html.searchClearButton = '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>';
      this.constants.html.searchInput = '<input class="%s%s" type="search" placeholder="%s">';
      this.constants.html.toolbarDropdown = ['<div class="dropdown-menu">', '</div>'];
      this.constants.html.toolbarDropdownItem = '<label class="dropdown-item dropdown-item-marker">%s</label>';
      this.constants.html.toolbarDropdownSeparator = '<div class="dropdown-divider"></div>';
    }

    initToolbar () {
      super.initToolbar();
      this.handleDropdowns();
    }

    initPagination () {
      super.initPagination();
      this.handleDropdowns();
    }

    handleDropdowns () {
      const $container = this.$container;
      const $dropdowns = $container.find('.dropdown');

      $dropdowns.off('click.bs.dropdown.tailwind').on('click.bs.dropdown.tailwind', e => {
        const $dropdown = $(e.currentTarget);

        e.stopPropagation();
        $dropdowns.not($dropdown).removeClass('show')
          .children('.dropdown-menu').removeClass('show');
        $dropdown.toggleClass('show');
        $dropdown.children('.dropdown-menu').toggleClass('show', $dropdown.hasClass('show'));
      });

      $container.find('.dropdown-menu')
        .off('click.bs.dropdown.tailwind')
        .on('click.bs.dropdown.tailwind', e => {
          e.stopPropagation();
        });

      $container.find('.page-list .dropdown-menu a')
        .off('click.bs.dropdown.tailwind')
        .on('click.bs.dropdown.tailwind', e => {
          $(e.currentTarget).closest('.dropdown').removeClass('show')
            .children('.dropdown-menu').removeClass('show');
        });

      $(document)
        .off('click.bs.dropdown.tailwind')
        .on('click.bs.dropdown.tailwind', () => {
          $dropdowns.removeClass('show')
            .children('.dropdown-menu').removeClass('show');
        });
    }
  };

}));
