function CareScale(props) {
    const range = [1, 2, 3];
    const type = props.careType === 'light' ? '☀️' : '💧';

    function handClick(e) {
        let str;
        switch (props.scaleValue)
        {
            case 1:
                str = "peu";
                break;
            case 2:
                str = "modéremment";
                break;
            case 3:
                str = "beaucoup";
                break;
            default:
                str = "";
                break;
        }
        if (props.careType === "light")
            str += ' de lumière';
        else
            str += " d'arrosage";
        alert(str);
        e.stopPropagation();
    }

    return (
        <div onClick={handClick}>
            {range.map((nbre) => (nbre <= props.scaleValue) ?
            <span key={nbre.toString()}>
                {type}
            </span> : null)}
        </div>
    )
}

export default CareScale