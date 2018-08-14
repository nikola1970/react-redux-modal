import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import Portal from "./Portal";
import ConfirmModal from "./ConfirmModal";
import { hideModal } from "../../actions/modal.actions";

import { CONFIRM_MODAL } from "../../constants";

const MODAL_TYPES = {
    [CONFIRM_MODAL]: ConfirmModal
};

const ProxyModal = ({ modalType, modalProps, hideModal }) => {
    const Modal = MODAL_TYPES[modalType];

    if (!Modal) {
        return null;
    }

    return (
        <Portal>
            <ModalWrapper className="bla">
                <Modal onCancel={hideModal} {...modalProps} />
            </ModalWrapper>
        </Portal>
    );
};

ProxyModal.defaultProps = {
    modalType: "",
    modalProps: {}
};

ProxyModal.propTypes = {
    modalType: PropTypes.string,
    modalProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    hideModal: PropTypes.func.isRequired
};

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const mapStateToProps = state => ({
    modalType: state.modals.modalType,
    modalProps: state.modals.modalProps
});

export default connect(
    mapStateToProps,
    { hideModal }
)(ProxyModal);
