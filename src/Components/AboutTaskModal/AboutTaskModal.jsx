import React, { useEffect, useState, useRef, useCallback } from "react"

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Flex, Textarea, Badge, Box } from "@chakra-ui/react"

import textCoctroller from "../../features/textCoctroller"

// actions
import { updateTask, deleteTask } from '../../store/slices/tasksSlice'

// Buttons
import SaveButton from "./Buttons/SaveButton"
import EditButton from "./Buttons/EditButton"
import DeleteButton from "./Buttons/DeleteButton"
import CloseButton from "./Buttons/CloseButton"


export default function AboutTaskModal({ itemDataForModal, isModalOpen, closeModal }) { // myData, item, data,

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const pageNum = useSelector((store) => store.app.page)
  const [editorButton, setEditorButton] = useState(false)
  const textareaRef = useRef(null)
  const modalBodyRef = useRef(null)


  const editorButtonHandler = (e) => {
    e.target.blur()
    setEditorButton((stateEditor) => !stateEditor)
  }

  const closeModalHandler = () => {
    closeModal()
    setEditorButton(false)
  }

  const saveEditorHandler = () => {
    const textValue = modalBodyRef.current.querySelector('textarea').value
    // const itemIndex = itemDataForModal.index
    const itemKey = itemDataForModal.key
    if (textCoctroller.isEmpty(textValue)) {
      dispatch(updateTask({ pageNum, textValue, itemKey }))
      closeModal()
    } else {
      return
    }
  }

  const deleteItemHandler = (itemKey) => {
    dispatch(deleteTask({ pageNum, itemKey }))
  }

  // Закрывайте модальное окно и предотвращайте переход назад при нажатии кнопки "назад"
  const handlePopstate = useCallback((event) => {
    if (isModalOpen) {
      closeModalHandler();
    } else {
      navigate(-1);
    }
  }, []);

  //TODO Для смартфонов закрытие модалки по кнопке назад

  useEffect(() => {
    // Добавьте слушатель события popstate при монтировании компонента
    window.addEventListener('popstate', handlePopstate);

    // Удалите слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [handlePopstate, closeModal]);


  // Помещаем курсор в конец текста в textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus(); // Активация фокуса
      const textLength = textareaRef.current.value.length;
      // Установка позиции курсора в конец текста
      textareaRef.current.setSelectionRange(textLength, textLength);
    }
  }, [editorButton]);

  const handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      // Обработка события Ctrl + Enter
      event.preventDefault(); // Отменить стандартное действие (например, отправку формы)
      // Ваш код здесь
      saveEditorHandler()
    }
  }

  useEffect(() => {
    console.log('----TASK Modar Render');
  })
  return (
    <>
      <Modal onClose={closeModalHandler} isOpen={isModalOpen} isCentered >
        <ModalOverlay />
        <ModalContent m={'1rem 1rem auto'}>
          <ModalHeader>
            <Badge backgroundColor={itemDataForModal.status === 'done' ? '#2a9d8f' : '#f4a261'}>{itemDataForModal.status === 'done' ? 'Завершенно' : 'Сделать'}</Badge>
          </ModalHeader>
          <ModalCloseButton fontSize={'1rem'} />
          <ModalBody ref={modalBodyRef}
            p={'1rem'}
          // border={'2px solid'} borderRadius={'4px'} borderColor={'#A0AEC0'}
          // m={'auto 1rem'}
          >
            {editorButton ? (
              <Textarea
                ref={textareaRef}
                fontSize={'1rem'}
                size='sm'
                overflow="auto"
                defaultValue={itemDataForModal.text}
                autoFocus
                onKeyUp={handleKeyPress}
              >
              </Textarea>
            ) : (
                <Box
                  border={'2px solid'} borderRadius={'4px'} borderColor={'#A0AEC0'}
                  p={'1rem'}
                  fontSize={'1rem'}
                >
                  {itemDataForModal.text}

                </Box>
            )}

          </ModalBody>
          <ModalFooter>
            <Flex w={'100%'} justifyContent={'space-between'}>
              {editorButton ? (
                <>
                  <SaveButton saveEditorHandler={saveEditorHandler}></SaveButton>
                  <CloseButton closeModalHandler={closeModalHandler}></CloseButton>
                </>

              ) : (<>
                <EditButton editorButtonHandler={editorButtonHandler}></EditButton>
                  <DeleteButton deleteItemHandler={deleteItemHandler} itemKey={itemDataForModal.key}></DeleteButton>
              </>

              )}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}