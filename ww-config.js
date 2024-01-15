export default {
    editor: {
        label: {
            en: 'Radio',
        },
        icon: 'radio',
    },
    properties: {
        color: {
            label: { en: 'Color' },
            type: 'Color',
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            /* wwEditor:start */
            bindingValidation: {
                cssSupports: 'color',
                type: 'string',
                tooltip: 'A string that represents a color code: `"rebeccapurple" | "#00ff00" | "rgb(214, 122, 127)"`',
            },
            /* wwEditor:end */
        },
        size: {
            label: { en: 'Size' },
            type: 'Length',
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
        },
    },
};
