import React from 'react';
import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';
// import {connect} from 'react-redux';
import {toggleInfoModal} from '../actions';

export default function Header (props) {

    // toggleInfoModal() {
    //     this.setState({
    //         showInfoModal: !this.state.showInfoModal
    //     });
    // }

    let infoModal;
    if (props.showInfoModal) {
    //     // showInfoModal = !this.state.showInfoModal;
        infoModal = <InfoModal onClose={() => (toggleInfoModal())} />;
    }

    return (
        <header>
            <TopNav />
                {/*// onNewGame={props.onNewGame} />*/}
            {infoModal}
            <h1>HOT or COLD</h1>
        </header>
    );
};

// const mapStateToProps = state => ({
//     showInfoModal: state.showInfoModal
// })

// export default connect(mapStateToProps)(Header);