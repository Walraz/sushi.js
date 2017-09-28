const sizes = ['small', 'medium', 'large', 'xlarge', 'xxlarge']

export const size = (defaultSize = 'medium') => {
    return {
        type: String,
        default: () => defaultSize,
        validator: size => {
            return sizes.includes(size)
        },
    }
}
