'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function hasClass(node, className) {
    if (!node) return false;
    if (node.classList) {
        return node.classList.contains(className);
    }
    var originClass = node.className;
    return (' ' + originClass + ' ').indexOf(' ' + className + ' ') > -1;
}
function addClass(node, className) {
    if (node) {
        if (node.classList) {
            node.classList.add(className);
        } else if (!hasClass(node, className)) {
            node.className = node.className + ' ' + className;
        }
    }
}
function removeClass(node, className) {
    if (node) {
        if (node.classList) {
            node.classList.remove(className);
        } else if (hasClass(node, className)) {
            var originClass = node.className;
            node.className = (' ' + originClass + ' ').replace(' ' + className + ' ', '');
        }
    }
}