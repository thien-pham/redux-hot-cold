import React from 'react';
import TopNav from './top-nav';
import InfoModal from './info-modal';
import { connect } from 'react-redux';
import './header.css';
// import {connect} from 'react-redux';
import {toggleInfoModal} from '../actions';

export function Header (props) {

    // toggleInfoModal() {
    //     this.setState({
    //         showInfoModal: !this.state.showInfoModal
    //     });
    // }

    let infoModal;
    if (props.showInfoModal) {
    //     // showInfoModal = !this.state.showInfoModal;
        infoModal = <InfoModal />;
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

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
})

export default connect(mapStateToProps)(Header);