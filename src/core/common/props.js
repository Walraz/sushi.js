const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xlarge']

export const size = (defaultSize = 'medium') => {
    return {
        type: String,
        default: () => defaultSize,
        validator: size => {
            return sizes.includes(size)
        },
    }
}
