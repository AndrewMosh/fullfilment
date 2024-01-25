import React, { useState, useEffect, useRef } from 'react';

function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return {
        isModalOpen,
        openModal,
        closeModal,
        modalRef,
    };
}

export default useModal;