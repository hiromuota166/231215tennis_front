'use client';
import React, { useState } from 'react';
import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton } from '@chakra-ui/react';
import SearchDate from './SearchDate';

function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [date, setDate] = useState('');

  const handleDateChange = newDate => {
    setDate(newDate);
  }

  const handleSearch = () => {
    // 日付から年、月、日を抽出
    const [year, month, day] = date.split('-');
  
    // バックエンドへのURLを構築
    const url = `https://hello-world-pkza.onrender.com/?year=${year}&month=${month}&day=${day}`;
  
    // バックエンドへのリクエストを送信
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // 応答データを処理
        // 応答データを状態やコンポーネントに反映する処理（必要に応じて）
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>検索日変更</ModalHeader>
          <ModalCloseButton />
            <SearchDate onDateChange={handleDateChange}/>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSearch}>
              検索
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchModal;
