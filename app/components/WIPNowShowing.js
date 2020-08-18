import React from 'react';
import { getMoviesShowing } from '../utils/api'
import ScrollMenu from 'react-horizontal-scrolling-menu';

const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
        >{text}</div>;
};

// All item component
// selected prop will be passed
export const Menu = ( list, selected ) =>
    list.map(el => {
        const {name} = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });

const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
            >{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

export default class WIPNowShowing extends React.Component {
    constructor(props) {
        super(props);

        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;

        const menu = this.menuItems;

        return (
            <div className={"WIPNowShowing"}>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }

}
