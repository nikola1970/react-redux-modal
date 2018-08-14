import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const ConfirmModal = ({ message, onCancel, onSubmit }) => (
    <ModalBody>
        <h2>{message}</h2>
        <div style={{ textAlign: "center" }}>
            <button
                type="button"
                onClick={() => {
                    onSubmit();
                    onCancel();
                }}
            >
                OK!
            </button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </div>
    </ModalBody>
);

const ModalBody = styled.div`
    width: 400px;
    padding: 20px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
`;

ConfirmModal.propTypes = {
    message: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default ConfirmModal;
