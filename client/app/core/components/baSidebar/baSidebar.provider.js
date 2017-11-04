(function () {
  'use strict';

  angular.module('app.core')
    .provider('baSidebarService', BaSidebarServiceProvider);

  function BaSidebarServiceProvider() {
    var staticMenuItems = [];

    this.addStaticItem = function () {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    function get($state, layoutSizes) {
      return new _factory();

      function _factory() {
        var isMenuCollapsed = shouldMenuBeCollapsed();

        this.getMenuItems = function () {
          var states = defineMenuItemStates();
          var menuItems = states.filter(function (item) {
            return item.level === 0;
          });

          menuItems.forEach(function (item) {
            var children = states.filter(function (child) {
              return child.level === 1 && child.name.indexOf(item.name) === 0;
            });

            children.forEach(function (item) {
              var childrenChildren = states.filter(function (child2) {
                return child2.level === 2 && child2.name.indexOf(item.name) === 0;
              });
              item.subMenu = childrenChildren.length ? childrenChildren : null;
            });

            item.subMenu = children.length ? children : null;
          });

          return menuItems.concat(staticMenuItems);
        };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        this.setMenuCollapsed = function (isCollapsed) {
          isMenuCollapsed = isCollapsed;
        };

        this.isMenuCollapsed = function () {
          return isMenuCollapsed;
        };

        this.toggleMenuCollapsed = function () {
          isMenuCollapsed = !isMenuCollapsed;
        };

        this.getAllStateRefsRecursive = function (item) {
          var result = [];
          _iterateSubItems(item);
          return result;

          function _iterateSubItems(currentItem) {
            currentItem.subMenu && currentItem.subMenu.forEach(function (subItem) {
              subItem.stateRef && result.push(subItem.stateRef);
              _iterateSubItems(subItem);
            });
          }
        };

        function defineMenuItemStates() {
          return $state.get()
            .filter(function (sidebar) {
              return sidebar.sidebarMeta;
            })
            .map(function (sidebar) {
              var meta = sidebar.sidebarMeta;
              return {
                name: sidebar.name,
                title: sidebar.title,
                level: (sidebar.name.match(/\./g) || []).length - 1, //TODO: 수정사항 -1 제거
                order: meta.order,
                icon: meta.icon,
                stateRef: sidebar.name
              };
            })
            .sort(function (item1, item2) {
              return (item1.level - item2.level) * 100 + item1.order - item2.order;
            });
        }

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }
      }
    }

    this.$get = get;
  }
})();