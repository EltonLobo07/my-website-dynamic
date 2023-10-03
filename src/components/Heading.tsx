type Props = Omit<JSX.IntrinsicElements["h1"], "ref"> & {lvl: 1 | 2 | 3 | 4 | 5 | 6};

export function Heading(props: Props) {
    const {
        lvl,
        ...otherProps
    } = props;

    switch (lvl) {
        case 1:
            return <h1 {...otherProps} />;
        case 2:
            return <h2 {...otherProps} />;
        case 3:
            return <h3 {...otherProps} />;
        case 4:
            return <h4 {...otherProps} />;
        case 5:
            return <h5 {...otherProps} />;
        case 6:
            return <h6 {...otherProps} />;
        default:
            throw new Error("Invalid lvl prop");
    }
}
