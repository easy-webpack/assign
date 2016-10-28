"use strict";
function assign(current, addition, property, style) {
    if (property === void 0) { property = 'config'; }
    if (style === void 0) { style = 'replace'; }
    if (addition === undefined) {
        return current;
    }
    if (Array.isArray(current) && Array.isArray(addition)) {
        switch (style) {
            case 'append': return (_a = current).concat.apply(_a, addition);
            case 'prepend': return (_b = addition).concat.apply(_b, current);
            default: return addition.slice();
        }
    }
    else if (Array.isArray(addition)) {
        return addition.slice();
    }
    else if (typeof addition === 'object') {
        if (typeof current !== 'object' || addition['_literalReplace'])
            current = {};
        else
            current = Object.assign({}, current);
        for (var _i = 0, _c = Object.getOwnPropertyNames(addition); _i < _c.length; _i++) {
            var subProperty = _c[_i];
            current[subProperty] = assign(current[subProperty], addition[subProperty], property + "." + subProperty, style);
        }
        return current;
    }
    return addition;
    var _a, _b;
}
exports.assign = assign;
function literalReplace(object) {
    object['_literalReplace'] = true;
    return object;
}
exports.literalReplace = literalReplace;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assign;
//# sourceMappingURL=index.js.map