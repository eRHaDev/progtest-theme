/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard"],
    rules: {
        "selector-class-pattern": ".*",
        "color-hex-length": "long",
        "alpha-value-notation": "number"
    }
};
