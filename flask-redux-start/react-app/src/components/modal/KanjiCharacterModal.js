import React, { useEffect } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useOutsideClick,
    Button
 } from "@chakra-ui/react"

import { closeKanjiModal } from "../../store/search";

import { useSelector, useDispatch } from "react-redux";

function KanjiCharacterModal() {

    const { onClose, onOpen, isOpen } = useDisclosure()
    const dispatch = useDispatch()
    const modalStatus = useSelector(state => state.searchReducer.showKanji)
    const searchResults = useSelector(state => state.searchReducer.searchResults)

    useEffect(() => {
        if (modalStatus) {
            onOpen()
        } else {
            return null
        }

    }, [modalStatus])


    const handleClose = () => {
        dispatch(closeKanjiModal())
        onClose()
    }

    if (!searchResults) {
        return null
    }

    return (
        <>
        {/* <Button onClick={onOpen}></Button> */}
        <Modal onClose={handleClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Kanji Search Result:</ModalHeader>
                <ModalBody>
                        {/* <KanjiSearchResult /> */}
                       <h1>
                           TEST MESSAGE
                       </h1>
                       {searchResults[0]?.kanjiCharacter}
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}

export default KanjiCharacterModal
